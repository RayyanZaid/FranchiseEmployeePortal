const validateSignInFields = (role, phoneNumber, password) => {
  if (role.length === 0 || phoneNumber.length === 0 || password.length === 0) {
    return "Please fill in all the fields.";
  }
};
