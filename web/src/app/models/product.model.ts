
export class Product {

  constructor(
      public name: string,
      public price: number,
      public description: string,
      public photo: string,
      public idCategory:string,
      public idUser: string,
      public id?: string,
  ) { }
}
