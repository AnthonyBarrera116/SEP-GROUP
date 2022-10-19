export class UserController
{

    constructor()
    {}

    saveUser(user)
    {
        console.log("i\'m running this from the controller!");
        console.log(JSON.stringify(user));
    }

}