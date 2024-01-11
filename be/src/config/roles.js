const allRoles = {
  user: ['getTodos', 'manageTodos', 'manageProducts', 'manageTransactions', 'getProducts', 'getTransactions', 'getProfile', 'manageHistory', 'getHistory'],
  admin: [
    'getUsers',
    'manageUsers',
    'getTodos',
    'manageTodos',
    'getProducts',
    'manageProducts',
    'manageTransactions',
    'getTransactions',
    'createTransactions',
    'manageHistory',
    'getProfile',
    'manageProfiles',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
