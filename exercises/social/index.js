var surfingGroup = {
    name: "Surfers",
    yearsActive: 17,
    meetingSpots: ['hawaii, california, florida'],
    slogan: function(){
        console.log(this.name + " surf turf!");
    },
    
    chairMembers: [
        {
            name: "Jack",
            age: 43,
            yearsActive: 17,
            status: "pro",
            favoriteSpot: "Hawaii"
        },        
        {
            name: "Jill",
            age: 34,
            yearsActive: 13,
            status: "pro",
            favoriteSpot: "Hawaii"           
        }
    ], 
    members: [
        {
            name: "Jane",
            age: 27,
            yearsActive: 4,
            status: "rookie",
            favoriteSpot: {
                california: [
                    "Mission Beach",
                    "Venice Beach",                   
                ]          
            }
        },
        {
            name: "Tak",
            age: 23,
            yearsActive: 1,
            status: "rookie",
            favoriteSpot: "Florida"
        }       
    ]
};
//add object properties and array items
surfingGroup.members[0].favoriteSpot.california.push("Pacific Beach", "Santa Monica");
surfingGroup.hours = "9 to 5";
surfingGroup.status = "active";