import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';
@Component({
  selector: 'app-two',
  templateUrl: './two.component.html',
  styleUrls: ['./two.component.css']
})
export class TwoComponent implements OnInit {
  public ans1:any;
  constructor(private _twocomponent:DemoService) { }

  ngOnInit(): void {
    this.ans1=this._twocomponent.sub(20,10);
  }

}
