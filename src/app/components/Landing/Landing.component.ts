import { Component, ViewChild } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss'],
})
export class LandingComponent {
  upIcon = faArrowUp;
  @ViewChild('AboutUs', { static: false }) AboutUs;
  @ViewChild('ContatUs', { static: false }) ContatUs;
  @ViewChild('OurWork', { static: false }) OurWork;
  @ViewChild('Home', { static: false }) Home;
  @ViewChild('Services', { static: false }) Services;




  borderBulletList = [{
    data: 'We are <span class=\'tc-s f-wm\'>ISO 9001:2015</span> Certified Company with specialisation in <span class=\'tc-s f-wm\'>Project Management</span>, <span class=\'tc-s f-wm\'>O&M</span> service.'
  },
  {
    data: 'We cater industries like <span class=\'tc-s f-wm\'>STEEL</span>, <span class=\'tc-s f-wm\'>POWER</span>, <span class=\'tc-s f-wm\'>MINING</span>, <span class=\'tc-s f-wm\'>FERTILIZER</span>, <span class=\'tc-s f-wm\'>OIL</span>, <span class=\'tc-s f-wm\'>GAS </span> & other    <span class=\'tc-s f-wm\'>MANUFATURING </span> industries. '
  },
  {
    data: 'We also provide  customize engineering solutions including <span class=\'tc-s f-wm\'>EPC</span> services.'
  }];
  navigateTo(element: string) {
    console.log(element);
    this[element].nativeElement.scrollIntoView({ behavior: 'smooth' });
  } constructor(

  ) {

  }
  ngOnInit() {


  }
}
