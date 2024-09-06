export const TOKEN_NAME = "token";

export const setToken = function (token) {
  localStorage.setItem(TOKEN_NAME, token);
};

export const removeToken = function () {
  localStorage.removeItem(TOKEN_NAME);
};

export const getToken = function () {
  return localStorage.getItem(TOKEN_NAME);
};
