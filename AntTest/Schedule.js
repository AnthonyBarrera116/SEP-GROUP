// Getting teams js


import { useState ,useEffect} from 'react';


// Schedule maker

const axios = require('axios');

export default function Schedule() {
    arrayOfTeams = []
    const [posts, setPosts] = useState([]);
    // Gets teams form teams js
    useEffect(() => {
        axios.get("http://localhost:4000/getallteams")
        .then(response => {
            
            setPosts(response.data);
            
        })
        
        .catch((error) => 
        {

            console.log(error);

        });
    }, []);
    // date real time
    const date = new Date();
    // array with teams matched up
    teamMatchUps = []

    for(x = 0; x < posts.length;x++){

        arrayOfTeams.push(posts[x].TeamName)

    }

    // Setting all matchups with realdate 
    for (a of arrayOfTeams){

        for (b of arrayOfTeams){

            if (a !== b){


                let Sch = 
                {
                    Home: a,
                    Away: b,
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
    console.log(teamMatchUps)
    return teamMatchUps;

    
      
    

}