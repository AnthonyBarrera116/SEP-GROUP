// Getting teams js
import Teams, {GetTeams}from "./teams";
import  Text from 'react-native';


// Schedule maker


export default function Schedule() {

    
    Teams.call(GetTeams())

    // Gets teams form teams js
    arrayOfTeams = GetTeams()

    // date real time
    const date = new Date();
    // array with teams matched up
    teamMatchUps = []

    // Setting all matchups with realdate 
    for (a of arrayOfTeams){

        for (b of arrayOfTeams){

            if (a.team !== b.team){


                let Sch = 
                {
                    Home: a.team,
                    Away: b.team,
                    Date: {Day: date.getDate(), Month: date.getMonth(), Year: date.getFullYear()}
                };

                teamMatchUps.push(Sch)

            }
        }

    }

    // checks dates and makes sure no team is playing twice on the same day also updates year and month if needed
    for (k = 0;k < teamMatchUps.length;k++){

        for (i = 0;i < teamMatchUps.length;i++){

            if(teamMatchUps[k].Home ==teamMatchUps[i].Home && teamMatchUps[k].Away == teamMatchUps[i].Away  ){

                continue

            }
                
            else if ((teamMatchUps[k].Home == teamMatchUps[i].Away ) || (teamMatchUps[k].Away == teamMatchUps[i].Home) || (teamMatchUps[k].Home == teamMatchUps[i].Home) || (teamMatchUps[k].Away == teamMatchUps[i].Away )){

                if ((teamMatchUps[i].Date.Day == teamMatchUps[k].Date.Day)&&(teamMatchUps[i].Date.Month == teamMatchUps[k].Date.Month)&&(teamMatchUps[i].Date.Year == teamMatchUps[k].Date.Year)){

                    
                
                    teamMatchUps[i].Date.Day = (teamMatchUps[i].Date.Day + 1 )
                    
                    checkingNewMonth = new Date(teamMatchUps[i].Date.Year, teamMatchUps[i].Date.Month + 1, 0)


                    if (teamMatchUps[i].Date.Day > checkingNewMonth.getDate()){

                        
                        teamMatchUps[i].Date.Day = teamMatchUps[i].Date.Day- checkingNewMonth.getDate()
                        teamMatchUps[i].Date.Month = teamMatchUps[i].Date.Month + 1

                        if (teamMatchUps[i].Date.Month > 12){

                        
                            teamMatchUps[i].Date.Month= teamMatchUps[i].Date.Month - 12
                            teamMatchUps[i].Date.Year = teamMatchUps[i].Date.Year + 1
    
                        }

                    }

                    i = 0
                    k = 0

                }

            }
                
        }
    }

    return (teamMatchUps);

    
      
    

}