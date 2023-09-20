const app = require("./app");
const config = require("./app/config");

//start server
const PORT = config.app.port;
app.listen(PORT,() => {
    console.log(`server is runing on port ${PORT}.`);
});