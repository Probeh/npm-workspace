import { NgModule } from '@angular/core';
import { NgxRestWorkerComponent } from './ngx-restworker.component';
import { NgxRestWorkerRoutingModule } from './ngx-restworker.routing';

@NgModule({
  imports: [ NgxRestWorkerRoutingModule ],
  declarations: [ NgxRestWorkerComponent ],
  exports: [ NgxRestWorkerComponent ],
})
export class NgxRestworkerModule { }
