

import { Component, Input } from '@angular/core';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.scss'],
})
export class AppListComponent {
    @Input() type: string;
    @Input() lists: Array<any>;
    arrowIcon = faGreaterThan;
}
