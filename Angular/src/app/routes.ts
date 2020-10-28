import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';

export const appRoutes: Routes = [
    {
        path: 'signup', component: UserComponent, // when nevigated here, load user component inside app.component.html's router-outlet, and inside the user.component.html's router-outlet, load the children html (sign-up.component.html. see one row below)
        children: [{ path: '', component: SignUpComponent }]
    },
    {
       path: '', redirectTo: '/signup', pathMatch: 'full'
    }
]; // imported