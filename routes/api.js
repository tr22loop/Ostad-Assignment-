import express from "express";
const router = express.Router();


import * as UsersController from "../app/controller/UsersController.js";
import * as PortfolioController from "../app/controller/PortfolioController.js";
import AuthMiddleware from "../app/middlewares/AuthMiddleware.js";
import {CreatePortfolio, ReadPortfolio} from "../app/controller/PortfolioController.js";




// User [Before Login]
router.post("/Registration",UsersController.Registration)
router.post("/Login",UsersController.Login)

// User [After Login]
router.get("/ProfileDetails",AuthMiddleware,UsersController.ProfileDetails)

// Portfolio

router.post("/CreatePortfolio",AuthMiddleware,PortfolioController.CreatePortfolio)
router.post("/UpdatePortfolio/:id",AuthMiddleware,PortfolioController.UpdatePortfolio)
router.get("/ReadPortfolio/:id",AuthMiddleware,PortfolioController.ReadPortfolio)
router.get("/DeletePortfolio/:id",AuthMiddleware,PortfolioController.DeletePortfolio)



export default router;