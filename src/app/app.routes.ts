import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { WorkComponent } from './pages/work/work.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [

    {
        path: "", component: HomeComponent
    },
    {
        path: "our-work", component: WorkComponent
    },
    {
        path: "contact", component: ContactComponent
    }
];
