import { Cnpj } from "./Cnpj";
import { Cpf } from "./cpf";
import { Document } from "./document";

export class DocumentFactory{
    static create(value:string): Document{
        if(Cpf.isValid(value)){
            return new Cpf(value)
            console.log("bateu aqui")
        }
        if(Cnpj.isValid(value)){
            return new Cnpj(value)
            console.log("bateu aqui")

        }
        throw new Error(`value is not valid ${value}`)
    }
}