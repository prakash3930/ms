const {
    PORT,
    app,
    mongoose,
    DATA
} = require('./App');

// Database connection.... 
const dataConnect = async () => {
    try {
        await mongoose.connect(DATA || "mongodb://localhost:27017/social_book");
        console.log('Database Connection Successful')
    } catch (err) {
        console.log(err.message);
    }
};

// running server.....
app.listen(8000, async () => {
    try {
        console.log(`Sever run successfully on http://localhost:8000`);
        await dataConnect();
    } catch (error) {
        console.log(error.message);
    }
});