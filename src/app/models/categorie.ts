import { Article } from './article';

export class Categorie {
    id: string;
    designation: string;
    description: string;
    imgSrc: string;
    articles: Article[] = [];

    constructor(id: string, designation: string, description: string, imgSrc: string, articles: Article[]) {
        this.id = id;
        this.designation = designation;
        this.description = description;
        this.imgSrc = imgSrc;
    }
}
