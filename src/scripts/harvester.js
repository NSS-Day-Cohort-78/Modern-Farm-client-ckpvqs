/*The plants have grown → Now we're harvesting the products.
The system adds products equal to the output value of each plant.*/

export const harvestPlants = (plantsArray) => {
    const harvested = []

    for (const plant of plantsArray) {
        let quantity = plant.output

        // If the plant is Corn, we only harvest half the output -NSS instructions to us
        if (plant.type === "Corn") {
            quantity = quantity / 2
        }

        // Add one harvested item per output count
        for (let i = 0; i < quantity; i++) {
            harvested.push(plant)
        }
    }

    return harvested
}
