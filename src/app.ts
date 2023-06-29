import express, {Request, Response} from "express" ;
import routeMain from "./routes";



const app = express();

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

app.listen(3000, () => {
    console.log('Servidor lanzado en el puerto 3000'); 
});


