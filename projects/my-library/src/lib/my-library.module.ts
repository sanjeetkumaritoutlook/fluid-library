import { NgModule ,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MyLibraryComponent } from './my-library.component';
import { FluidComponentComponent } from './my-library/fluid-component/fluid-component.component';



@NgModule({
  declarations: [
    MyLibraryComponent,
    FluidComponentComponent
  ],
  imports: [
  ],
  exports: [
    MyLibraryComponent
  ],
   schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class FLUIDLibraryModule { }
