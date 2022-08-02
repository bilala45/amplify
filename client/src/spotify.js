// Map to retrieve localStorage values
const LOCALSTORAGE_VALUES = {
  accessToken: window.localStorage.getItem("accessToken"),
  expiresIn: window.localStorage.getItem("expiresIn"),
  sessionStart: window.localStorage.getItem("sessionStart"),
};

const setUserCreds = () => {
  // get query parameters from url
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);

  // store query params in local storage
  window.localStorage.setItem("accessToken", urlParams.get("access_token"));
  window.localStorage.setItem("expiresIn", urlParams.get("expires_in"));
};

const getAccessToken = () => {
  return LOCALSTORAGE_VALUES.accessToken;
};

export { setUserCreds, getAccessToken };
