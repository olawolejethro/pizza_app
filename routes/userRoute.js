const express = require("express");

const userController = require("../controllers/usercontroller");
const { authenticateUser, authenticateAdmin } = require("../authorization");
const Router = express.Router();

// Router.get("/", userController.test);
Router.post("/", userController.addUser);

Router.use(authenticateUser);

// Only the authenticated user are allowd to patch and delete
Router.patch("/:userId", userController.updateUser);

Router.delete("/:userId", userController.deletaAllUsers);

// Amin auth
Router.use(authenticateAdmin);
Router.get("/", userController.getAllUsers);

Router.get("/:userId", userController.getAllUsersById);

module.exports = Router;
