const express = require("express");

const {
    homePage,
    resume,
    projects
} = require("../controller/portfolioController");

const porfolioRoute = express.Router();

porfolioRoute.route("/").get(homePage);

porfolioRoute.route("/resume").get(resume);

porfolioRoute.route("/projects").get(projects);

module.exports = porfolioRoute;