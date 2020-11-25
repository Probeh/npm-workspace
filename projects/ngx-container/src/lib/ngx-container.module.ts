import { NgModule } from '@angular/core';
import { NgxContainerRoutingModule } from './ngx-container.routing';
import { NgxContainerComponent } from './ngx-container.component';

@NgModule({
  imports: [ NgxContainerRoutingModule ],
  declarations: [ NgxContainerComponent ],
  exports: [ NgxContainerComponent ],
})
export class NgxContainerModule { }
