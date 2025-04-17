import {Request, Response} from "express"
import { CustomerRepository } from "../model/repository/CustomerRepository";
import { Customer } from "../model/Customer"; // Adjust the path as needed

export class CustomerList{

    constructor(readonly repository:CustomerRepository){
    }
    
    async execute(request:Request, response:Response){

        const CustomerCollection =  await this.repository.getAll()
        response.status(200).json(CustomerCollection)
    }

}