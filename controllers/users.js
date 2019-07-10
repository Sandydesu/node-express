const UserModel = require("../models/users");

function UserController() {

}



UserController.prototype.getAllUsers = async function (request, response) {
    const users = await UserModel.getAllUsers();
    response.send(users);
};

UserController.prototype.getById = async function (request, response) {
    const users = await UserModel.getById(request.params.id);
    response.send(users);
};

UserController.prototype.createOrUpdateUser = async function (req, response) {
    if (req.body && !req.body._id && req.params.id) {
        req.body._id = req.params.id;
    }
    const users = await UserModel.createOrUpdateUser(req.body);
    response.send(users);
};

UserController.prototype.deleteByID = async function (request, response) {
    const users = await UserModel.deleteById(request.params.id);
    response.send(users);
};

module.exports = new UserController();