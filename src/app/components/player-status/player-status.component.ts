import { PlayerService } from './../../services/player.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-player-status',
  templateUrl: './player-status.component.html',
  styleUrls: ['./player-status.component.css']
})
export class PlayerStatusComponent implements OnInit {

  imcForm: FormGroup;
  player: any = {};
  result:any;
  constructor(
    private formBuilder:FormBuilder, 
    private playerService:PlayerService) { }

  ngOnInit() {
    this.imcForm = this.formBuilder.group({
      height:[''],
      weight:['']
    })
  }

  calculate(){
    console.log('Here player values', this.player);
    this.playerService.sendReqToCalculateIMC(this.player).subscribe(
      (data)=> {
        console.log('Here IMC from BE', data.imc);
        console.log('Here Message from BE', data.message);
        this.result = data;
      }
    );
  }

}
