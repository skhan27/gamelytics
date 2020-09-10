import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const FAKE_GAME_OBJ = {
  title: 'Sekiro: Shadows Die Twice',
  description: `Sekiro: Shadows Die Twice is an action-adventure video game developed by FromSoftware and published by Activision. The game follows a shinobi known as Wolf as he attempts to take revenge on a samurai clan who attacked him and kidnapped his lord. It was released for Microsoft Windows, PlayStation 4, and Xbox One in March 2019, and will be released for Stadia in October 2020.

  Gameplay is focused on stealth, exploration, and combat, with a particular emphasis on boss battles. The game takes place in a fictionalized Japan set during the Sengoku period, and makes strong references to Buddhist mythology and philosophy. While creating the game, lead director Hidetaka Miyazaki wanted to create a new intellectual property (IP) that marked a departure from the Souls series of games also made by FromSoftware, and looked to series such as The Mysterious Murasame Castle and Tenchu for inspiration.
  
  Sekiro received universal acclaim from critics, who compared and contrasted it to the Souls games. Praise was directed toward its gameplay and setting, although opinions on its high level of difficulty were more mixed. It was also nominated for and won several awards, including for game of the year. The game sold over five million copies by July 2020.`
};
@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.scss']
})
export class GameDetailsComponent {
  public game$ = new BehaviorSubject(FAKE_GAME_OBJ);
  constructor() {}
}
