const path = require('path');
const morgan = require('morgan');
const express = require('express');
const { engine } = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes/index');
const db = require('./config/db/index');
// Connect to DB
db.connect();

// Use static files
// __dirname chỉ tới: path_to_project/src
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    express.urlencoded({
        extended: true,
    }),
);
app.use(express.json());

// HTTP logger
app.use(morgan('dev'));

// Template engines
app.engine(
    'hbs',
    engine(
        // Config options
        {
            extname: '.hbs',
        },
    ),
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources', 'views'));

// Routes init
route(app);

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
