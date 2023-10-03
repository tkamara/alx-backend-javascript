export default function getStudentsByLocation(array, city) {
  return array.filter((students) => students.location === city);
}
