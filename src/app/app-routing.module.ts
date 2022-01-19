import { WeatherComponent } from './components/weather/weather.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { ProfileComponent } from './components/profile/profile.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { PlayersComponent } from './components/players/players.component';
import { TeamsComponent } from './components/teams/teams.component';
import { MatchesComponent } from './components/matches/matches.component';
import { HomeComponent } from './components/home/home.component';
import { AdminComponent } from './components/admin/admin.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { ServicesComponent } from './components/services/services.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';


const routes: Routes = [
  {path: '', component:HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:SignupComponent},
  {path: 'signupAdmin', component:SignupComponent},
  {path: 'addMatch', component: AddMatchComponent},
  {path: 'addPlayer', component: AddPlayerComponent},
  {path: 'editPlayer/:id', component: AddPlayerComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'matches', component: MatchesComponent},
  {path: 'teams', component: TeamsComponent},
  {path: 'players', component: PlayersComponent},
  {path: 'status', component: PlayerStatusComponent},
  {path: 'displayMatch/:id', component: DisplayMatchComponent},
  {path: 'editMatch/:id', component: EditMatchComponent},
  {path: 'displayUser/:id', component: DisplayUserComponent},
  {path: 'addArticle', component: ArticleFormComponent},
  {path: 'editArticle/:id', component: ArticleFormComponent},
  {path: 'displayArticle/:id', component: DisplayArticleComponent},
  {path: 'search', component: SearchMatchesComponent},
  {path: 'profile/:id', component: ProfileComponent},
  {path: 'addTeam', component: AddTeamComponent},
  {path: 'weather', component: WeatherComponent},
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
