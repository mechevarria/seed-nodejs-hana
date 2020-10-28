const compression = require('compression');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const xsenv = require('@sap/xsenv');
const hdbext = require('@sap/hdbext');

const app = express();

app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(compression());

// add HANA client to all incoming requests. json file is only read when not running on SAP Cloud Platform
const services = xsenv.getServices({ hana: { tag: 'hana' } }, './default-services.json');
app.use('/', hdbext.middleware(services.hana));

const router = express.Router();
const hanaCtrl = require('./controllers/hana');

router.route('/hana').get(hanaCtrl);

app.use('/', router);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.info(`http server started on port ${port}`);
});
