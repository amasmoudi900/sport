import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {


  match: any = {};
  addMatchForm: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private matchService:MatchService,
    private router:Router
  ) { }

  ngOnInit() {
    this.addMatchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    });
  }

  addMatch() {
    console.log('Here object', this.match);
    this.matchService.sendReqToAddMatch(this.match).subscribe(
      (data)=> {
        console.log('Message from BE', data.message);
        this.router.navigate(['admin']);
      }
    );
  }
}
