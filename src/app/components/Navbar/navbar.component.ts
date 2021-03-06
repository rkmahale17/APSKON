import { Component, Input, EventEmitter, Output } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faArrowCircleRight } from "@fortawesome/free-solid-svg-icons";

import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Router } from '@angular/router';



@Component({
    selector: "nav-bar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.scss"],
})
export class NavbarComponent {
    title = "Toolbar";
    menu_icon = faBars;
    close_icon = faWindowClose;
    arrowForward = faArrowCircleRight;
    @Input() menu = [];
    @Output() closeNavBar: EventEmitter<any> = new EventEmitter();
    @Output() scrollToLink: EventEmitter<any> = new EventEmitter();

    constructor(private router: Router){}
    @Input() showMobileNavBar = false;


    close() {
        this.closeNavBar.emit(null);
    }
    closeAndScroll(element) {
        this.closeNavBar.emit(null);
        this.router.navigateByUrl(element.url);
    }

}
