import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {

  id: any;
  player: any = {};
  playerForm: FormGroup;
  titleForm:string = "Add Player";
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private playerService: PlayerService) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.titleForm = "Edit Player";
      this.playerService.sendReqToGetPlayerByID(this.id).subscribe(
        (data)=> {
          this.player = data.result;
        }
      );
    } 
    this.playerForm = this.formBuilder.group({
      name: [''],
      age: [''],
      poste: [''],
      nbr: ['']
    })
  }

  addOrEditPlayer() {
  }

}
