import { Routes } from '@angular/router';
import { HomeComponent } from './Home/Home.component';
import { TrialPointComponent } from './TrialPoint/TrialPoint.component';
import { ServicesComponent } from './Services/Services.component';
import { TeamComponent } from './Team/Team.component';
import { ContactComponent } from './Contact/Contact.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'services',
        component: ServicesComponent
    },
    {
        path: 'trialpoint',
        component: TrialPointComponent
    },
    {
        path: 'team',
        component: TeamComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    }
];
