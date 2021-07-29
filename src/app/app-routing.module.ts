import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ReviewListComponent } from './review-list/review-list.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CitiesComponent } from './cities/cities.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {path: '', component: HomePageComponent},
  {path: 'search', component: SearchComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'login', component: LoginComponent},
  {path: 'reviews', component: ReviewListComponent},
  {path: 'feedback', component: FeedbackComponent},
  {path: 'cities', component: CitiesComponent},
  {path: '**', component: HomePageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ReviewListComponent, HomePageComponent,
  FeedbackComponent, CitiesComponent, LoginComponent, RegisterComponent, SearchComponent]
