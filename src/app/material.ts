import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatCardModule} from '@angular/material/card';
import { NgModule } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule, MatInputModule, MatListModule, MatIconModule, MatSidenavModule],
  exports: [MatButtonModule, MatCheckboxModule, MatCardModule, MatGridListModule, MatToolbarModule, MatInputModule, MatListModule, MatIconModule, MatSidenavModule],
})
export class MaterialModule { }
