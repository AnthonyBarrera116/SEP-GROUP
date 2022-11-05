
 teams =["A","B","C","D","E","F","G","H","I","J","K","L","M"]


 export default function teams() {

    // Not done but sending team info to mongo
    for (t of teams){

        axios.post("http://localhost:4000/maketeam", t)

    }
    
    // returns const teams
    return (
         

        teams
         
         
    );

 }