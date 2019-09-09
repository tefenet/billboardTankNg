import { Tank } from './tank.model';

export class Load {
    public date: Date;
    public amount: number;
    public location: string;
    public origin: Tank;
    public destination: Tank;
    public id: number;
    constructor(object: any) {
        this.date = (object.date) ? object.date : null;
        this.destination = (object.destination) ? object.destination : null;
        this.id = (object.id) ? object.id : null;
        this.amount = (object.amount) ? object.amount : null;
        this.origin = (object.origin) ? object.origin : null;
        this.location = (object.location) ? object.location : null;
    }
}
