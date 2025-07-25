/*The collected products are uploaded to the sales page.
The system creates a box for each product*/

import { usePlants } from "./field.js";

export const catalog = (harvestArray) => {
    let catalogHTML = ""

    for (const food of harvestArray) {
        catalogHTML += `<section class="plant">${food.type}</section>`
    }

    document.querySelector(".container").innerHTML = catalogHTML
}