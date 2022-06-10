const MONGO_PASS ='novomak2020';
const MONGO_URL = `mongodb+srv://novomak:${MONGO_PASS}@cluster0.ivtbn.mongodb.net/?retryWrites=true&w=majority`;

const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
};

module.exports = {
    MONGO_PASS: MONGO_PASS,
    MONGO_URL : MONGO_URL,
    mongooseOptions: mongooseOptions
}
