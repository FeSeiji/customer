import {Request, Response, Router} from 'express'
import { CustomerRepositoryInMemory } from './infra/repository/memory/CustomerRepositoryinMemory'
import { CustomerCreate } from './controller/CustomerCreate'
import { CustomerRepositoryDatabase } from './infra/repository/database/CustomerRespositoryDatabase'
import { CustomerList } from './controller/CustomerLIst'

const router= Router()
//const repository = new  CustomerRepositoryInMemory()
const repository = new CustomerRepositoryDatabase()
const customerCreate = new CustomerCreate(repository)
const customerList = new CustomerList(repository)

router.post('/customer', (request: Request, response :Response)=>{
    customerCreate.execute(request,response)
})

router.get('/customer', (request: Request,response:Response)=> {
    customerList.execute(request,response)
})

export{ router }