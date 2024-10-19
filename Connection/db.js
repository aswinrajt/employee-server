const mongoose = require('mongoose')


mongoose.connect(process.env.DB_CONNECTION).then((res) => {
    console.log("Server connected to DB")

}).catch(err => {
    console.log(err);

})