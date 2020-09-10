import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { GameDetailsComponent } from './game-details/game-details.component';

const routes: Routes = [
  { path: 'landing', component: LandingComponent },
  { path: 'game-details', component: GameDetailsComponent },
  { path: '**', component: LandingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
