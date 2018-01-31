import { AuthGuard } from '../auth/auth-guard.service';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

import { AppRoutingModule } from '../app-routing.module';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipes/recipe.service';
import { DataStorageService } from '../shared/data-storage.service';
import { AuthService } from '../auth/auth.service';


@NgModule({
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        AppRoutingModule,
        HeaderComponent
    ],
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    providers:[
        ShoppingListService, 
        RecipeService,
        DataStorageService, 
        AuthService,
        AuthGuard
    ]
})
export class CoreModule { }
