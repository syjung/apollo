const express = require('express');
const APP = express();

var SERVER = require('./graphql/schema.js');
SERVER.applyMiddleware({
    app: APP
});

const PORT = 8001 || process.env;

APP.listen(PORT, () => {
    console.log(`The server has started on port: ${PORT}`);
    console.log(`http://localhost:${PORT}/graphql`);
});

// export default APP;
