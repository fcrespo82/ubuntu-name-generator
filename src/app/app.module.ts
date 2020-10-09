import { HttpClientModule } from "@angular/common/http";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RouterModule } from "@angular/router";
import { appRoutes } from "./app.routes";
import { GeneratorComponent } from './generator/generator.component';
import { PhotoComponent } from './photo/photo.component';
import { AboutComponent } from './about/about.component';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from "@fortawesome/free-brands-svg-icons";

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
    RouterModule.forRoot(appRoutes),
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
