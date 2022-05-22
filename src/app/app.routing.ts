import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContentsComponent } from './contents/contents.component';
import { MateriaComponent } from './materia/materia.component';
import { VisaomateriaComponent } from './visaomateria/visaomateria.component';
import { ContentsUploadComponent } from './contents-upload/contents-upload.component';
import { ContentsDeleteComponent } from './contents-delete/contents-delete.component';
import { LoginComponent } from './login/login.component';
import { AuthGuardService } from './services/auth-guard.service';
import { RoleGuardService } from './services/role-guard.service';

const APP_ROUTES: Routes = [
        {path: 'materia', component: MateriaComponent, canActivate: [RoleGuardService], data: { expectedRole: 'cordenador' }},
        {path: 'visaomateria/:id/:nome', component: VisaomateriaComponent, canActivate: [AuthGuardService]},
        {path: 'contents/:id/:nome', component: ContentsComponent, canActivate: [AuthGuardService]},
        {path: 'contents-upload/:id/:key', component: ContentsUploadComponent, canActivate: [RoleGuardService], data: { expectedRole: 'professor' }},
        {path: 'contents-delete/:id/:nome', component: ContentsDeleteComponent, canActivate: [RoleGuardService], data: { expectedRole: 'professor' }},
        {path: 'home', component: HomeComponent, canActivate: [AuthGuardService]},
        {path: 'login', component: LoginComponent},
        {path: '', component: LoginComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);