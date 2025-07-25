const field = []

export const addPlant = (seed) => {
    if (Array.isArray(seed)) {
        for (const s of seed) {
            field.push(s)
        }
    } else {
        field.push(seed)
    }
}

export const usePlants = () => {
    const fieldCopy = structuredClone(field)
    return fieldCopy
}