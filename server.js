const express = require('express');
const cors = require('cors');
const multer = require('multer');
const clientRoutes = require('./routes/client');
const adminRoutes = require('./routes/admin');
const ConnectToDb = require('./mongodb/mongo_connect');

//const multerMid = multer({storage : multer.memoryStorage()});

ConnectToDb();
const app = express();

app.use(cors());
//app.use(multerMid.single('file'));
app.use(express.json());
app.use('/api/client', clientRoutes);
app.use('/api/admin', adminRoutes);


app.listen(3000, () => {
    console.log(`Server Started at ${3000}`)
})