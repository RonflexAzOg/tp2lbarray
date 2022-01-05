// UserData
const users = require('./UserData');

// All users data 
exports.readsUsersData = (req, res) => {
    res.status(200).json(users);
}

//Users data per id
exports.readsUsersPerId = (req, res) => {
    let readsId = req.params.id-1;
    res.status(200).json(users[readsId]);
}

//Add user
exports.addNewUser = (req, res) => {
    newUser = {
        id: users[users.length-1].id+1, //Take the last id et add 1 for the new user
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        creationDate: Date.now(), //Date today
        role: req.body.role,
    }
    users.push(newUser); //Push to add in Database
    res.status(200).send('User added successfully');
}

//Delete user
exports.deleteUserPerId = (req, res) => {
    let deleteId = req.params.id-1;
    users.splice(deleteId, 1);
    res.status(200).send('User deleted');
}

//Edit user
exports.editUserPerId = (req, res) => {
    let editId = req.body.id-1;
    let editUser = {
        id: req.body.id,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phone: req.body.phone,
        creationDate: Date.now(), //Date today
        role: req.body.role,
    }
    users.splice(editId, 1, editUser);
    res.status(200).send('User edited');
}