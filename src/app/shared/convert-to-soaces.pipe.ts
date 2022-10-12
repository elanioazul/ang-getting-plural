import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertToSoaces'
})
export class ConvertToSoacesPipe implements PipeTransform {

  transform(value: string, character: string): string {
    return value.replace(character, ' ');
  }

}
