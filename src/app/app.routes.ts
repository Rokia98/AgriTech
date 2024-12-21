import { Routes } from '@angular/router';
import { HomeComponent } from './presentations/general/home/home.component';
import { LoginComponent } from './presentations/general/login/login.component';
import { PanierComponent } from './presentations/general/panier/panier.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'panier', component: PanierComponent}
    


];






