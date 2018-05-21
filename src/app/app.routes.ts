import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';

export const appRoutes: Routes = [
    { path: ':adjective/:animal/:version', component: MainComponent },
    { path: '**', component: MainComponent }
]