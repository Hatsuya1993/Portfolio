const catchAsync = require("../utils/catchAsync");

// Display Home

const homePage = catchAsync(async (req, res) => {
  res.render("home", {
    title1: "Muhammad Nur Hazrul",
    title2: "Front-End & Back-End Developer"
  });
});

// Display Resume

const resume = catchAsync(async (req, res) => {
  res.render("resume", {
    title1: "Resume",
    title2: "Education & Experience"
  })
})

// Display Projects

const projects = catchAsync(async (req, res) => {
  res.render("projects", {
    title1: "Projects & Portfolio",
    title2: "Projects Completed & Deployed"
  })
})

module.exports = {
  homePage,
  resume,
  projects
};