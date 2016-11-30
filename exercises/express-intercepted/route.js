function sayHello(req, res, next) {
    req.greeting = {
        greeting: "Hello!",
        greeting2: "Hello Der!"
    }
    console.log("greeting worked");
    next();
};

module.exports = sayHello;