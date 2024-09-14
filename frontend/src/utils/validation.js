export function getEmailError(email) {
  if (!email) {
    return "Email required!";
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return "This email is invalid!";
    }
  }
  return null;
}

export function getPasswordError(password) {
  if (!password) {
    return "Password required!";
  } else {
    if (password.length < 8) {
      return "Password must be 8 characters or longer!";
    }
  }
  return null;
}

export function getFullNameError(fullName) {
  if (!fullName) {
    return "Full name required!";
  }
  return null;
}
