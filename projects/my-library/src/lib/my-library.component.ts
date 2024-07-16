import { Component,OnInit } from '@angular/core';
import { fluidEnvironments } from './fluid';
// export const fluid = fluidEnvironments.external;
import { FluidServiceService } from './my-library/fluid-service.service';

@Component({
  selector: 'lib-my-library',
  template: `
   <fluid-card title="" collapsible="false" remove-header-border>
    <!-- Your FLUID Components Here! -->
    <fluid-datepicker [validation]="validation"> </fluid-datepicker>
  </fluid-card>
  <fluid-combo-box control-name="my-combo-box" 
  label="Movie Titles"
  multi-select="true"
  allow-custom-input="true"
  placeholder="Enter option(s) that are NOT in the dropdown menu..."
  [options]="options"></fluid-combo-box>
  `,
  styles: [
  ]
})
export class MyLibraryComponent implements OnInit {
  constructor(private externalScriptLoader: FluidServiceService) { }

  validation = [
    {
      type: 'custom',
      validatorFn: (value: string) => {
        return value === '2024-07-16';
      },
      message: 'The value must 2024-07-16',
    },
  ];
  options=[
    {
    label:"Inception",
    value:"inception"
   },
   {
    label:"Jurassic Park",
    value:"jurassic park"
   },
   {
    label:"Martian",
    value:"martian"
   },
   {
    label:"Casablanca",
    value:"casablanca"
   },
   {
    label:"Oppenheimer",
    value:"oppenheimer"
   },
  ];
  ngOnInit() {
    const scriptUrl = 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.esm.js'; 
    this.externalScriptLoader.loadScript(scriptUrl)
      .then(() => {
        console.log('External script loaded');
        // Now you can use functions or variables from external.js
      })
      .catch(error => {
        console.error('Error loading external script:', error);
      });
  }
}
