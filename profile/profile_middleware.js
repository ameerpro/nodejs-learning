module.exports = requestFilters = (req, res, next) => {
  if (req.query.age < 18) {
    res.send("You need to be 18+ to access this website");
  } else if (!req.query.age) {
    res.send("You need to be provide your age to access this website");
  } else {
    next();
  }
};
