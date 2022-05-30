const http = require('http');
const mongoose = require('mongoose')

const app = require('./app');

const {loadPlanetsData} = require('./models/planets.model');

const PORT = process.env.PORT || 8000;

const MONGO_URL = 'mongodb+srv://nasa-api:7mTfXYC3C12k1F5w@cluster0.pntj4.mongodb.net/?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
    console.log('MondoDB connection ready')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

const server = http.createServer(app);
async function startServer() {
    await mongoose.connect(MONGO_URL)
    await loadPlanetsData();

    server.listen(PORT, () => {
        console.log(`Listening to Port: ${PORT}`)
    })
}

    startServer()