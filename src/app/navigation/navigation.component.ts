import { Component, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { Language } from '../_models/password.model';

@Component({
  selector: 'ctn-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavigationComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,  private translateService: TranslateService) {}

  @Output('theme') theme = new EventEmitter()
  icon: string = 'dark_mode'

  switchTheme(){
    this.icon = this.icon == 'light_mode' ? 'dark_mode' : 'light_mode'
    this.theme.emit(this.icon)
  }

  selectLanguage(language: Language) {
    this.translateService.use(language)
  }

}
