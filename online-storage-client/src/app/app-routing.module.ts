import { UploadFileComponent } from './upload-file/upload-file.component';
import { HelpComponent } from './help/help.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { UserEntryComponent } from './user-entry/user-entry.component';
import { CreateDirectoryComponent } from './create-directory/create-directory.component';


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
    path: 'sidebar',
    component: SidebarComponent,
    outlet: 'sidebar',
    data: {
      animation: 'sidebar'
    }
  },
  {
    path: '',
    component: HelpComponent,
    outlet: 'sidebar',
    data: {
      animation: 'sidebar'
    }
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
