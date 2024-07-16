import { Injectable } from '@angular/core';
import { fluidEnvironments } from '.././fluid';
@Injectable({
  providedIn: 'root'
})
export class FluidServiceService {

  constructor() { }
  getMessage(): string {
    return 'Hello from My Service!';
  }
  loadScript(url: string): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const scriptElement = document.createElement('script');
       const fluid = fluidEnvironments.external;

     
        scriptElement.type = 'module';
        // scriptElement.src = 'https://dsfe50dspcxki.cloudfront.net/fluid/build/fluid.esm.js';
        scriptElement.src = url;
      //https://d3vissazv1qzch.cloudfront.net/fluid/build/fluid.js
      //https://d3vissazv1qzch.cloudfront.net/fluid/build/fluid.css

      scriptElement.onload = () => {
        console.log(`Script loaded successfully: ${url}`);
        resolve();
      };

      scriptElement.onerror = (error) => {
        console.error(`Script load error for ${url}`, error);
        reject(error);
      };

      document.body.appendChild(scriptElement);
    });
  }
  
}
