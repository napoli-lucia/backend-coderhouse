const express = require("express")
const usersRoutes = require("./routes/users.routes")
const petsRoutes = require("./routes/pets.routes")

const app = express()
const PORT = 5000;
const API_PREFIX = "api";

app.use(express.urlencoded({ extends: true }));
app.use(express.json());

//http://localhost:5000/static/index.html
app.use(`/static`, express.static(__dirname + "/public"));


//USERS ROUTES
// /api/users
app.use(`/${API_PREFIX}/users`, usersRoutes)

//PETS ROUTES
// /api/pets
app.use(`/${API_PREFIX}/pets`, petsRoutes)


app.listen(PORT, () => {
    console.log(`UP AND RUNNING ON PORT: ${PORT}`);
  });
  
  
/*
app.get(`/${API_PREFIX}/users`, (req,res) => {
    return res.json({
        ok: true,
        users: userList
    })
})*/
/*app.get(`/${API_PREFIX}/pets`, (req,res) => {
    return res.json({
        ok: true,
        users: petsList
    })
})*/