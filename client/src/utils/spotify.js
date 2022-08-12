/**
 * Retrieves access token from local storage
 * @return String
 */
const getAccessToken = () => {
  return window.localStorage.getItem("accessToken");
};

/**
 * Retrieves expiry time from local storage
 * @return String
 */
const getExpiresIn = () => {
  return window.localStorage.getItem("expiresIn");
};

/**
 * Checks if token is expired
 * @return boolean
 */
const isTokenExpired = () => {
  return Date.now() > getExpiresIn();
};

/**
 * Sets user's credentials
 * @return true
 */
const setUserCreds = (urlParams) => {
  // query parameters present in url
  window.localStorage.clear();

  // set expiry time of access token and store in local storage
  const expiryTime = Date.now() + parseInt(urlParams.get("expires_in")) * 1000;
  window.localStorage.setItem("expiresIn", expiryTime);

  // store access token in local storage
  window.localStorage.setItem("accessToken", urlParams.get("access_token"));

  return true;
};

/**
 * Checks existing credentials
 * @return boolean
 */
const areExistingCredsValid = () => {
  // no query parameters in url so we check existing credentials
  // check if user credentials exist in local storage
  // checks if token is expired
  if (
    getAccessToken() === null ||
    getExpiresIn() === null ||
    isTokenExpired()
  ) {
    return false;
  }
  return true;
};

/**
 * Determines if user is authenticated
 * @return boolean
 */
const isUserAuth = () => {
  // retrieve query parameters from url
  const urlParams = new URLSearchParams(window.location.search);

  if (
    urlParams.get("expires_in") === null ||
    urlParams.get("access_token") === null
  ) {
    return areExistingCredsValid();
  } else {
    return setUserCreds(urlParams);
  }
};

export { isUserAuth, getAccessToken, isTokenExpired };
