import {createSoybean} from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"

let plant = [];
export const plantSeeds=(thisYearsPlan) =>{
    for (const eachRow of thisYearsPlan){
        for (const eachFood of eachRow){
            
            if (eachFood ==="Asparagus"){
                const asparagusSeed = createAsparagus();
                plant.push(asparagusSeed)
            }
            if (eachFood ==="Potato"){
                const potatoSeed = createPotato();
                plant.push(potatoSeed)
            } 
            if (eachFood==="Soybean"){
                const soybeanSeed = createSoybean();
                plant.push(soybeanSeed)
            }
            if (eachFood==="Sunflower"){
                const sunflowerSeed = createSunflower();
                plant.push(sunflowerSeed)
            }
            if (eachFood==="Wheat"){
                const wheatSeed = createWheat();
                plant.push(wheatSeed)
            }
            if (eachFood==="Corn"){
                const cornSeed = createCorn();
                plant.push(cornSeed)
            }
            
        }
    }
    return plant
}

