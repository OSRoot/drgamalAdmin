import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RichTextComponent } from './rich-text.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [RichTextComponent],
  imports: [
    CommonModule,
    QuillModule
  ],
  exports:[RichTextComponent]
})
export class RichTextModule { }
