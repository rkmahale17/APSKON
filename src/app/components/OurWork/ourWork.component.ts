

import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-work',
    templateUrl: './ourWork.component.html',
    styleUrls: ['./ourWork.component.scss'],
})
export class OurWorkComponent {


    arrowIcon = faGreaterThan;
    listOfAboutUs = [
        {
            data: "De- Bottlenecking of manufacturing Processes."
        },
        {
            data: "Improvement in Overall Equipment Effectiveness through application of scientific tools approach."
        },
        {
            data: "Troubleshooting of complicated industrial problems"
        },
        {
            data: "Development of Customised PLC solutions for any application."
        }
    ]
}
