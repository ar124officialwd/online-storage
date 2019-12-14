import { UploadFileComponent } from './upload-file/upload-file.component';
import { HelpComponent } from './help/help.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { CreateDirectoryComponent } from './create-directory/create-directory.component';
import { OpenMediaComponent } from './open-media/open-media.component';


const routes: Routes = [
  {
    path: 'user-panel',
    component: UserPanelComponent,
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: 'open-media',
    component: OpenMediaComponent
  },

  {
    path: 'create-directories',
    component: CreateDirectoryComponent,
    outlet: 'sidebar',
    data: {
      animation: 'sidebar'
    }
  },

  {
    path: 'upload-files',
    component: UploadFileComponent,
    outlet: 'sidebar',
    data: {
      animation: 'sidebar'
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
