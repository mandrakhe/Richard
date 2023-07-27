const morgan = require('morgan');
const express = require('express'); 
const app = express(); 
const PORT = 5000;
app.use(morgan('dev'));


app.use(express.json());
const Service = require ( './src/service');
app.get('/', (req, res)=>{
res.json({
    message: "Lista de usuarios",
    body: Service.getUsers ()
})

} )

app.get ('/:id', (req, res)=>{
//const id = req.params ['id];
//desestructuracion 
let {params:{id}} = req;
let user = Service.getUsers(id);
res.json({
        message: `Usuario ${id}`,
        body: user
    })
});
app.post("/", (req, res) => {
    //let newUser = req.body;
    let { body : newUser } = req
    let user = Service.createUser(newUser) ;
    res.status (201).json({
    message :"Nuevo Usuario creado"
    
    })
});




app.listen(PORT, () => console.log(`servidor listen in ${PORT}`));
