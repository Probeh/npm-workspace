import { NgModule } from '@angular/core';
import { NgxSourceMapRoutingModule } from './ngx-sourcemap.routing';
import { NgxSourceMapComponent } from './ngx-sourcemap.component';

@NgModule({
  imports: [ NgxSourceMapRoutingModule ],
  declarations: [ NgxSourceMapComponent ],
  exports: [ NgxSourceMapComponent ]
})
export class NgxSourcemapModule { }
