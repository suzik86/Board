import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any[], criterion:string): any[] {
    return criterion
    ? value.filter((item: {taskName:string}) => item.taskName.startsWith(criterion))
    : value;
  }

}
