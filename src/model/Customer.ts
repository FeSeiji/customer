import { Document } from "./document";
import { DocumentFactory } from "./documentFactory";
import { Uuid } from "./Uuid";

export class Customer{
    private id:Uuid;
    private name:string;
    private document:Document;

    constructor(name:string, document:Document,id?:string){
        this.id = id? new Uuid(id) : Uuid.randomGenerator()
        this.name = name
        this.document = document
    }

    static create(name:string, document:string,id?:string):Customer{
        const instanceDocument =  DocumentFactory.create(document)
        return new Customer(name,instanceDocument,id)
    }
}