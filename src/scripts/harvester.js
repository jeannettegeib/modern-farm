export const harvestPlants =(plantsArray)=>{
    let produce = [];
    for (const eachPlant of plantsArray){
        let count = eachPlant.output
        if (eachPlant.type){
        for (let i = 0; i < count; i++) {
        produce.push(eachPlant)
        }
    }
        else {
            for (let i = 0; i < eachPlant[0].output; i++) {
            produce.push(eachPlant[0])
            }
    }
}
    return produce
}