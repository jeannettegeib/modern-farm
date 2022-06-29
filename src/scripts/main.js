import { createPlan } from "./plan.js"
import {createSoybean} from "./seeds/soybean.js"
import { createCorn } from "./seeds/corn.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createWheat } from "./seeds/wheat.js"
import { createPotato } from "./seeds/potato.js"
import { addPlant } from "./field.js"
import { usePlants } from "./field.js"
import { plantSeeds} from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { Catalog } from "./catalog.js"

const yearlyPlan = createPlan();
const soybeanSeed = createSoybean();
const cornSeed = createCorn();
const sunflowerSeed = createSunflower();
const asparagusSeed = createAsparagus();
const wheatSeed = createWheat();
const potatoSeed = createPotato();

//Invoke addPlant() and specify the seed object as the argument.
let plants = addPlant(soybeanSeed);
plants = addPlant(cornSeed);
plants = addPlant(sunflowerSeed);
plants = addPlant(asparagusSeed);
plants = addPlant(wheatSeed);
plants = addPlant(potatoSeed);
plants = usePlants();

console.log("Welcome to the main module")
console.log(yearlyPlan);
console.log(plants);

let crop =plantSeeds(yearlyPlan);
console.log(crop);

let harvestedProduce = harvestPlants(plants);
console.log(harvestedProduce);

const parentHTMLElement=document.querySelector(".container");
parentHTMLElement.innerHTML+=Catalog(harvestedProduce);