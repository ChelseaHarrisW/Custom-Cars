// this module will be hold comp. functions for the end structure of the page ref. kneel diamond mod

import { Interiors } from "./interior.js"
import { Orders } from "./order.js"
import { Paints } from "./paint.js"
import { Technologies } from "./technologies.js"
import { Wheels } from "./wheels.js"
import { addCustomOrder } from "./database.js"



document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addCustomOrder()
        }
    }
)
// wrap in div for easy rows
export const carBuilder = () => {
    return `
        <h1>Chelsea's Car Emporium</h1>
        <h2> Where Cute meets Custom </h2>

        <div> <article class="choices">
            <section class="choices__metals options">
                <h2>Paint</h2>
                ${Paints()}
            </section> </div>
            <div> <section class="choices__interior options">
                <h2>Interior</h2>
                ${Interiors()}
            </section> </div>
            <div><section class="choices__wheels options">
                <h2>Wheels</h2>
                ${Wheels()}
            </section> </div>
            </section> </div>
            <div><section class="choices__Technologies options">
                <h2>Technologies</h2>
                ${Technologies()}
            </section> </div>
        </article>

        <article>
            <button id="orderButton">Place Car Order</button>
        </article>

        <article class="customOrders">
            <h2>Custom Car Orders</h2>
            ${Orders()}
        </article>
        
    ` //prices can be added here!! once function works
}