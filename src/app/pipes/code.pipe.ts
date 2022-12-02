import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'code'
})
export class CodePipe implements PipeTransform {

  transform(value: string): string {
    let result: string;
    result = "REF-" + value;
    return result;
  }

}
