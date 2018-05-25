import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { GeneratorComponent } from './generator/generator.component';
import { AboutComponent } from './about/about.component';


export const appRoutes: Routes = [
    { path: 'generator', component: GeneratorComponent },
    { path: 'generator/:adjective/:animal/:version', component: GeneratorComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'generator' }
]