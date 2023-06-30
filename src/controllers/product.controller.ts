import { Request, Response } from "express"


async function getProducts(req: Request, res: Response){
    console.log(`Obtiene todo los productos`);  
};

async function getProduct(req: Request, res: Response){
    console.log(`obtiene un producto por ID`);  
};

async function createProduct(req: Request, res: Response){
    console.log(`Crea un producto`);  
};

async function updateProduct(req: Request, res: Response){
    console.log(`Actualiza un producto por ID`);  
};

async function deleteProduct(req: Request, res: Response){
    console.log(`Elimina un producto por ID`);  
};

export {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct
}

