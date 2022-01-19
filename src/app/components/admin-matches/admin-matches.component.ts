import { MatchService } from './../../services/match.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-matches',
  templateUrl: './admin-matches.component.html',
  styleUrls: ['./admin-matches.component.css']
})
export class AdminMatchesComponent implements OnInit {

  matches: any = [];
  constructor(
    private matchService: MatchService,
    private router:Router) { }

  ngOnInit() {
    this.matchService.sendReqToGetAllMatches().subscribe(
      (data)=>{
        this.matches = data.result;
      }
    );
  }

  goToDisplayMatch(x){
    // alert('btn clicked');
    this.router.navigate([`displayMatch/${x}`]);
  }

  goToEditMatch(x){
    this.router.navigate([`editMatch/${x}`]);
  }

  deleteMatch(id){
    this.matchService.sendReqToDeleteMatchById(id).subscribe(
      (data)=> {
        console.log('Result from BE', data);
        this.matchService.sendReqToGetAllMatches().subscribe(
          (data)=> {
            this.matches = data.result;
          }
        )
      }
    );
  }
}
