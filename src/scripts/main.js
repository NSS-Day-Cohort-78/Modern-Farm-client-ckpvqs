import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"
import { usePlants } from "./field.js"
import { catalog } from "./catalog.js"
import { harvestPlants } from "./harvester.js"

const yearlyPlan = createPlan()
plantSeeds(yearlyPlan)

const plantsInField = usePlants()
const harvestedCrops = harvestPlants(plantsInField)

console.log("Harvested crops:", harvestedCrops)

catalog(harvestedCrops)

