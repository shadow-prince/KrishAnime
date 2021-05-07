import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'episodes'
})
export class EpisodesPipe implements PipeTransform {
  transform(value: number): number[] {
    let res = [];
    for (let i = 1; i <= value; i++) {
      res.push(i);
    }
    return res;
  }

}
