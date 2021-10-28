import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {validate} from 'codelyzer/walkerFactory/walkerFn';

@Component({
  selector: 'app-formlogin',
  templateUrl: './formlogin.component.html',
  styleUrls: ['./formlogin.component.css']
})
export class FormloginComponent implements OnInit {
 status = 'hay dien vao day';
 form: any = {};
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
  constructor() { }

  ngOnInit() {
  }

}
