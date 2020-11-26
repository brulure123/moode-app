export class Article{
    public imagesrc: string;
    public titre: string;
    public resumer: string;
    public corps: string;
    public nombreDeVues: number;

    constructor(titre: string, resumer: string, imagesrc: string, corps: string, nombreDeVues: number){
      this.titre = titre;
      this.resumer = resumer;
      this.imagesrc = imagesrc;
      this.corps = corps;
      this.nombreDeVues = nombreDeVues;
    }
}
