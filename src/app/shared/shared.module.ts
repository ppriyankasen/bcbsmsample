import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SafeHtmlPipe } from './pipes/safehtml.pipe';

@NgModule({
  declarations: [
    SafeHtmlPipe
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    IonicModule,
    RouterModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    SafeHtmlPipe
  ],
  providers: [
  ]
})
export class SharedModule {}
