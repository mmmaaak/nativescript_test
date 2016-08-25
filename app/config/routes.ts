import { RouterConfig } from '@angular/router';
import { nsProvideRouter } from 'nativescript-angular/router';

// Components
import { LoginComponent } from '../components';
import { MainComponent } from '../components';


const routes: RouterConfig = [
    { path: '', component: LoginComponent },
    { path: 'main', component: MainComponent}
];

export const APP_ROUTER_PROVIDERS = [
    nsProvideRouter(routes, { enableTracing: true })
];