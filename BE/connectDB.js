const mongoose = require('mongoose');
// mongoose.connect('mongodb://127.0.0.1:27017/Annas',
mongoose.connect(process.env.DB,
 {
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});