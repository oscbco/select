export default function toTitleCase (str) {
  return str.charAt(0).toUpperCase() + str.replace(/_/g, ' ').substring(1);
}
