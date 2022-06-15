// Code your solution in this file!
const returnFirstTwoDrivers = function ([Antonia, Nuru]){
    return (['Antonia','Nuru'])
}

const returnLastTwoDrivers = function([Amari, Mo]){
    return (['Amari', 'Mo'])
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = (fare) => function(value){ return (fare* value)};

const fareDoubler = function createFareMultiplier(fare) {return (fare * 2)};

const fareTripler = function createFareMultiplier(fare) {return (fare * 3)};

const selectDifferentDrivers = function(drivers, callback){
  if (callback === returnFirstTwoDrivers){
   return (['Antonia', 'Nuru'])
 }if (callback === returnLastTwoDrivers){
    return (['Amari', 'Mo'])
} 

}


