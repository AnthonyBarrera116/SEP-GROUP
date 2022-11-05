// Getting teams js
import t from "./teams"

teams =["A","B","C","D","E","F","G","H","I","J","K","L","M"]


// Schedule maker
export default function Schedule() {

    // Gets teams form teams js
    arrayOfTeams = t

    // date real time
    const date = new Date();
    // array with teams matched up
    teamVSTwice = []

    // Games by date Calander
    allGames = []

    // counter for checking and fixing dates
    game_date = 0

    // Setting all matchups with realdate 
    for (a of arrayOfTeams){

        for (b of arrayOfTeams){

            if (a !== b){

                teamVSTwice.push([a,b,date.getDay() + " / " + date.getMonth() + " / " + date.getFullYear()])

            }
        }

    }


    // goes through and removes all duplicate when setting up and sets date in three seprate spots in array
    for (const elem of arrayOfTeams){

        for (i = 0;i < teamVSTwice.length;i++){

            if(teamVSTwice[i][0] == elem || teamVSTwice[i][1] == elem){

                teamVSTwice[i][2] = (date.getDay() + game_date)

                teamVSTwice[i][3] = (date.getMonth())

                teamVSTwice[i][4] = (date.getFullYear())
                
                game_date += 1
                
                allGames.push(teamVSTwice[i])
                teamVSTwice.splice(i, 1)

            }
            

        }
        game_date = 0

    }

    // checks dates and makes sure no team is playing twice on the same day also updates year and month if needed
    for (k = 0;k < allGames.length;k++){

        for (i = 0;i < allGames.length;i++){

            if(allGames[k][0] ==allGames[i][0] && allGames[k][1] == allGames[i][1] ){

                continue

            }
                
            else if ((allGames[k][0] == allGames[i][1]) || (allGames[k][1] == allGames[i][0] ) || (allGames[k][0] == allGames[i][0]) || (allGames[k][1] == allGames[i][1])){

                if (allGames[i][2] == allGames[k][2]){

                    
                
                    allGames[i][2] = (allGames[i][2] + arrayOfTeams.length + date.getDay() )
                    
                    checkingNewMonth = new Date(allGames[i][4], allGames[i][3] + 1, 0)


                    if (allGames[i][2] > checkingNewMonth.getDate()){

                        
                        allGames[i][2] = ( allGames[i][2] - checkingNewMonth.getDate())
                        allGames[i][3] = allGames[i][3] + 1

                        if (allGames[i][3] > 12){

                        
                            allGames[i][3] = (allGames[i][3] - 12 )
                            allGames[i][4] = allGames[i][4] + 1
    
                        }

                    }

                    i =0
                }
                
            }
                
        }

    }

    return allGames;

}