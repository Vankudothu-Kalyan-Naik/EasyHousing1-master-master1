import { Component, OnInit } from '@angular/core';
import { BuyPropertyService } from 'src/app/services/buyproperty.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
@Component({
  selector: 'app-buyer-selection',
  templateUrl: './buyer-selection.component.html',
  styleUrls: ['./buyer-selection.component.css']
})
export class BuyerSelectionComponent implements OnInit {
property$:any;
searchText:string='';
  constructor(private buypropertyService:BuyPropertyService) { }

  ngOnInit(): void {
    this.buypropertyService.getPropertyDetails().subscribe({
      next:(data)=>{
        this.property$=data;
      },
      complete:()=>{
        console.log("completed");
      },
      error:(err)=>{
        console.log("unable to fetch properties"+err);
      }
    });
  }


}



