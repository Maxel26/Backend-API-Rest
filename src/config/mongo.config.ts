import { connect } from "mongoose";

// TODO: Resolver conexion de Mongo con Mongoose
// Configuracion para conexion con MongoDB
async function dbconnect() : Promise<void> {
    const DB_URI = `${process.env.DB_URI}`;
    await connect(DB_URI);
}


export default dbconnect ;