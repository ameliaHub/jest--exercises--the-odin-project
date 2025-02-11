export function capitalize(str) {
  if (str === null || str === "" || str === undefined) {
    return "";
  }

  // Verifica si el primer carácter es un alfabético o no
  if (/[a-zA-Z]/.test(str.charAt(0))) {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }

  // Si el primer carácter no es alfabético, no lo cambia, pero capitaliza el resto
  return (
    str.charAt(0) +
    str.slice(1).charAt(0).toUpperCase() +
    str.slice(2).toLowerCase()
  );
}
