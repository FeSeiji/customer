import {Customer} from "../Customer"

export interface CustomerRepository{
    save(request: Customer): Promise<void>
    getAll(): Promise<Array<Customer>>
}

