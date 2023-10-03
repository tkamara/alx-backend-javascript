export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  map.forEach((entry, data) => {
    if (entry === 1) {
      map.set(data, 100);
    }
  });
}
