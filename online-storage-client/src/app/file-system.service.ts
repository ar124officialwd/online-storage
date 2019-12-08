import { logging } from 'protractor';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as Buffer from 'buffer';
import { Directory } from 'api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileSystemService {
  auth =
  'Basic ' +
  Buffer.Buffer.from(this.cookieService.get('login')).toString('base64');

  constructor(private http: HttpClient, private cookieService: CookieService) {}

  /************************************************************************** */
  // ENTRY LEVEL OPERATIONS
  getEntries(location = null): Observable<any> {
    if (!location) {
      return this.http.get('/fileSystem', {
        headers: {
          Authorization: this.auth
        }
      });
    } else {
      return this.http.get('/fileSystem', {
        headers: {
          Authorization: this.auth,
          'Directory-Location': location
        }
      });
    }
  }

  deleteEntries(locations): Observable<any> {
    // tslint:disable-next-line: deprecation
    return this.http.delete('/fileSystem', {
      headers: {
        Authorization: this.auth,
        locations
      }
    });
  }

  copy(body) {
    return this.http.put('/fileSystem', body, {
      headers: {
        Authorization: this.auth
      }
    });
  }

  /************************************************************************** */
  // DIRECTORY LEVEL OPERATIONS
  createDirectory(body) {
    return this.http.post('/fileSystem', body, {
      headers: {
        Authorization: this.auth,
        'Create-Directory': 'true'
      }
    });
  }

  /************************************************************************** */
  // FILE LEVEL OPERATIONS

  downloadFile(location): Observable<any> {
    return this.http.get('/fileSystem', {
      headers: {
        Authorization: this.auth,
        'File-Location': location
      },
      responseType: 'blob'
    });
  }

  uploadFiles(formData): Observable<any> {
    return this.http.post('/fileSystem', formData, {
      headers: {
        Authorization: this.auth
      }
    });
  }

  /* end file operations */
}
