import { DOCUMENT } from '@angular/common';
import { Component, HostBinding, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'ctn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(@Inject(DOCUMENT) private document: Document, private renderer: Renderer2){}


  isDark: boolean = true

  @HostBinding('class') get themeMode(){
    return this.isDark ? 'theme-dark' : 'theme-light'
  }

  receiverTheme($event: any){
    if($event == 'dark_mode'){
      this.isDark = true
      this.renderer.setAttribute(this.document.body, 'class', 'theme-dark')
    }else{
      this.isDark = false
      this.renderer.setAttribute(this.document.body, 'class', 'theme-light')
    }
  }




}
