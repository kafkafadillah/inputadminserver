const User = require("../models/UserModel.js");

const getUser = async (req, ress) => {
    try {
        const users = await User.find();
        ress.json(users);
    } catch (error) {
        ress.status(500).json({ message: error.message });
    }
};

const getUserById = async (req, ress) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id);
        ress.json(user);
    } catch (error) {
        ress.status(500).json({ message: error.message });
    }
};

const createUser = async (req, ress) => {
    const user = new User(req.body);
    try {
        const insertUser = await user.save();
        ress.status(200).json(insertUser);
    } catch (error) {
        ress.status(400).json({ message: error.message });
    }
};

const updateUser = async (req, res) => {
    try {
        const updatedUser = await User.updateOne(
            { _id: req.params.id },
            { $set: req.body }
        );
        res.status(200).json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.deleteOne({ _id: req.params.id });
        res.status(200).json(deletedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { getUser, getUserById, createUser, updateUser, deleteUser };
