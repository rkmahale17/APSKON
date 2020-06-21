import { Component, ViewChild } from '@angular/core';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-mission',
    templateUrl: 'mission.component.html',
    styleUrls: ['mission.component.scss'],
})
export class MissionComponent {


    // Customer Delight.
    // Commitment.
    // Transparency.
    // Process Excellence.
    values = [
        { data: 'Customer Delight' },
        { data: 'Commitment' },
        { data: 'Transparency' },
        { data: 'Process Excellence' }
    ];
}
