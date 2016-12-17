module.exports = {
    secret: "random words",
    database :process.env.MONGODB_URI || 'mongodb://localhost/final'
};