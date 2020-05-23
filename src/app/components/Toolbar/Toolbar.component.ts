import { Component, EventEmitter, Output } from "@angular/core";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { Router } from "@angular/router";



@Component({
  selector: "Toolbar",
  templateUrl: "./Toolbar.component.html",
  styleUrls: ["./Toolbar.component.scss"],
})
export class ToolbarComponent {
  title = "Toolbar";
  menu_icon = faBars;
  @Output() Navigate = new EventEmitter();

  close_icon = faWindowClose;
  menu = [
    { name: "ABOUT US", url: "/Home", element:'AboutUs'},
    { name: "OUR WORK", url: "/Home", element: "OurWork" },
    { name: "SERVICES", url: "/Home", element: "Services" },
    { name: "CONTACT US", url: "/Home",element: "ContactUs" }
  ]

  showMobileNavBar: boolean = false;

  navigateTo(element: string) {
    this.Navigate.emit(element)
  }
}
