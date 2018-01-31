import { Component, OnInit ,OnDestroy} from "@angular/core";
import { Recipe } from '../recipe.model';
import { RecipeService } from "../recipe.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit,OnDestroy {
  recipes: Recipe[];
  subscription:Subscription;
  constructor( private recipeService: RecipeService,private route: ActivatedRoute,private router: Router) {}

  ngOnInit() {

    this.subscription = this.recipeService.recipesChanged
      .subscribe(
        (recipes:Recipe[])=>{
          this.recipes = recipes;
        });
        
    this.recipes = this.recipeService.getRecipes();

  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onRecipeSelected(recipe: Recipe) {
  }

  onNewRecipe(){
    this.router.navigate(['new'],{relativeTo: this.route });

  }
}
