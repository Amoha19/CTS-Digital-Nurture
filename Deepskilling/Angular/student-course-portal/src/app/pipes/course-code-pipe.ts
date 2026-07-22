import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'courseCode',
  standalone: true
})
export class CourseCodePipe implements PipeTransform {

  transform(value: string): string {
    return value.toUpperCase();
  }

}