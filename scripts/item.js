
function validateName (name) {
  if (!name) {
    throw new TypeError("nope, sorry");
  }
}

function create (name) {
  return {
    id: cuid(),
    name: name,
    checked: false
  };
}


export default {
  validateName,
  create
};