import './app.module.ajs';

import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {UpgradeModule} from '@angular/upgrade/static';
import {AppComponent} from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UpgradeModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
  constructor(private upgrade: UpgradeModule) {
  }

  ngDoBootstrap() {
    this.upgrade.bootstrap(document.body, ['phonecatApp'], {strictDi: true});
  }
}
