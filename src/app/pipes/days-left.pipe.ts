import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysLeft'
})
export class DaysLeftPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    const now = new Date();
    const dueDate = new Date(value);
    const daysLeft = Math.floor(( dueDate.getTime() - now.getTime() )/24/60/60/1000);
    return daysLeft;
  }

}
