let isAuthenticated = false;

export function setAuthenticationStatus(status) {
  isAuthenticated = status;
}

export function getAuthenticationStatus() {
  return isAuthenticated;
}




