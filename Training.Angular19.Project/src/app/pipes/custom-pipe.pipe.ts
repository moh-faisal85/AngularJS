import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
//When value is empty, null or undefined then replace the value with 'NA' value
export class CustomPipePipe implements PipeTransform {

  transform(value: unknown): unknown {
    if(value == "" || value == null || value == undefined)
    {
      return "NA";
    }
    else
    {
      return value;
    }
  }

}
