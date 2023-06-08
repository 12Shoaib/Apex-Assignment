export const emptyCheck = (inputs) => {
  return inputs.every((value) => value.trim() !== "");
};

export const validateCoordinates = (input) => {
  const regex = /^(?:[0-9]|[1-3][0-9]|40)$/;
  return input.every((input) => regex.test(input));
};
