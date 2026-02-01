const BookSkeleton = () => (
  <div className="w-full max-w-[320px] mx-auto animate-pulse">
    <div className="aspect-2/3 w-full bg-stone-200 rounded-sm mb-4" />
    <div className="space-y-3 px-0.5">
      <div className="flex justify-between">
        <div className="h-2 w-20 bg-stone-200 rounded" />
        <div className="h-2 w-8 bg-stone-200 rounded" />
      </div>
      <div className="h-6 w-full bg-stone-200 rounded" />
      <div className="flex justify-between">
        <div className="h-3 w-12 bg-stone-200 rounded" />
        <div className="h-4 w-16 bg-stone-200 rounded" />
      </div>
    </div>
  </div>
);
export default BookSkeleton;
