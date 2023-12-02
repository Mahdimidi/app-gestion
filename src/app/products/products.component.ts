import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../services/product.service';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  
  searchProduct!:FormGroup
  productData!:Array<Product>
  Data={keyword:""}
  constructor(private productService:ProductService,private fb:FormBuilder,private _route:Router ) { }

  ngOnInit(): void {
   this.productData= this.productService.getallProducts()
   this.searchProduct=this.fb.group({keyword:this.fb.control((null))})
  }
  setPromo(data:Product){
    this.productService.set(data.id)
  }
  DELET(data:Product){
    //let conf=confirm("Do you want to delet this product")
    
    Swal.fire({
      title: "Are you sure?",
      text: "You won't to delet this product!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.productService.delet(data)
        Swal.fire({
          title: "Deleted!",
          text: "Your product has been deleted.",
          icon: "success"
        });
      }
    });
   
  }
  search(){
    let x =this.searchProduct.value.keyword
    this.productData=this.productService.SEARCH(x)
    console.log("x=>",x)
    //this.productData=this.productService.SEARCH(x)
  }
  searchPrdct(){
    let y =this.Data.keyword
    this.productData=this.productService.SEARCH(y)
    console.log("y=>",y)
  }
  prodctSearch(data:string){
    this.productData=this.productService.SEARCH(data)
    console.log("this productData=>",this.productData)
  }
  addProduct(){
    
  }
  gotoEditProduct(data:Product){
   this._route.navigateByUrl('edit/'+data.id)
  }

}
