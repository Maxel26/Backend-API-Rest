// Archivo central de enrutamiento 
import {Router, Request , Response} from 'express'
import routeUsers from "./users.route";
import rousteProducts from "./products.route";

const router = Router();

// Archivo central de enrutamiento
router.use('/users', routeUsers ); //http://localhost:3000/api/users
router.use('/products', rousteProducts ); //http://localhost:3000/api/products


export default router ;