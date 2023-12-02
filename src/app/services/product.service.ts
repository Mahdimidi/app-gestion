import { Injectable } from '@angular/core';
import { Product } from '../product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  productList!:Array<Product>
  constructor() { 
    this.productList=[
      {id:"1",name:"TV",price:"1200",ref:"TV.1",promotion:true},
      {id:"2",name:"Laptop",price:"2000",ref:"Laptop.1",promotion:false},
      {id:"3",name:"Smart-phone",price:"1500",ref:"Smart.1",promotion:true},
      {id:"4",name:"Split",price:"2500",ref:"Split.1",promotion:false}
    ]
  }
  getallProducts(){
    return this.productList
  }
  set(id:string){
    let product=this.productList.find(p=>p.id==id)
    if (product) {
      product.promotion=!product.promotion
    }
  }
  delet(data:Product){
    let x =this.productList.indexOf(data)
    this.productList.splice(Number(x),1)
  }
  SEARCH(data:string){
    let products=this.productList.filter(p=>p.name.includes(data))
    return products
  }
  Ajouter(data:Product){
    this.productList.push(data)
  }
  setEditPrdct(id:string){
    let product=this.productList.find(p=>p.id==id)
    return product

  }
  
  UpDateProduct(product:Product){
    this.productList=this.productList.map(p=>(p.id==product.id)?product:p)
    
   }
}
