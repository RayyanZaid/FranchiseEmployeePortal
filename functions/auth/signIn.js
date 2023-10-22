import { validateSignInFields, validateSignUpFields } from "./autherrors";

const signInVerification = (role, phoneNumber, password) => {
  const response = validateSignInFields(role, phoneNumber, password);

  // add stuff from the backend here

  return response;
};

export default signInVerification;
