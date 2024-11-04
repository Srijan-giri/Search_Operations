const bodyParser = require('body-parser');
const express = require('express');
const path = require('path');
const db = require('./models/index')
const app = express();
const router = require('./routes/searchRoutes');

require('dotenv').config();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }))
app.set('view engine', 'ejs');
app.use('/', router);

const port = process.env.PORT || 3000;



db.sequelize.sync().then(() => {
    console.log("Database synced");
    app.listen(port, () => {
        console.log("server is running on port:", port);
    })
}).catch((err) => {
    console.log("error : " + err);
})