import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  @Input() matchInput: any;
  constructor() { }

  ngOnInit() {
  }

  score(a, b) {
    let result;
    if (a == b) {
      result = ['0', 'blue', 'Draw'];
    } else if (a > b) {
      result = ['1', 'green', 'Win'];
    } else {
      result = ['2', 'yellow', 'Loss'];
    }
    return result;
  }
  // scoreColor(a, b) {
  //   let result;
  //   if (a == b) {
  //     result = 'yellow';
  //   } else if (a > b) {
  //     result = 'green';
  //   } else {
  //     result = 'red';
  //   }
  //   return result;
  // }
}
