import slugify from "slugify";
import bookModel from "../models/bookModel.js";
import userModel from "../models/userModel.js";

export const addBook = async (req, res) => {
  const userId = req.user.id;
  try {
    const {
      title,
      authors,
      description,
      categories,
      publisher,
      edition,
      language,
      isbn,
      publishedYear,
      pricing,
      inventory,
      images,
      tags,
      seo,
      isFeatured,
      isBestseller,
    } = req.body;

    if (
      !title ||
      !authors ||
      !description ||
      !categories ||
      !pricing.price ||
      !images?.cover
    ) {
      return res.status(400).json({
        success: false,
        message: "Required fields are missing",
      });
    }

    const slug = slugify(title, { lower: true, strict: true });

    //Check duplicate book (by slug or ISBN)
    const existingBook = await bookModel.findOne({
      $or: [{ slug }, { isbn }],
    });

    if (existingBook) {
      return res.status(409).json({
        success: true,
        message: "Book already exists",
      });
    }

    const book = await bookModel.create({
      title,
      slug,
      authors,
      description,
      categories: categories.map((c) => c.toLowerCase().trim()),
      publisher,
      edition,
      language,
      isbn,
      publishedYear,
      pricing,
      inventory,
      images,
      tags,
      seo,
      isFeatured,
      isBestseller,
      createdBy: userId,
    });

    return res.status(201).json({
      success: true,
      message: "Book added successfully",
      book,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      message: error.message,
      //   message: "Interal server error",
    });
  }
};

export const getBooks = async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      category,
      minPrice,
      maxPrice,
      language,
      search,
      sort,
    } = req.body;

    // Base filter
    const filter = {
      isActive: true,
    };

    // Category filter (array-based)
    if (category) {
      filter.categories = category.toLowerCase();
    }

    // Language filter
    if (language) {
      filter.language = language;
    }

    // Price filter
    if (minPrice || maxPrice) {
      filter["pricing.price"] = {};
      if (minPrice) filter["pricing.price"].$gte = Number(minPrice);
      if (maxPrice) filter["pricing.price"].$lte = Number(minPrice);
    }

    // search filter (title + author)
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: "i" } },
        { "authors.name": { $regex: search, $options: "i" } },
      ];
    }

    // Sorting logic
    let sortBy = { createdAt: -1 };
    if (sort === "price") sortBy = { "pricing.price": 1 };
    if (sort === "-price") sortBy = { "pricing.price": -1 };
    if (sort === "-rating") sortBy = { "ratings.average": -1 };

    // pagination
    const skip = (Number(page) - 1) * Number(limit);

    const books = await bookModel
      .find(filter)
      .sort(sortBy)
      .skip(skip)
      .limit(Number(limit));

    const totalBooks = await bookModel.countDocuments(filter);

    return res.status(200).json({
      success: true,
      totalBooks,
      currenPage: Number(page),
      totalPages: Math.ceil(totalBooks / limit),
      count: books.length,
      data: books,
    });
  } catch (error) {
    console.log(error);
    return res.json({
      success: false,
      message: error.message,
      //   message: "Failed to fetch books",
    });
  }
};

export const updateBook = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;
    const updates = req.body;

    const user = await userModel.findOne({ _id: userId });

    if (user.type !== "admin" || user.type === "user") {
      return res.json({
        success: false,
        message: "You are not authorized to update.",
      });
    }

    const book = await bookModel.findById(id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (updates.title) {
      const newSlug = slugify(updates.title, {
        lower: true,
        strict: true,
      });

      const slugExists = await bookModel.findOne({
        slug: newSlug,
        _id: { $ne: id },
      });

      if (slugExists) {
        return res.status(409).json({
          success: false,
          message: "Another book with this title already exists",
        });
      }

      updates.slug = newSlug;
    }

    if (updates.isbn) {
      const isbnExists = await book.findOne({
        isbn: updates.isbn,
        _id: { $ne: id },
      });

      if (isbnExists) {
        return res.status(409).json({
          success: false,
          message: "ISBN already exists",
        });
      }
    }

    if (updates.categories) {
      updates.categories = updates.categories.map((c) =>
        c.toLowerCase().trim()
      );
    }

    const updatedBook = await bookModel.findByIdAndUpdate(
      id,
      { $set: updates },
      { new: true, runValidators: true }
    );

    return res.status(200).json({
      success: true,
      message: "Book updated successfully",
      data: updatedBook,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update book",
    });
  }
};

export const getBook = async (req, res) => {
  try {
    const { slug } = req.params;

    const book = await bookModel.findOne({
      slug: slug,
      isActive: true,
    });

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: book,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch book",
    });
  }
};

export const softDelete = async (req, res) => {
  try {
    const userId = req.user.id;
    const { id } = req.params;

    const user = await userModel.findOne({ _id: userId });

    if (user.type !== "admin" || user.type === "user") {
      return res.json({
        success: false,
        message: "You are not authorized to delete",
      });
    }

    const book = await bookModel.findById(id);

    if (!book) {
      return res.status(404).json({
        success: false,
        message: "Book not found",
      });
    }

    if (!book.isActive) {
      return res.status(400).json({
        success: false,
        message: "Book is already inactive",
      });
    }

    book.isActive = false;
    await book.save();

    return res.status(200).json({
      success: true,
      message: "Book soft deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to soft delete book",
    });
  }
};
