import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LanguageComponent } from './language/language.component';
import { SupportComponent } from './support/support.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { UpdatePasswordComponent } from './update-password/update-password.component';
import { SettingComponent } from './setting/setting.component';



@NgModule({
  declarations: [
    LanguageComponent,
    SupportComponent,
    PrivacyPolicyComponent,
    UpdatePasswordComponent,
    SettingComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SettingModule { }
