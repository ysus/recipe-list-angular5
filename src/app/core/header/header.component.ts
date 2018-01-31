import { Component } from "@angular/core";
import { DataStorageService } from "../../shared/data-storage.service";
import { HttpErrorResponse } from "@angular/common/http";
import { AuthService } from "../../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  // styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  show:boolean;

  constructor(private dataStorageService:DataStorageService, public authService:AuthService){}
  
  isShow(e){
    this.show = e; 
  }

  onSaveData(){
    this.dataStorageService.storeRecipe()
    .subscribe(
      (response)=>{
        console.log(response);
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    );
  }

  onFetchData(){
    this.dataStorageService.getRecipes();
  }

  onLogout(){
    this.authService.logout();
  }

}
