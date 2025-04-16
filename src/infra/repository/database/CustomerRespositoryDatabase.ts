import { Customer } from "../../../model/Customer"
import { CustomerRepository } from "../../../model/repository/CustomerRepository"
import knex,{ Knex }  from 'Knex'
import { development } from "./KnexConfig"

export class CustomerRepositoryDatabase implements CustomerRepository {
 
    private connection:Knex

    constructor(){
        this.connection = knex(development)
    }
    async save(customer: Customer): Promise<void> {
        await this.connection('customer').insert({
            'id': customer.getId().getValue(),
            'name': customer.getName(),
            'Document':customer.getDocument().getValue()
        })
    }
    async getAll(): Promise<Customer[]>{
        const customerCollection: Array<Customer> = []
        const  customer  = await this.connection('customer').select('*')

        for(var i=0;i<customer.length;i++){
            const customers = customer[i]
            const name = customers['name']
            const id = customers['id']
            const document = customers['document']
            customerCollection.push(Customer.create(name,document,id))
        }
        return customerCollection
    }
}