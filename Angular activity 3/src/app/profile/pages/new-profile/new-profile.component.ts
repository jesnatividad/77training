import { Component } from '@angular/core';

import { Profile } from '../../model/profile';

@Component({
  selector: 'app-new-profile',
  templateUrl: './new-profile.component.html',
  styleUrls: ['./new-profile.component.css']
})
export class NewProfileComponent {
  newProfile: Profile = new Profile("","","",false);

  saveProfile = () => {
    alert('Dummy save->' + JSON.stringify(this.newProfile));
  }

  resetProfile = () => {
    this.newProfile.name = "";
    this.newProfile.bio = "";
    this.newProfile.email = "";
    this.newProfile.active = false;
  }
}
