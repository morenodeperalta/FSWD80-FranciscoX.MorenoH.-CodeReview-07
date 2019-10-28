import { Component, OnInit } from '@angular/core';
import { ExperienceService } from "../shared/experience.service";

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.sass']
})
export class ExperienceComponent implements OnInit {

  constructor(public experienceService: ExperienceService) { }
  submitted: boolean;
  formControls = this.experienceService.form.controls;
  showSuccessMessage: boolean;
  ngOnInit() {
  }


  onSubmit(){
  	this.submitted = true;
  	if(this.experienceService.form.valid)
	  if(this.experienceService.form.get("$key").value == null )
    this.experienceService.insertExperience(this.experienceService.form.value);
    else 
        this.experienceService.updateExperience(this.experienceService.form.value);
    this.showSuccessMessage =true;// we set the property to true
    setTimeout(()=> this.showSuccessMessage=false,3000); 
    this.submitted = false;
    this.experienceService.form.reset();            // insert
    	
 }
}


