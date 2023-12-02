import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-edit-prdct',
  templateUrl: './edit-prdct.component.html',
  styleUrls: ['./edit-prdct.component.css']
})
export class EditPrdctComponent implements OnInit {
   
  prodctActive:any
  productID:any
  editFgr!:FormGroup
  constructor(private fb:FormBuilder,private route:ActivatedRoute,private editService:ProductService,private _route:Router) { 
    // injecter l'Id dans productID
    this.productID=this.route.snapshot.params['id']
    console.log("productID=>",this.productID)
  }

  ngOnInit(): void {
    this.prodctActive=this.editService.setEditPrdct(this.productID)
    console.log("prodctActive=>",this.prodctActive)
    this.editFgr=this.fb.group({
      id:this.fb.control((this.prodctActive.id)),
      name:this.fb.control((this.prodctActive.name)),
      price:this.fb.control((this.prodctActive.price)),
      ref:this.fb.control((this.prodctActive.ref)),
      promotion:this.fb.control((this.prodctActive.promotion))
    })
  }

  save(){
    let product=this.editFgr.value
   this.editService.UpDateProduct(product)
  }
  gotoProduct(){
  this._route.navigateByUrl('/product')
  }

}
