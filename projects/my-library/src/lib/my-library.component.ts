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
  <fluid-form [config]="config"></fluid-form>
  `,
  styles: [
  ]
})
export class MyLibraryComponent implements OnInit {
  constructor(private externalScriptLoader: FluidServiceService) { }
  config = {
    elements: [
      {
        label: 'Co-Insurance Agreement:',
        controlName: 'co_insurance_agreement',
        dataPath: 'co_insurance_agreement',
        elementType: 'radio-group',
        inlineQuestion: true,
        questionWidth: 9,
        labelTextOverflow: 'wrap',
        options: [
          {
            value: 'true',
            label: 'Yes',
          },
          {
            value: 'false',
            label: 'No',
          },
        ],
        initialValue: 'false',
      },
      {
        label: 'Co-Insurer:',
        dataPath: 'co_insurer',
        controlName: 'co_insurer',
        elementType: 'input',
        elementWidth: 12,
        type: 'text',

        validation: [
          {
            type: 'minLength',
            value: 4,
            message: 'You must enter more than 4 characters in this field',
          },
        ],
      },
      {
        label: 'Co-Insurers (Add repeating data)',
        dataPath: 'co_insurer_section',
        controlName: 'co_insurer_section',
        elementType: 'array',
        entryLabel: (index:any, value:any) => {
          return ` `;
        },
        errorConfig: { disabled: true },

        // displayStyle: 'table',

        // conditionalOn: (formData: any) => formData?.co_insurance_agreement === 'true',
        formConfig: {
          layout: 'horizontal',

          elements: [
            {
              label: 'Co-Insurer:',
              dataPath: 'co_insurer',
              controlName: 'co_insurer',
              elementType: 'input',
              elementWidth: 12,
              type: 'text',

              validation: [
                {
                  type: 'minLength',
                  value: 4,
                  message:
                    'You must enter more than 4 characters in this field',
                },
              ],
            },
          ],
        },
      },
    ],
  };
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
    const scriptUrl = 'https://fluid.libertymutual.com/fluid/build/fluid.esm.js'; 
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
