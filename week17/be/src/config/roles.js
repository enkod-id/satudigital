const allRoles = {
  user: ['getProducts', 'manageProduct'],
  admin: ['getUsers', 'manageUsers', 'getProduct', 'getProducts', 'manageProduct'],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
