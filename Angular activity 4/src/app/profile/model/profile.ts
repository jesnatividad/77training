import { ProfileInterface } from "./profile.interface";

export class Profile implements ProfileInterface {
    name: string;
    email: string;
    bio: string;
    active: boolean;

    constructor(name: string, email: string, bio: string, active: boolean){
        this.name = name;
        this.email = email;
        this.bio = bio;
        this.active = active;
    }
}
