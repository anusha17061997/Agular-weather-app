import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './home/header/header.component';
import { FooterComponent } from './home/footer/footer.component';
import { MainComponent } from './home/main/main.component';
import { SideNavComponent } from './home/side-nav/side-nav.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { FheaderComponent } from './favourites/fheader/fheader.component';
import { PopupComponent } from './shared/popup/popup.component';
import { SearchComponent } from './search/search.component';
import { SheaderComponent } from './search/sheader/sheader.component';
import { FormsModule } from '@angular/forms';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { RsHeaderComponent } from './recent-search/rs-header/rs-header.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    SideNavComponent,
    FavouritesComponent,
    FheaderComponent,
    PopupComponent,
    SearchComponent,
    SheaderComponent,
    RecentSearchComponent,
    RsHeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
