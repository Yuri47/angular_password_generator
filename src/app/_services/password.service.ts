import { Injectable } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { StepClass } from '../_models/password.model';

@Injectable({
  providedIn: 'root'
})
export class PasswordService {

  constructor() { }

  static lengthClass: Subject<StepClass> = new BehaviorSubject<StepClass>('ctn_warn')
  static lowerCaseClass: Subject<StepClass> = new BehaviorSubject<StepClass>('ctn_warn')
  static upperCaseClass: Subject<StepClass> = new BehaviorSubject<StepClass>('ctn_warn')
  static numberClass: Subject<StepClass> = new BehaviorSubject<StepClass>('ctn_warn')
  static digitClass: Subject<StepClass> = new BehaviorSubject<StepClass>('ctn_warn')


  static setProgressBarColor(strong: number){
    let color: ThemePalette = 'warn'
    if(strong < 80){
      color = 'warn'
    } else if(strong >= 80 && strong < 100){
      color = 'accent'
    } else if(strong == 100){
      color = 'primary'
    }
    return color
  }

  static verifyLenght(pass: string): number{
    let passwordLength = pass.length * 10
    this.lengthClass.next('ctn_warn')
    if(passwordLength >= 60){
      passwordLength = 60
      this.lengthClass.next('ctn_primary')
    }
    return passwordLength
  }

  static verifyLowerCase(pass: string): number{
    let points = 0
    this.lowerCaseClass.next('ctn_warn')
    if(pass.match(/[a-z]/g)){ // Regex to lower case
      const lengthOfOccurrences = pass.match(/[a-z]/g).length
      if(lengthOfOccurrences == 1){
        points += 5
      }else if(lengthOfOccurrences > 1){
        points += 10
        this.lowerCaseClass.next('ctn_primary')
      }
    }
    return points
  }

  static verifyUpperCase(pass: string): number{
    let points = 0
    this.upperCaseClass.next('ctn_warn')
    if(pass.match(/[A-Z]/g)){ // Regex to upper case
      const lengthOfOccurrences = pass.match(/[A-Z]/g).length
      if(lengthOfOccurrences == 1){
        points += 5
      }else if(lengthOfOccurrences > 1){
        points += 10
        this.upperCaseClass.next('ctn_primary')
      }
    }
    return points
  }

  static verifyNumber(pass: string){
    let points = 0
    this.numberClass.next('ctn_warn')
    if(pass.match(/[0-9]/g)){ // Regex to numbers
      const lengthOfOccurrences = pass.match(/[0-9]/g).length
      if(lengthOfOccurrences == 1){
        points += 5
      }else if(lengthOfOccurrences > 1){
        points += 10
        this.numberClass.next('ctn_primary')
      }
    }
    return points
  }

  static verifyDigits(pass: string){
    let points = 0
    this.digitClass.next('ctn_warn')
    if(pass.match(/\W/g)){ // Regex to digits
      const lengthOfOccurrences = pass.match(/\W/g).length
      if(lengthOfOccurrences == 1){
        points += 5
      }else if(lengthOfOccurrences > 1){
        points += 10
        this.digitClass.next('ctn_primary')
      }
    }
    return points
  }

}
