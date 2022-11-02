import { Component, Input, OnInit } from '@angular/core';
import { StepClass, StepIcon } from '../_models/password.model';

@Component({
  selector: 'ctn-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  constructor() { }

  @Input('stepClass') stepClass: StepClass

  ngOnInit(): void {

  }

}
