import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GuildsComponent } from './guilds/guilds.component';
import { NewGuildComponent } from './new-guild/new-guild.component';
import { EditGuildComponent } from './edit-guild/edit-guild.component';
import { GuildComponent } from './guild/guild.component';
import { NewNinjaComponent } from './new-ninja/new-ninja.component';
import { EditNinjaComponent } from './edit-ninja/edit-ninja.component';

@NgModule({
  declarations: [
    AppComponent,
    GuildsComponent,
    NewGuildComponent,
    EditGuildComponent,
    GuildComponent,
    NewNinjaComponent,
    EditNinjaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
