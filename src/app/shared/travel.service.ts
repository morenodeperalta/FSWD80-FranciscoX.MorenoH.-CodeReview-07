import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators  } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class TravelService {

  	constructor(public firebase: AngularFireDatabase) { }
  		travelList: AngularFireList<any>;
  			form = new FormGroup({
     		$key: new FormControl(null),
     		fullName: new FormControl('', Validators.required),
     		email: new FormControl('', Validators.email),
     		mobile: new FormControl('', [Validators.required, Validators.minLength(8)]),
     		location: new FormControl('')
        		});



  	getTravels(){
            this.travelList = this.firebase.list('travels');
            return this.travelList.snapshotChanges();
        }

  	insertTravel(travel){
        	this.travelList.push({
               	fullName: travel.fullName,
                email: travel.email,
                mobile: travel.mobile,
                location:travel.location
                	});
        }

   	populateForm(customer){
    	this.form.setValue(customer);
  		}

  	updateTravel(travel){
    	this.travelList.update(travel.$key,{
       		fullName: travel.fullName,
        	email: travel.email,
        	mobile: travel.mobile,
        	location:travel.location
    			});
  			}

  	deleteTravel($key: string){
    	this.travelList.remove($key);
  			}
}
