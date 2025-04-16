import {validate as validateUuid, v4 as Uuidv4} from 'uuid'

export class Uuid{
    private value:string
    
    constructor(value:string){
        if(!validateUuid(value)){
            throw new Error(`value is not valid ${value}`)
        }
        this.value = value
    }

    static randomGenerator():Uuid{
        return new Uuid(Uuidv4())
    }

    public getValue():string {
        return this.value
    }
}   