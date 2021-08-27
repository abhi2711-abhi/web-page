const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/webpage", {
    useNewUrlParser:true,
    // useUnifiedTopology:true,
    // useCreateIndex:true,
    // useFindAndModify:false
}).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})