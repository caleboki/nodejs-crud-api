const mongoose = require('mongoose')

module.exports = () => {
  mongoose.connect(process.env.MONGODB_URI + process.env.DB_NAME)
    .then(() => {console.log('Initializing DB... MongoDB connected...')
    })
    .catch(error => console.log(error.message))
}
