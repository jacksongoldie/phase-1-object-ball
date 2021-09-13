//define game object
function gameObject() {
    return ({
        home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
            "Alan Anderson":{
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            },
            "Reggie Evans":{
                number: 30,
                shoe: 14,
                points: 12,
                rebounds: 12,
                assists: 12,
                steals: 12,
                blocks: 12,
                slamDunks: 7,
            },
            "Brook Lopez":{
                number: 11,
                shoe: 17,
                points: 17,
                rebounds: 19,
                assists: 10,
                steals: 3,
                blocks: 1,
                slamDunks: 15,
            },
            "Mason Plumlee":{
                number: 1,
                shoe: 19,
                points: 26,
                rebounds: 12,
                assists: 6,
                steals: 3,
                blocks: 8,
                slamDunks: 5,
            },
            "Jason Terry": {
                number: 31,
                shoe: 15,
                points: 19,
                rebounds: 2,
                assists: 2,
                steals: 4,
                blocks: 11,
                slamDunks: 1,
            },
        }
    },

    away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"] ,
        players: {
            "Jeff Adrien": {
                number: 4,
                shoe: 18,
                points: 10,
                rebounds: 1,
                assists: 1,
                steals: 2,
                blocks: 7,
                slamDunks: 2
            },
            "Bismak Biyombo": {
                number: 0,
                shoe: 16,
                points: 12,
                rebounds: 4,
                assists: 7,
                steals: 7,
                blocks: 15,
                slamDunks: 10
            },
            "DeSagna Diop": {
                number: 2,
                shoe: 14,
                points: 24,
                rebounds: 12,
                assists: 12,
                steals: 4,
                blocks: 5,
                slamDunks: 5
            },
            "Ben Gordon": {
                number: 8,
                shoe: 15,
                points: 33,
                rebounds: 3,
                assists: 2,
                steals: 1,
                blocks: 1,
                slamDunks: 0
            },
            "Bredan Haywood": {
                number: 33,
                shoe: 15,
                points: 6,
                rebounds: 12,
                assists: 12,
                steals: 22,
                blocks: 5,
                slamDunks: 12
            },
        }
    }})
};

//function that takes in arg of players name and returns points
//COULD/SHOULD WRITE W BOOLEAN
function numPointsScored(name){
    //get home or away team??
    const homePlayers = gameObject().home.players;
    const awayPlayers = gameObject().away.players;
    const allPlayers = {...homePlayers, ...awayPlayers};

    //console.log(allPlayers);
    ////---PARTIAL IDEA THAT DIDN'T WORK --->mainObject += {...gameObject().away};
    //return allPlayers.players[`${name}`].points;
    return "Points Scored: " + allPlayers[`${name}`].points;
}

//function shoeSize - takes in players name and returns shoe size
function shoesize(name){
    const homePlayers = gameObject().home.players;
    const awayPlayers = gameObject().away.players;
    const allPlayers = {...homePlayers, ...awayPlayers};
    return "Shoe size: " + allPlayers[`${name}`].shoe;
}

//teamColors, takes team name and returns color array
function teamColors(teamNameString){
    //debugger;
    if(gameObject().home.teamName !== teamNameString){
        return gameObject().away.colors;
    }
    else{
        return gameObject().home.colors;
    }
}

//teamNames - OPERATES ON game object to return an array of the team names
function teamNames(){
    let arrayOfTeamNames = [];
    arrayOfTeamNames = [gameObject().home.teamName, gameObject().away.teamName];
    return arrayOfTeamNames;
}

/*/playerNames - takes in team name and returns an array of jersey number's for that team
function playerNumbers (teamName){
    //home team iterate?
    if(teamName === gameObject().home.teamName){
    //return home team jersey number array
    let objectOfHomeTeamPlayerStats = {};
    objectOfHomeTeamPlayerStats = {...gameObject().home.players};
    
    console.log(objectOfHomeTeamPlayerStats);
    //for in to iterate over players and return jersey numbers 
    //LEFT OFF HERE - NEED X BELOW TO RETURN THE NAME AS A KEY AND THE STATS??
    for(const x in objectOfHomeTeamPlayerStats){
        //SHALLOW OBJECT COPY AND CAN'T GET NUMBER??
        const arrayOfHomeTeamJerseys = [];
        arrayOfHomeTeamJerseys = [...arrayOfHomeTeamJerseys, (objectOfHomeTeamPlayerStats[x].number)]  
        console.log(arrayOfHomeTeamJerseys)
        //debugger;
        // let arrayOfHomeTeamJerseys = [];
        arrayOfHomeTeamJerseys += [objectOfHomeTeamPlayerStats][x].number; 
    }
    }
    else{
        console.log("else");
    }
    return arrayOfHomeTeamJerseys;
}*/

//playerStats - takes in player name and returns object of stats
function playerStats (playerName){
    const fullObjectOfPlayers = {...gameObject().home.players, ...gameObject().away.players}
    return fullObjectOfPlayers[playerName];
}

//playerNames - takes in team name and returns an array of jersey number's for that team
function playerNumbersRevisited(teamName){
    const homeObjectOfPlayers = {...gameObject().home.players};
    const awayObjectOfPlayers = {...gameObject().away.players};
    const arrayOfTeamJerseys = [];
    if (teamName === gameObject().home.teamName){
        for(const name in homeObjectOfPlayers){
            //debugger;
            arrayOfTeamJerseys.push(homeObjectOfPlayers[name]['number']);
        }
    }
    else {
        for(const name in awayObjectOfPlayers){
            //debugger;
            arrayOfTeamJerseys.push(awayObjectOfPlayers[name]['number']);
        }
    }
    return arrayOfTeamJerseys;
}

//bigShoeRebounds - return number of rebounds associated w/ player with the largest shoe size;
//find the player w the largest shoe size
//return player's rebound number
function bigShoeRebounds(){
    //debugger;
    const fullObjectOfPlayers = {...gameObject().home.players, ...gameObject().away.players};
    //gameobject>away and home>players //players>shoe
    // look at each value indivually and keep the largest, then keep looping, return largest key and value
    let biggestShoeSize = 0;
    for(const name in fullObjectOfPlayers) {
        if (fullObjectOfPlayers[name].shoe > biggestShoeSize){
            biggestShoeSize = fullObjectOfPlayers[name].shoe;
            //console.log(biggestShoeSize);
        }  
    };
    for(const name in fullObjectOfPlayers){
        if(biggestShoeSize === fullObjectOfPlayers[name].shoe){
          return fullObjectOfPlayers[name].rebounds;
         }
    }
};