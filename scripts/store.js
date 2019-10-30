import item from './item.js';


let items = [];

const hideCheckedItems = false;

function findById(id) {
  return items.find(function(el){
    return el.id === id;
  });
}


function addItem(name) {
  try {
    item.validateName(name);
    let nameCreated = item.create(name);
    this.items.push(nameCreated);
  }
  catch(e) {
    throw new TypeError('something is not right');
  }
}

function findAndToggleChecked(id) {
  let item = findById(id);
  item.checked = !item.checked;
}

function findAndUpdateName (id, newName) {
  try {
    item.validateName(newName);
    let updated = this.findById(id);
    updated.name = newName;
  }
  catch(e) {
    throw new TypeError(`Cannot update name: ${e.message}`);
  }
}

function findAndDelete(id) {
  let deleteId = this.items.findIndex(function(e) {
    return e.id === id;
  });
  this.items.splice(deleteId, 1);

}

function toggleCheckedFilter()  {
  this.hideCheckedItems = !this.hideCheckedItems;
}


export default {
  items,
  hideCheckedItems,
  addItem,
  findAndToggleChecked,
  findAndUpdateName,
  findAndDelete,
  toggleCheckedFilter
};
