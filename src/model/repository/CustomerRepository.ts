import {Customer} from "../customer"

export interface CustomerRepository{
    save(request: Customer): Promise<void>
}

