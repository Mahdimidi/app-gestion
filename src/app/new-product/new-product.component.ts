import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-new-product',
  templateUrl: './new-product.component.html',
  styleUrls: ['./new-product.component.css']
})
export class NewProductComponent implements OnInit {
  
  newProductFrg!:FormGroup
  constructor(private fb:FormBuilder,private newproductService:ProductService) { }

  ngOnInit(): void {
    this.newProductFrg=this.fb.group(
      { id:this.fb.control((null),Validators.required),
        name:this.fb.control((null),Validators.required),
        price:this.fb.control((null),Validators.required),
        ref:this.fb.control((null),Validators.required),
        promotion:this.fb.control((false))
      }
    )
  }
  AddProduct(){
    let product=this.newProductFrg.value
    console.log("product=>",product)
    this.newproductService.Ajouter(product)
  }

}
