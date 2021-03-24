import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayGameRoutingModule } from './play-game-routing.module';
import { PlayGameComponent } from './play-game/play-game.component';
import { SidebarModule } from '../sidebar/sidebar.module';

@NgModule({
  declarations: [PlayGameComponent],
  imports: [
    CommonModule,
    PlayGameRoutingModule,
    SidebarModule,
    ],
})
export class PlayGameModule {

 }
