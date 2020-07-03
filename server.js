const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const db = require('./models');

// sets up express to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log(`CRM ==> API server now listening on PORT ${PORT}!`);
    });
});
