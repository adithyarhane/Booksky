import React from "react";
import ResetPasswordRequest from "../components/ResetPasswordRequest";
import ResetOTPVerify from "../components/ResetOtpVerify";
import UpdatePasswordForm from "../components/UpdatePasswordForm";
import { useAuthContext } from "../context/AuthContext";
import useTitle from "../components/useTitle";

const ResetPassword = () => {
  useTitle("Reset Password");
  const { isEmailSent, isOtpSubmitted } = useAuthContext();
  return (
    <div>
      {!isEmailSent && !isOtpSubmitted && <ResetPasswordRequest />}
      {isEmailSent && !isOtpSubmitted && <ResetOTPVerify />}
      {isEmailSent && isOtpSubmitted && <UpdatePasswordForm />}
    </div>
  );
};

export default ResetPassword;
