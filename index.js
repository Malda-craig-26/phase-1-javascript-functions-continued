// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}

const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
};

    

function mondayWorkFromHome(activity = "work from home"){
    return `This Monday, I will ${activity}.`;
}
function wrapAdjective(flair = "*") {
    return function(adjective = "special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

// Example Calls
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("amazing")); // "You are !!!amazing!!!"

const defaultFlairFunction = wrapAdjective(); 
console.log(defaultFlairFunction()); // "You are *special*!"
wrapAdjective("%")("a dedicated programmer");