export const validateName = (value) => {
  if (!value) {
    return "Field Required";
  } else if (value.length < 3) {
    return "Minimun 3 Chracter Required.";
  }
};

export const validateEmail = (value) => {
  var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!value) {
    return "Field Required";
  } else if (regex.test(value) === false) {
    return "Enter Valid Email.";
  }
};

export const validateNumber = (value) => {
  if (!value) {
    return "Field Required";
  } else if (value.length >= 11) {
    return "Only 10 Digit";
  }
};

export const validateDate = (value) => {
  if (!value) {
    return "Field Required";
  }
};

export const validateCity = (value) => {
  if (!value) {
    return "Field Required";
  }
};
