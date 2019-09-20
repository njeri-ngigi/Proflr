import { Component, Input } from '@angular/core';

import { IUserBio } from '../../models/user.model';

@Component({
  selector: 'app-welcome',
  templateUrl: 'welcome.component.html',
  styleUrls: ['welcome.component.scss']
})

export class WelcomeComponent {
  @Input() userBio: IUserBio;
}
