import {HttpClientModule} from "@angular/common/http";
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from "@angular/router";
import {FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {fab} from "@fortawesome/free-brands-svg-icons";
import {fas} from '@fortawesome/free-solid-svg-icons';
import {ShareButtonsModule} from 'ngx-sharebuttons/buttons';
import {AboutComponent} from './about/about.component';
import {AppComponent} from './app.component';
import {appRoutes} from "./app.routes";
import {GeneratorComponent} from './generator/generator.component';
import {PhotoComponent} from './photo/photo.component';

@NgModule({
  declarations: [
    AppComponent,
    GeneratorComponent,
    PhotoComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    ShareButtonsModule.withConfig()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas, fab);
  }

}
