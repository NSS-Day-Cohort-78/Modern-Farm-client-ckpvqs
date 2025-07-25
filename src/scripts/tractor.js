//According to the Plan, the right seeds are planted in the right cells.
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant } from "./field.js"



export const plantSeeds = (plan) => {
        for (const row of plan) {
                    for (const crop of row) {
                                    if (crop === "Asparagus") {
                                       const seed = createAsparagus()
                                       addPlant(seed)
                                     }
                                    if (crop === "Wheat") {
                                        const seed = createWheat()
                                        addPlant(seed)
                                    }
                                    if (crop === "Potato") {
                                        const seed = createPotato()
                                        addPlant(seed)
                                    }
                                    if (crop === "Soybean") {
                                        const seed = createSoybean()
                                        addPlant(seed)
                                    }
                                    if (crop === "Sunflower") {
                                        const seed = createSunflower()
                                        addPlant(seed)
                                    }
                                    if (crop === "Corn") {
                                        const seed = createCorn()
                                        addPlant(seed)
                                    }


                         }

             }
}
