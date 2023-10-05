const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");

//start server

async function startServer(){
    try{
        await MongoDB.connect(config.db.uri);
        console.log("connected to the dababase! ");


        const PORT = config.app.port;
        app.listen(PORT, () => {
            console.log(`server is runing on port ${PORT}`);
        });

        }catch (error){
            console.log("cannot connect to the database!", error);
            process.exit();
        }
    }
// const PORT = config.app.port;
// app.listen(PORT,() => {
//     console.log(`server is runing on port ${PORT}.`);
// });
startServer();