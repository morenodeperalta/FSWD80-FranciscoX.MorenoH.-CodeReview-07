import { Component, OnInit } from '@angular/core';
import { TravelService } from "../shared/travel.service";
@Component({
  selector: 'app-travel-list',
  templateUrl: './travel-list.component.html',
  styleUrls: ['./travel-list.component.sass']
})
export class TravelListComponent implements OnInit {
	
	travelArray =[];
  	showDeletedMessage : boolean;
  	searchText:string = "";

  	constructor(public travelService: TravelService) { }

		ngOnInit() {
		  	this.travelService.getTravels().subscribe(
		                 (list) => {
		                         this.travelArray = list.map( (item) => {
		                                return {
		                                        $key : item.key,
		                                        ...item.payload.val()
		                                }
		                        })
		                 });
		  }

		onDelete($key){
     		if(confirm("Are you sure you want to delete this record?")){
       		this.travelService.deleteTravel($key);
       		this.showDeletedMessage = true;
       		setTimeout(()=> this.showDeletedMessage=false , 3000)
       			}
   			}

   		filterCondition(travel){
     		return 	travel.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
     				travel.mobile.indexOf(this.searchText) != -1 ||
     				travel.location.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
     				travel.email.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1
     			;
     			
   			}
}
