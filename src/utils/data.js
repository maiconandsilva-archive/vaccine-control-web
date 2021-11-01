export function copyObjectsArray(objArray) {
  return objArray.map(item => ({...item}));
}

export function isUserAuthenticated() {
  return localStorage.getItem("token") !== null;
}