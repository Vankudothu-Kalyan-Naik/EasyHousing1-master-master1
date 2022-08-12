import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { BuyPropertyService } from '../services/buyproperty.service';
@Component({
  selector: 'app-addproperty',
  templateUrl: './addproperty.component.html',
  styleUrls: ['./addproperty.component.css']
})
export class AddpropertyComponent implements OnInit {

  constructor(public buypropertyService:BuyPropertyService,private router:Router) { }

  ngOnInit(): void {
  }
  onSubmit(propertyForm:NgForm){
    this.buypropertyService.createProperty().subscribe({
      next:(data)=>{},
      complete:()=>{this.router.navigate(['/search'])},
      error:(err)=>{console.log("unable to add"+ err);}
    })
  }

}
