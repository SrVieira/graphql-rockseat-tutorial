const providers = require('../providers');

let id = 0;

module.exports = {
  user({ id }) {
    return providers.users.find(item => item.id === Number(id));
  },
  users() {
    return providers.users;
  },
  createUser({ name, github, age }) {
    const user = {
      id: id++,
      name,
      github,
      age
    };

    providers.users.push(user);

    return user;
  }
};