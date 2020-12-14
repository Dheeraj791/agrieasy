import { Route } from '@angular/router';
import { DashboardComponent } from '../farmer/dashboard/dashboard.component';
import { AddticketComponent } from '../farmer/addticket/addticket.component';
import { CropstatusupdateComponent } from '../farmer/cropstatusupdate/cropstatusupdate.component';
import { ViewassignedcropComponent } from '../farmer/viewassignedcrop/viewassignedcrop.component';
import { CalendarComponent } from '../farmer/calendar/calendar.component';
import { FarmregistrationComponent } from '../farmer/farmregistration/farmregistration.component';
import { CropsearchComponent } from '../farmer/cropsearch/cropsearch.component';



export const farmerRoute: Route[] = [
    {
        path     : 'addticket',
        component: AddticketComponent
    },{
        path     : 'cropstatusupdate',
        component: CropstatusupdateComponent
    },{
        path     : 'viewassignedcrop',
        component: ViewassignedcropComponent
    },{
        path     : 'dashboard',
        component: DashboardComponent
    },
    {
        path     : 'calendar',
        component: CalendarComponent
    },
    {
        path     : 'farmregistration',
        component: FarmregistrationComponent
    },
    {
        path     : 'cropsearch',
        component: CropsearchComponent
    }
];
