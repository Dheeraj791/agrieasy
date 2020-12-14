import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { TreoModule } from '@treo';
import { TreoConfigModule } from '@treo/services/config';
import { TreoMockApiModule } from '@treo/lib/mock-api';
import { CoreModule } from 'app/core/core.module';
import { appConfig } from 'app/core/config/app.config';
import { mockDataServices } from 'app/data/mock';
import { LayoutModule } from 'app/layout/layout.module';
import { AppComponent } from 'app/app.component';
import { appRoutes } from 'app/app.routing';
import { DataTablesModule } from 'angular-datatables';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { FormsModule } from '@angular/forms'; 
import { FullCalendarModule} from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';
import { YouTubePlayerModule } from "@angular/youtube-player";


// FullCalendarModule.registerPlugins([
//     dayGridPlugin,
//     timeGridPlugin,
//     listPlugin,
//     interactionPlugin
//   ])

const routerConfig: ExtraOptions = {
    scrollPositionRestoration: 'enabled',
    preloadingStrategy       : PreloadAllModules
};

@NgModule({
    declarations: [
        AppComponent,
    
    ],
    imports     : [
        DataTablesModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(appRoutes, routerConfig),
        FormsModule,

        // Treo & Treo Mock API
        TreoModule,
        TreoConfigModule.forRoot(appConfig),
        TreoMockApiModule.forRoot(mockDataServices),

        // Core
        CoreModule,

        // Layout
        LayoutModule,

        // 3rd party modules
        MarkdownModule.forRoot({}),

        NgbModule,
        CKEditorModule,
        FullCalendarModule,
        YouTubePlayerModule

    ],
    bootstrap   : [
        AppComponent
    ]
})
export class AppModule
{
}
