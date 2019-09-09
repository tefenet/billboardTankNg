export class Tank {
    public name: string;
    public capacity: number;
    public content: number;
    public id: number;
    constructor(object: any) {
        this.name = (object.name) ? object.name : null;
        this.capacity = (object.capacity) ? object.capacity : null;
        this.id = (object.id) ? object.id : null;
        this.content = (object.content) ? object.content : null;
    }
}
