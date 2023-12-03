import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { HomeComponent } from './home/home.component';
import { RecentSearchComponent } from './recent-search/recent-search.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path: 'favourites', component: FavouritesComponent,
  },
  {
    path: 'search', component: SearchComponent,
  },
  {
    path: 'recentSearch', component: RecentSearchComponent,
  },
  {
    path: '', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
