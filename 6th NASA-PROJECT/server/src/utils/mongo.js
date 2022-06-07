const mongoose = require('mongoose')

const MONGO_URL = 'mongodb+srv://nasa-api:7mTfXYC3C12k1F5w@cluster0.pntj4.mongodb.net/?retryWrites=true&w=majority'

mongoose.connection.once('open', () => {
    console.log('MondoDB connection ready')
})

mongoose.connection.on('error', (err) => {
    console.error(err)
})

async function mongoConnect() {
    await mongoose.connect(MONGO_URL)
}

async function mongoDisconnect() {
    await mongoose.disconnect()
}

module.exports= {
    mongoConnect,
    mongoDisconnect
}