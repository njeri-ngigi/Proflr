import { Component, Input } from '@angular/core';
import { IUserBio } from 'src/app/models/user.model';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.scss']
})

export class BioComponent {
  @Input() userBio: IUserBio;
}
