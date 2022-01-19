import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-search-matches',
  templateUrl: './search-matches.component.html',
  styleUrls: ['./search-matches.component.css']
})
export class SearchMatchesComponent implements OnInit {


  searchForm: FormGroup;
  matches: any;
  constructor(
    private formBuilder: FormBuilder,
    private matchService: MatchService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      teamOne: ['', [Validators.required]]
    })
  }

  search() {
    console.log('Here obj', this.searchForm.value);
    this.matchService.sendReqToSearchByTeamOneWithPost(this.searchForm.value).subscribe(
      (data) => {
        console.log('Data from BE', data);
        
        this.matches = data.findedMatches;
      }
    );
  }

}
