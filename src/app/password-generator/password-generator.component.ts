import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, NgModel } from '@angular/forms';
import { ThemePalette } from '@angular/material/core';
import { ProgressBarMode } from '@angular/material/progress-bar';
import { StepClass } from '../_models/password.model';
import { PasswordService } from '../_services/password.service';

@Component({
  selector: 'ctn-password-generator',
  templateUrl: './password-generator.component.html',
  styleUrls: ['./password-generator.component.scss']
})
export class PasswordGeneratorComponent implements OnInit {

  constructor() { }

  passwordStrong: number = 0
  mode: ProgressBarMode = 'determinate'
  password: string
  PasswordService = PasswordService // To access in template


  processPassword(){
    const pass = this.password
    this.passwordStrong = PasswordService.verifyLenght(pass)
    this.passwordStrong += PasswordService.verifyLowerCase(pass)
    this.passwordStrong += PasswordService.verifyUpperCase(pass)
    this.passwordStrong += PasswordService.verifyNumber(pass)
    this.passwordStrong += PasswordService.verifyDigits(pass)
  }

  ngOnInit(): void {
  }

}
