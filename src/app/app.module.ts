import { MatchService } from './services/match.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ServicesComponent } from './components/services/services.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminPlayersComponent } from './components/admin-players/admin-players.component';
import { AdminMatchesComponent } from './components/admin-matches/admin-matches.component';
import { HomeComponent } from './components/home/home.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { BlogComponent } from './components/blog/blog.component';
import { InfoComponent } from './components/info/info.component';
import { MatchesComponent } from './components/matches/matches.component';
import { BannerComponent } from './components/banner/banner.component';
import { TeamsComponent } from './components/teams/teams.component';
import { TeamComponent } from './components/team/team.component';
import { PlayersComponent } from './components/players/players.component';
import { PlayerComponent } from './components/player/player.component';
import { AddPlayerComponent } from './components/add-player/add-player.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { AdminTeamsComponent } from './components/admin-teams/admin-teams.component';
import { PlayerStatusComponent } from './components/player-status/player-status.component';
import { DisplayMatchComponent } from './components/display-match/display-match.component';
import { EditMatchComponent } from './components/edit-match/edit-match.component';
import { AdminUsersComponent } from './components/admin-users/admin-users.component';
import { DisplayUserComponent } from './components/display-user/display-user.component';
import { DisplayArticleComponent } from './components/display-article/display-article.component';
import { ArticleFormComponent } from './components/article-form/article-form.component';
import { AdminArticlesComponent } from './components/admin-articles/admin-articles.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchMatchesComponent } from './components/search-matches/search-matches.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AddTeamComponent } from './components/add-team/add-team.component';
import { WeatherComponent } from './components/weather/weather.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ServicesComponent,
    LoginComponent,
    SignupComponent,
    AddMatchComponent,
    AdminComponent,
    AdminPlayersComponent,
    AdminMatchesComponent,
    HomeComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    InfoComponent,
    MatchesComponent,
    BannerComponent,
    TeamsComponent,
    TeamComponent,
    PlayersComponent,
    PlayerComponent,
    AddPlayerComponent,
    AdminTeamsComponent,
    PlayerStatusComponent,
    DisplayMatchComponent,
    EditMatchComponent,
    AdminUsersComponent,
    DisplayUserComponent,
    DisplayArticleComponent,
    ArticleFormComponent,
    AdminArticlesComponent,
    NotFoundComponent,
    SearchMatchesComponent,
    ProfileComponent,
    AddTeamComponent,
    WeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
