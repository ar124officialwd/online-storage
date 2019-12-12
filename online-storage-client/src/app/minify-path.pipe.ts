import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'minifyPath'
})
export class MinifyPathPipe implements PipeTransform {

  transform(value: string, maxlength): string {
    let path;
    const pathParts = value.split('/');
    // tslint:disable-next-line: prefer-for-of
    for (let i = 0; i < pathParts.length; i++) {
      if (pathParts.join('/').length < maxlength) {
        break;
      }

      pathParts[i] = '..';
    }

    path = pathParts.join('/');
    if (path.length > maxlength) {
      path = path.slice(0, maxlength - 3) + '...';
    }

    return path;
  }

}
