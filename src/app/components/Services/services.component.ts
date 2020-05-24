

import { Component, Input } from '@angular/core';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
    selector: 'app-service',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.scss'],
})
export class ServicesComponent {
    adIcon = faExclamationCircle;
    projectManagementService = [
        {
            title: 'Project Planning & Execution Assistance',
            service: [{ data: 'Technogy selection' }, { data: 'Cost Estimation' }, { data: 'Equipment and Line List & sizing' }]
        },
        {
            title: 'Procurement Assistance',
            service: [{ data: 'Preparation of Procurement specs' }, { data: 'Tender Documents' }, { data: 'Vetting of Drawings and documents' }]
        },
        {
            title: 'Project Management & Construction Supervision',
            service: [{ data: 'Project Schedule' }, { data: 'Cost Estimation' }, { data: 'Resource planning' }]
        },
        {
            title: 'Commissioning Assistance',
            service: [{ data: 'Provide relevant engineering support' }, {
                data: 'Cold & Integrated trial runs including troubleshooting assistance'
            }]
        }
    ];
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

    mainServiceOffer = [
        {
            data: 'De-Bottlenecking of Plant Layout, Equipment sizing, Infrastructure for efficient and smooth Plant Operations.'

        },
        {
            data: 'Development of Customised PLC solutions for any application.'
        },
        {
            data: 'Training & skill Development for specific plant needs'
        },
        {
            data: 'Supervision services for Major Capital Repair to cut down cost of maintenance.'
        },
        {
            data: 'Improvement in Overall Equipment Effectiveness(OEE)'
        },
        {
            data: 'Reduction in Maintenance Cost (Spares & Consumables)'
        },
        {
            data: 'Residual Life Assessment(RLA) for Civil & Building structures for Longevity and safety of Plant.'
        }
    ];


    otherServices = [
        {
            data: 'Project Management'

        },
        {
            data: 'Process Re-Engineering and Re-Designing'
        },
        {
            data: 'Operation & Maintenance'
        },
        {
            data: 'Total Productive Maintenance (TPM)'
        },
        {
            data: 'Structural Engineering'
        },
        {
            data: 'Electrical, Instrumentation and Automation'
        }
    ];
}
