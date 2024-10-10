const User = require("../Model/userModel");

const getAllUsers = async (req, res, next) => {
    // Get all users
    try {
        const users = await User.find();
        return res.status(200).json({ users });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Internal server error" });
    }
};

// Data insert
const addUsers = async (req, res, next) => {
    const { name, gmail, age, address } = req.body;

    let users;

    try {
        users = new User({ name, gmail, age, address });
        await users.save();
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error saving user" });
    }

    // Define the message to send back
    const message = "User added successfully!";
    return res.status(201).send({ message });
};

// Get by ID
const getById = async (req, res, next) => {
    const id = req.params.id;

    let user;

    try {
        user = await User.findById(id);
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error fetching user" });
    }

    // Check if user is not available
    if (!user) {
        return res.status(404).send({ message: "User Not Found" });
    }

    // Return the found user
    return res.status(200).json(user);
}

// Update User details
const updateUser = async (req, res, next) => {
    const id = req.params.id;
    const { name, gmail, age, address } = req.body;

    let user;

    try {
        user = await User.findByIdAndUpdate(id, { name, gmail, age, address }, { new: true });
    } catch (err) {
        console.log(err);
        return res.status(500).send({ message: "Error updating user" });
    }

    // Check if user was not updated
    if (!user) {
        return res.status(404).send({ message: "Unable to update data" });
    }

    // Return the updated user
    return res.status(200).json(user);
}

// Delete Users 
const deleteUser = async (req, res, next) => {
    const id = req.params.id;

    let user;
    try {
        user = await User.findByIdAndDelete(id);
    }catch(err){
        console.log(err);
    }
    if (!user) {
        return res.status(404).send({ message: "Unable to delete data" });
    }

    // Return the Delete user
    return res.status(200).json(user);
}

exports.getAllUsers = getAllUsers;
exports.addUsers = addUsers;
exports.getById = getById;
exports.updateUser = updateUser;
exports.deleteUser = deleteUser;
