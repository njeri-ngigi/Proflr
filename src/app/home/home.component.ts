import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.scss']
})

export class HomeComponent {
  userBio = {
    username: 'Jane Doe',
    userbio: 'What did you want to be when you grew up? An actor?\
    An astronaut in training? Perhaps a professional fighter who plays Coachella?\
    Or a fashion designer who holds a land-speed record?\
    Idris Elba became all of the above.',
    usertitle: 'Fashion Designer',
    quoteFrom: 'Our Friends at SquareSpace',
    imageUrl: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=format%2Ccompress&cs=tinysrgb&dpr=2&h=750&w=1260'
  };
}
