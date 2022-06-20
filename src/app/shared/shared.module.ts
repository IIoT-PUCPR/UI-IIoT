import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    MatTableModule,
    MatCardModule
  ],
  exports: [
    MatIconModule,
    HeaderComponent,
    MatTableModule,
    MatCardModule
  ]
})
export class SharedModule { }
