import { Component, EventEmitter, Output } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faWindowClose } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';



@Component({
  selector: "Toolbar",
  templateUrl: './Toolbar.component.html',
  styleUrls: ['./Toolbar.component.scss'],
})
export class ToolbarComponent {
  title = 'Toolbar';
  menu_icon = faBars;
  @Output() Navigate = new EventEmitter();

  close_icon = faWindowClose;
  menu = [
    { name: 'HOME', url: '/', element: 'Home' },
    { name: 'ABOUT US', url: '/aboutUs', element: 'AboutUs' },
    { name: 'OUR WORK', url: '/ourWork', element: 'OurWork' },
    { name: 'SERVICES', url: '/services', element: 'Services' },
    { name: 'CONTACT US', url: '/contactUs', element: 'ContatUs' },
    { name: 'MISSION & VALUES', url: '/mission', element: '' },
    { name: 'CAREERS', url: '/careers', element: '' }

  ];

  showMobileNavBar = false;

  navigateTo(element: string) {
    this.Navigate.emit(element);
  }
}
