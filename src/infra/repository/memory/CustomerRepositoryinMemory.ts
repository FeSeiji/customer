import { Customer } from "../../../model/Customer";
import { CustomerRepository } from "../../../model/repository/CustomerRepository";

export class CustomerRepositoryInMemory implements CustomerRepository {
    
    private CustomerCollection: Array<Customer> = [];

    async save(customer: Customer): Promise<void> {
        this.CustomerCollection.push(customer);
    }

    async getAll(): Promise<Customer[]> {
        return this.CustomerCollection; // Corrigido para usar o nome correto
    }
}