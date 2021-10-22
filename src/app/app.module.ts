import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Http Client
import { HttpClientModule } from '@angular/common/http';

// Material Theme
import { MaterialModule } from './materialTheme/material-module'

// Custom Pipes
import { PopulateCategoriesPipe } from './pipes/populate-category-pipe';
import { filterCategoryPipe } from './pipes/game-category-filter-pipe';
import { JackpotFilterPipe } from './pipes/jackpot-filter-pipe';


// Components
import { AppComponent } from './app.component';
import { GameComponent } from './games/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GamehoverDirective } from './directives/gamehover.directive';


@NgModule({
  declarations: [
    AppComponent,
    PopulateCategoriesPipe,
    filterCategoryPipe,
    JackpotFilterPipe,
    GameComponent,
    GamehoverDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
