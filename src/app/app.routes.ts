import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {GeneratorComponent} from './generator/generator.component';


export const appRoutes: Routes = [
    { path: 'generator', component: GeneratorComponent },
    { path: 'generator/:adjective/:animal/:version', component: GeneratorComponent },
    { path: 'generator/:realVersion', component: GeneratorComponent },
    { path: 'about', component: AboutComponent },
    { path: '**', redirectTo: 'generator' }
]