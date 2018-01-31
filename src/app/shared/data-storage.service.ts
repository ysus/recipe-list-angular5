import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from "@angular/common/http";
import { RecipeService } from "../recipes/recipe.service";
import { Recipe } from "../recipes/recipe.model";
import 'rxjs/Rx';
import { AuthService } from "../auth/auth.service";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class DataStorageService {
    constructor(
        private http: HttpClient,
        private recipeService: RecipeService,
        private authService: AuthService) {

    }

    storeRecipe() {
        return this.http.put(
            'https://ng-recipe-book-b7a60.firebaseio.com/recipes.json',
            this.recipeService.getRecipes()
        )
    }


    getRecipes() {
        const token = this.authService.getToken();
        const header = new HttpHeaders()
            .set('Authorization',token);
        return this.http.get(
            'https://ng-recipe-book-b7a60.firebaseio.com/recipes.json?auth='+token)
            .map(
            (response: any) => {
                const recipes: Recipe[] = response;
                for (let recipe of recipes) {
                    if (!recipe['ingredients']) {
                        console.log(recipe);
                        recipe['ingredients'] = [];
                    }
                }
                return recipes;
            }
            )
            .subscribe(
            (response: any) => {
                this.recipeService.setRecipes(response);
            }
            )
    }

}
