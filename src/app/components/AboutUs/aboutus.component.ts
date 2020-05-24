

import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-about',
    templateUrl: './aboutus.component.html',
    styleUrls: ['./aboutus.component.scss'],
})
export class AboutUsComponent {


    @Input() isRowReverse = false;
    arrowIcon = faGreaterThan;
    listOfAboutUs = [
        {
            data: 'De- Bottlenecking of manufacturing Processes.'
        },
        {
            data: 'Improvement in Overall Equipment Effectiveness through application of scientific tools approach.'
        },
        {
            data: 'Troubleshooting of complicated industrial problems'
        },
        {
            data: 'Development of Customised PLC solutions for any application.'
        }
    ];
}
