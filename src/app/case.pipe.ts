import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'case'
})
export class CasePipe implements PipeTransform {

  transform(value: String): any{
    return value.toUpperCase();
  }

}
