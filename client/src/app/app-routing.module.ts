import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GuildsComponent } from './guilds/guilds.component';
import { GuildComponent } from './guild/guild.component';
import { NewGuildComponent } from './new-guild/new-guild.component';
import { EditGuildComponent } from './edit-guild/edit-guild.component';
import { NewNinjaComponent } from './new-ninja/new-ninja.component';
import { EditNinjaComponent } from './edit-ninja/edit-ninja.component';

const routes: Routes = [
  {path: "guilds", component: GuildsComponent},
  {path: "guilds/:id", component: GuildComponent},
  {path: "guilds/new", component: NewGuildComponent},
  {path: "guilds/edit/:id", component: EditGuildComponent},
  {path: "guilds/new", component: NewNinjaComponent},
  {path: "guilds/edit/:id", component: EditNinjaComponent},
  {path: "", redirectTo: "" },
  {path: "*", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
