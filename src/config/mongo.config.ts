import { connect } from "mongoose";

// TODO: Resolver conexion de Mongo con Mongoose
// Configuracion para conexion con MongoDB
async function dbconnect() : Promise<void> {
    const DB_URI = 'mongodb://localhost: 27017';
    await connect(DB_URI);
}


export default dbconnect ;