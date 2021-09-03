import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {
  public ans:any;

  constructor(private _onecomponent:DemoService) { }

  ngOnInit(): void {
this.ans=this._onecomponent.addNumbers(10,20);
  }
  

}
