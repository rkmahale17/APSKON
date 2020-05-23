import { Component, ViewChild } from '@angular/core';


import { Router } from '@angular/router';


@Component({
  selector: 'app-landing',
  templateUrl: 'landing.component.html',
  styleUrls: ['landing.component.scss'],
})
export class LandingComponent {

  @ViewChild("AboutUs", { static: false }) AboutUs;
  @ViewChild("ContactUs", { static: false }) ContactUs;
  borderBulletList = [{
    data: "We are <span class='tc-p'>ISO 9001:2015</span> Certified Company with specialisation in project management & om service"
  },
  {
    data: " We cater industries like <span class='tc-p'>STEEL</span>, <span class='tc-p'>POWER</span>, <span class='tc-p'>MINING</span>, <span class='tc-p'>FERTILIZER</span>, <span class='tc-p'>OIL</span>, <span class='tc-p'>GAS </span> & other Manufacturing Industries "
    },
    {
      data: "We also provide  customize engineering solutions including <span class='tc-p'>EPC</span> services"
  }]
  navigateTo(element: string) {
    console.log(element)
    this[element].nativeElement.scrollIntoView({ behavior: "smooth" });
  } constructor(

  ) {

  }
  ngOnInit() {


  }
}
