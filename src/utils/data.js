export function copyObjectsArray(objArray) {
  return objArray.map(item => ({...item}));
}