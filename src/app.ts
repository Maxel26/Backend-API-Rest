import 'dotenv/config';
import express, {Request, Response} from "express" ;
import routeMain from "./routes/index.route";
import db from "./config/mongo.config";



const app = express();
const PORT = process.env.PORT || 3001;

// Routing: Enrutamiento 
// http://localhost:3000/ 
app.get('/', (req : Request, res : Response) => {
    const message : string = 'Bienvenido a la API de MudarteCol'
    
    console.log(message); // Mensaje a la consola  
    res.send(`<h1> ${message}</h1>`); // Mensaje al navegador 
});

// http:localhost: 3000/home (Endpoint)
app.get('/home', (req : Request, res : Response) => {
    const namepage : string = 'Home'

    console.log(namepage);  
    res.send(`<h1> ${namepage}</h1>`);
})

// Middleware
// http://localhost:3000/api
app.use('/api', routeMain );


//  Resolvemos la promesa: Conexion a Mongo usando Mongoose
// db()
//     .then(() => {
//         console.log(`MongoDB se conecto correctamente`);
        
//     })
//     .catch(() => {
//         console.log(`MongoDB tiene un problema de conexion`);
        
//     })

app.listen(PORT, () => {
    console.log(`Servidor en http:localhost:${PORT}`); 
});


