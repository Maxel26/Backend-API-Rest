import { Request, Response } from "express"
import ProductModel from "../models/products.model";


async function getProducts(req: Request, res: Response){
    console.log(`Obtiene todo los productos`);
    res.send(`Obtiene todo los productos`);
};

async function getProduct(req: Request, res: Response){
    console.log(`obtiene un producto por ID`);  
    res.send(`obtiene un producto por ID`);
};

async function createProduct(req: Request, res: Response){

    const data = req.body;
//     console.log(req.body);
//    res.send(req.body);

    const response = await ProductModel.create(data);
    res.json(response);
   
};

async function updateProduct(req: Request, res: Response){
    console.log(`Actualiza un producto por ID`); 
    res.send(`Actualiza un producto por ID`);
};

async function deleteProduct(req: Request, res: Response){
    console.log(`Elimina un producto por ID`);  
    res.send(`Elimina un producto por ID`);
};

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

