import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad, Route} from "@angular/router";
import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate, CanLoad {
    constructor( private authService:AuthService){

    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot){
        return this.authService.isAuthenticated();
    }

    canLoad(router:Route):boolean{
        return this.authService.isAuthenticated();
    }
}