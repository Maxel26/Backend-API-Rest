import express from "express" ;

const app = express();

// Routing: Enrutamiento 
// http://localhost:3000/
app.get('/', (req,res) => {
    const message = 'Bienvenido a la API de MudarteCol'
    
    console.log(message); // Mensaje a la consola  
    res.send(`<h1> ${message}</h1>`); // Mensaje al navegador 
});

// http:localhost: 3000/home
app.get('/home', (req, res) => {
    const namepage = 'Home'

    console.log(namepage);  
    res.send(`<h1> ${namepage}</h1>`);
})


app.listen(3000, () => {
    console.log('Servidor lanzado en el puerto 3000'); 
});
