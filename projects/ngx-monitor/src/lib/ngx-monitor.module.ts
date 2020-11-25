import { NgModule } from '@angular/core';
import { NgxMonitorComponent } from './ngx-monitor.component';
import { NgxMonitorRoutingModule } from './ngx-monitor.routing';

@NgModule({
  imports: [ NgxMonitorRoutingModule ],
  declarations: [ NgxMonitorComponent ],
  exports: [ NgxMonitorComponent ]
})
export class NgxMonitorModule { }
