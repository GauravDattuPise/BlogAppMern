
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")
const dotenv = require("dotenv")
dotenv.config();

// seding request to user & blog routes
const userRoute = require("./src/routes/userRoutes");
const blogRoute = require("./src/routes/blogRoutes");

const app = express();
app.use(cors());
app.use(express.json());

// connecting node.js with mongodb
mongoose.connect(process.env.MONGO_URL)
        .then(()=>{console.log("db is connected")})
        .catch((err)=>{console.log(err.message)});

app.use("/user", userRoute);
app.use("/blogs", blogRoute);

// running application on port
app.listen(process.env.PORT, function(){
    console.log("server is running on port ", process.env.PORT );
})
