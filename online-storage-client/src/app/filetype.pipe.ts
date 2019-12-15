import { Pipe, PipeTransform } from '@angular/core';
import { MimeTypesService } from './mime-types.service';

@Pipe({
  name: 'filetype'
})
export class FiletypePipe implements PipeTransform {

  constructor(private mts: MimeTypesService) {}

  transform(value): string {
    if (this.mts.application.includes(value)) {
      return 'App File';
    } else if (this.mts.audio.includes(value)) {
      return 'Audio';
    } else if (this.mts.image.includes(value)) {
      return 'Photo';
    } else if (this.mts.text.includes(value)) {
      return 'Text';
    } else if (this.mts.video.includes(value)) {
      return 'Video';
    }
  }

}
