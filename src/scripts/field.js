//This array will store all of the plants that are growing in the field.
let plantsInField = [];

//define and export a function named addPlant which must accept a seed object as input. The function will add the seed to the field.
export const addPlant=(seedObject)=>{
    plantsInField.push(seedObject)
}

// return a copy of the array of plants.
export const usePlants=()=>{
    return plantsInField.map(param=>({...param}))
}
