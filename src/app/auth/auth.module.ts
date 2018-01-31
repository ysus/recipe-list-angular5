import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
    imports: [
        FormsModule,
        AuthRoutingModule
    ],
    declarations: [
        SigninComponent,
        SignupComponent
    ],
})
export class AuthModule { 

}