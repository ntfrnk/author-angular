import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

// Components
import { CardComponent } from './_partials/card/card.component';
import { CardNewComponent } from './_partials/card-new/card-new.component';
import { CardEmptyComponent } from './_partials/card-empty/card-empty.component';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    CardComponent,
    CardNewComponent,
    CardEmptyComponent,
    HeaderComponent,
    FooterComponent,
  ],
  exports: [
    CardComponent,
    CardNewComponent,
    CardEmptyComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ]
})
export class ComponentsModule { }
