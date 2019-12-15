import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CookieService } from 'ngx-cookie-service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { CreateDirectoryComponent } from './create-directory/create-directory.component';
import { To4PrecisionPipe } from './to4-precision.pipe';
import { UploadFileComponent } from './upload-file/upload-file.component';
import { MinifyPathPipe } from './minify-path.pipe';
import { OpenMediaComponent } from './open-media/open-media.component';
import { FileComponent } from './file/file.component';
import { DirectoryComponent } from './directory/directory.component';
import { HelpComponent } from './help/help.component';
import { FiletypePipe } from './filetype.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    UserPanelComponent,
    UserEntryComponent,
    CreateDirectoryComponent,
    To4PrecisionPipe,
    UploadFileComponent,
    MinifyPathPipe,
    OpenMediaComponent,
    FileComponent,
    DirectoryComponent,
    HelpComponent,
    FiletypePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
