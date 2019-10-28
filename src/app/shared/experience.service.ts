import { Injectable } from '@angular/core';
import { FormControl , FormGroup, Validators } from "@angular/forms";
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";


@Injectable({
  providedIn: 'root'
})
export class ExperienceService {

	constructor(public firebase: AngularFireDatabase) { }
	  	experienceList: AngularFireList<any>;
	  	form = new FormGroup({
	    	$key: new FormControl(null),
	     	experience: new FormControl('', Validators.required),
	     	days: new FormControl('', [Validators.required, Validators.minLength(1)]),
	     	people: new FormControl('', [Validators.required, Validators.minLength(1)]),
	     	img: new FormControl('', Validators.required)
	        	});

	getExperiences(){
                 this.experienceList = this.firebase.list('experiences');
                 return this.experienceList.snapshotChanges();
         }

    insertExperience(experience){
        this.experienceList.push({
                experience: experience.experience,
                days: experience.days,
                people: experience.people,
                img:experience.img
                  });
         }

    populateForm(experience){
        this.form.setValue(experience);
          }

    updateExperience(experience){
    this.experienceList.update(experience.$key,{
        experience: experience.experience,
        days: experience.days,
        people: experience.people,
        img:experience.img
            });
          }

    deleteExperience($key: string){
    this.experienceList.remove($key);
  }
}