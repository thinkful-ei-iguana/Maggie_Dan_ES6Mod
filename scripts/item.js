
const validateName = function(name) {
  if (!name) {
    throw new TypeError("nope, sorry");
  }
};

const create = function(name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  };
};


export default {
  validateName,
  create
};