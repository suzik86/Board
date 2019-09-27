import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { BoardComponent } from './components/board/board.component';
import { CardListComponent } from './components/card-list/card-list.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    ToolbarComponent,
    BoardComponent,
    CardListComponent,
    CardItemComponent,
    FilterPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
