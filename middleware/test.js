const test = (req, res, next) => {
    console.log("I am test middleware.");
    next();
}

module.exports = test; 