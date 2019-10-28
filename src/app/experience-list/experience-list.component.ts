import { Component, OnInit } from '@angular/core';
import { ExperienceService } from "../shared/experience.service";


@Component({
  selector: 'app-experience-list',
  templateUrl: './experience-list.component.html',
  styleUrls: ['./experience-list.component.sass']
})
export class ExperienceListComponent implements OnInit {
	 experienceArray =[];
   showDeletedMessage : boolean;
   searchText:string = "";
  constructor(public experienceService: ExperienceService) { }

  ngOnInit() {
  	 this.experienceService.getExperiences().subscribe(
                 (list) => {
                         this.experienceArray = list.map( (item) => {
                                return {
                                        $key : item.key,
                                        ...item.payload.val()
                                }
                        })
                 });
  }

  onDelete($key){
     if(confirm("Are you sure you want to delete this record?")){
       this.experienceService.deleteExperience($key);
       this.showDeletedMessage = true;
       setTimeout(()=> this.showDeletedMessage=false , 3000)
     }
   }

  filterCondition(experience){
     return   experience.experience.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
              experience.days.indexOf(this.searchText) != -1 ||
              experience.people.indexOf(this.searchText) != -1;
   }
}

