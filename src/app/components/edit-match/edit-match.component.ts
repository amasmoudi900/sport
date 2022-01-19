import { ActivatedRoute, Router } from '@angular/router';
import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-match',
  templateUrl: './edit-match.component.html',
  styleUrls: ['./edit-match.component.css']
})
export class EditMatchComponent implements OnInit {

  editMatchForm: FormGroup;
  match: any = {};
  matchEdit: any;
  id: any;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService,
    private activatedRoute: ActivatedRoute,
    private router:Router) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    this.matchService.sendReqToGetMatchById(this.id).subscribe(
      (data) => {
        this.match = data.result;
      }
    );
    this.editMatchForm = this.formBuilder.group({
      teamOne: [''],
      teamTwo: [''],
      scoreOne: [''],
      scoreTwo: ['']
    })
  }

  editMatch() {
    alert('edit btn is clicked');
    this.matchService.sendReqToEditMatch(this.match).subscribe(
      (data) => {
        console.log('Message from BE after editing', data.message);
        this.router.navigate(['admin']);
      }
    );
  }

}
