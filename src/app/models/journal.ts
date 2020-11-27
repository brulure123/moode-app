export class Journal {
    id: string;
    object: string;
    date: Date;
    details: string;

    constructor(id: string, object: string, date: Date, details: string){
        this.id = id;
        this.object = object;
        this.date = date;
        this.details = details;
    }
}
