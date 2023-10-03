export default function getListStudentIds(array) {
  let arr = [];

  if (!(array instanceof Array)) {
    return arr;
  }

  arr = array.map((element) => element.id);
  return arr;
}
