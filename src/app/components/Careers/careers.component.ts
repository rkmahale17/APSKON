import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-contact',
    templateUrl: './careers.component.html',
    styleUrls: ['./careers.component.scss'],
})
export class CareersComponent {
//%0D%0AP
//
    mailToLink = `mailTo:apskonecs@gmail.com?subject=JOB APPLY FOR THE POST OF &body= Hi Apskon,%0D%0A Please find my details below%0D%0A Name%20%3A%0D%0A Mobile No.%20%3A%0D%0A Experience%20%3A%0D%0A Please attach your resume and send mail to us.`
}