const validateBoth = (role, phoneNumber, password) => {
  if (role.length === 0) {
    return "Please select your role at the top of the screen.";
  } else if (phoneNumber.length < 10) {
    return "Please enter a valid phone number.";
  } else if (password.length < 4) {
    return "Password must be at least 4 characters";
  } else {
    return "Good";
  }
};

const validateSignInFields = (role, phoneNumber, password) => {
  const initialValidation = validateBoth(role, phoneNumber, password);

  return initialValidation;
};

const validateSignUpFields = (
  role,
  phoneNumber,
  password,
  verificationCode,
  identifierCode
) => {
  const initialValidation = validateBoth(role, phoneNumber, password);

  if (initialValidation != "Good") {
    return initialValidation;
  } else if (verificationCode.length != 4) {
    return "Verification code should be 4-digits";
  }

  if (role === "Employee") {
    const identifierCodePattern = /^JIB\s\d{4}$/;

    if (identifierCode.length === 0) {
      return "Please enter your restaurant number";
    } else if (!identifierCodePattern.test(identifierCode)) {
      return "Identifier code must be in the format 'JIB 1234'";
    }
  }

  return "Good";
};

const validateFirstTimeLogin = (firstName, lastName, imageUploaded) => {
  if (firstName.length === 0 || lastName.length === 0) {
    return "Fill out First and Last name";
  }

  return "Good";
};

export { validateSignInFields, validateSignUpFields, validateFirstTimeLogin };
