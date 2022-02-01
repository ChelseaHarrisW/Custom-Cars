import { getOrders, getPaints, getInteriors, getWheels, getTechnologies } from "./database.js"

const interiors = getInteriors()
const paints = getPaints() // we do this to keep the page from rerendering the html. Google rendering, and rerendering this prevents 404 errors
const wheels = getWheels()
const technology = getTechnologies()

const buildOrderListItem = (order) => { //this function
    //needed here to access though the fx
    // we dont need to write out a ull function here because the scope is the same here. paints represents an array
    // when putting things into the mod withour wrapping you will load so many thing imediately hence 404 errors.
    // use existing function to hold the items
    // Remember that the function you pass to find() must return true/false
    const foundPaint = paints.find( //setting found paint = to the return of the fx below

        (paint) => {
            // . find replaces the loop so the following code id not needed atm: const (paint of paints)

            return paint.id === order.paintId // reffering to the set functions in the custom orrders array
        }
    )

    const foundInterior = interiors.find( //setting found paint = to the return of the fx below

        (interior) => {
            // . find replaces the loop so the following code id not needed atm: const (paint of paints)

            return interior.id === order.interiorId // reffering to the set functions in the custom orrders array
        } //remimber this returns an obj where line 26 is true
    )
    const foundWheels = wheels.find( //setting found paint = to the return of the fx below

        (wheel) => {
            // . find replaces the loop so the following code id not needed atm: const (paint of paints)

            return wheel.id === order.wheelsId // reffering to the set functions in the custom orrders array
        } //remimber this returns an obj where line 26 is true
    )
    const foundTechnology = technology.find( //setting found paint = to the return of the fx below

        (technology) => {
            // . find replaces the loop so the following code id not needed atm: const (paint of paints)

            return technology.id === order.technologyId // reffering to the set functions in the custom orrders array
        } //remimber this returns an obj where line 26 is true
    )
    const totalCost = foundPaint.price + foundInterior.price + foundWheels.price + foundTechnology.price // use debugger on next line because we want to inspect this line.
    // accessing price valur to get total cost

    // to get the tru total price then we need to add all the componennts together
    const costString = totalCost.toLocaleString("en-US", { // takes the total cost and formats it with dollar sighn to rep USD
        interior: "currency",
        currency: "USD"
    })
    return `<li>
    Congratulations, your new custom ride is ${foundPaint.type}, and has a ${foundInterior.type} interior, with ${foundWheels.type} custom wheels, and latest ${foundTechnology.type} technology . Your dream car will cost ${costString}
</li>`
}





    /* return `<li>
         Order #${order.id} was placed on ${order.timestamp}
     </li>` */ //this was for testing purposes

export const Orders = () => { // this function rerenders the html to populate the info below the button.
    /*
        Can you explain why the state variable has to be inside
        the component function for Orders, but not the others?
    */
    const orders = getOrders()

    let html = "<ul>"

    const listItems = orders.map(buildOrderListItem) //using data from orders Aaray to create a new aaray under the condition to buildOrderListItem 
    //
    html += listItems.join("")
    html += "</ul>"

    return html
}

// look into click event handlers


// this info connect to the last fx in database. this will allow the orders to print the statements for the order
