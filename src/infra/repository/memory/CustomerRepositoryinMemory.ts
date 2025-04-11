import {Customer} from "..//../../model/customer";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";

export class CustomerRepositoryInMemory implements CustomerRepository{
    
    private CustomerCollection: Array<Customer>=[]

    async save(customer: Customer): Promise<void>{
        this.CustomerCollection.push(customer)
    }
}