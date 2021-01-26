const mongoose = require('mongoose');

// const connectionURI = `mongodb+srv://admin:abc1234@cluster0.omdxm.mongodb.net/whats-growing-on?retryWrites=true&w=majority`

const db = mongoose.connection;

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

db.on('connected', function () {
    console.log(`Connected to MongoDB at ${db.host}:${db.port}`);  
})