import {Product} from "./Product.js";

export class ProductManager {
    Products: Product[] = []

    constructor() {
    }

    add(...data) {

        this.Products.push(...data)
        this.show(this.Products)
    }
    delete(name:string){
        for (let i = 0; i < this.Products.length; i++) {
            if (this.Products[i].Name==name){
                this.Products.splice(i,1)
            }
        }
        this.show(this.Products)
    }
    edit(product:Product,
         ID: string,
         name: string,
         type: string,
         price: number,
         amount: number,
         date: string,
         desciption: string){
        let index = this.Products.indexOf(product)
        this.Products[index].ID=ID
        this.Products[index].Name=name
        this.Products[index].Type=type
        this.Products[index].price=price
        this.Products[index].date_creat=date
        this.Products[index].amount=amount
        this.Products[index].description=desciption
        this.show(this.Products)
    }
    show(arr){
        console.table(arr)
    }
    search(name:string){
        let arrProduct = []
        for (let i = 0; i < this.Products.length; i++) {
            if( this.Products[i].Name==name){
                arrProduct.push(this.Products[i])
            }
        }
        this.show(arrProduct)

    }


}