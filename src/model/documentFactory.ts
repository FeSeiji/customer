import { Cnpj } from "./Cnpj";
import { Cpf } from "./cpf";
import { Document } from "./document";

export class DocumentFactory{
    static create(value:string): Document{
        if(Cpf.isValid(value)){
            console.log("bateu aqui")
            return new Cpf(value)
            
        }
        if(Cnpj.isValid(value)){
            console.log("bateu aqui")
            return new Cnpj(value)
        }
        throw new Error(`value is not valid ${value}`)
    }
}