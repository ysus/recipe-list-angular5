import { Directive, HostBinding, HostListener,EventEmitter, Output } from "@angular/core";

@Directive({
    selector:'[appDropdown]'
})
export class DropdownDirective{

    //@HostBinding('class.show') isOpen = false;
     show:boolean=false;

    @Output() isShow = new EventEmitter<boolean>();


    @HostListener('click') toggleOpen(){
        //this.isOpen = !this.isOpen
        this.show = !this.show;
        this.isShow.emit(this.show);
    }

}