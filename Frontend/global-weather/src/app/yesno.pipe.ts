import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'yesNo' ,
  standalone:true
})
export class YesNoPipe implements PipeTransform {
  transform(value: number): string {
    return value === 1 ? 'Yes' : 'No';
  }
}
