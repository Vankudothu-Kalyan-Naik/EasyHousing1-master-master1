import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-buying',
  templateUrl: './buying.component.html',
  styleUrls: ['./buying.component.css']
})
export class BuyingComponent implements OnInit {
public propertyForm!:FormGroup
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {

this.propertyForm=this.formBuilder.group({
  propertyname :['',Validators.required],
  propertytype :['',Validators.required],
  description :['',Validators.required],
  address :['',Validators.required],
  pricerange :['',Validators.required],
  state :['',Validators.required],
  sellername :['',Validators.required],
  sellermobileno :['',Validators.required]

})
}
get f(){
  return this.propertyForm.controls;
}
}
