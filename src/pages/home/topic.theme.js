export const colors = [
  'rgba(78, 83, 91, .9)',
  'rgba(99, 72, 121, .9)',
  'rgba(68, 69, 70, .9)',
  'rgba(87, 70, 77, .9)',
  'rgba(49, 53, 54, .9)',
];

export function getBg(index) {
  return colors[index % colors.length];
}
