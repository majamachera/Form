import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class CustomPipePipe implements PipeTransform {

  transform(text: string, howMuchLetters: number): string {

    if (text.length > howMuchLetters) {
      let formatText: string = text.substring(0, howMuchLetters).trim() + "...";
      return formatText;
    }
    return text;
  }

}
