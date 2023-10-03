export default function getStudentIdsSum(array) {
  return array.reduce((val, cur) => val + cur.id, 0);
}
