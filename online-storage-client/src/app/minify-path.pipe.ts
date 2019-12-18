import { Pipe, PipeTransform } from '@angular/core';
import * as Path from 'path';

@Pipe({
  name: 'minifyPath'
})
export class MinifyPathPipe implements PipeTransform {

  transform(value: string, maxlength): string {
    let path;
    const pathParts = value.split(Path.sep);
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < pathParts.length - 1; i++) {
      if (pathParts.join(Path.sep).length < maxlength) {
        break;
      }

      pathParts[i] = '..';
    }

    path = pathParts.join(Path.sep);
    return path;
  }

}
