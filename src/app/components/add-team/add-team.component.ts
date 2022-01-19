import { TeamService } from './../../services/team.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {

  addTeamForm: FormGroup;
  team: any = {};
  imagePreview:any;
  constructor(
    private formBuilder: FormBuilder,
    private teamService:TeamService,
    private router:Router) { }

  ngOnInit() {
    this.addTeamForm = this.formBuilder.group({
      name: [''],
      foundation: [''],
      country: [''],
      stadium: [''],
      img:['']
    })
  }

  addTeam() {
    console.log('Btn clicked', this.team);
    this.teamService.sendReqToAddTeam(this.team, this.addTeamForm.value.img).subscribe(
      (data)=> {
        console.log('Here data after save from BE', data.message);
        this.router.navigate(['admin']);
      }
    )
  }

  onImageSelected(event: Event) {
    console.log("event ", event);
    const file = (event.target as HTMLInputElement).files[0]; 
    this.addTeamForm.patchValue({ img: file }); 
    this.addTeamForm.updateValueAndValidity();
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result as string
    }; 
    reader.readAsDataURL(file);
  }

}
