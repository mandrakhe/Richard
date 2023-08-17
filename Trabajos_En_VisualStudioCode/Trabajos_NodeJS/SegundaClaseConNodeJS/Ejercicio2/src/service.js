const data = require("./dataJul-27-2023.json");

module.exports = {
  getUsers: () => data,

  getUser: (id) => {
    let idf = Number(id);
    let user = data.filter((person) => person.id === idf);
    return user.length > 0 ? user[0] : null;
  },

 
  createUser: (dataUser) => {
    let newUser = {
      id: data.length + 1,
      ...dataUser,
    };
    data.push(newUser);
    return newUser;
  }
}
