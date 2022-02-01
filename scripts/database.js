const database = {
    Paints: [
        { id: 1, type: "Silver", price: 900 },
        { id: 2, type: "Midnight Blue", price: 1200 },
        { id: 3, type: "Firebrick", price: 2000 },
        { id: 4, type: "Spring Green", price: 2500 }
    ],

    Interiors: [
        { id: 1, type: "Beige Fabric", price: 900 },
        { id: 2, type: "Charcoal Fabric", price: 1200 },
        { id: 3, type: "White Leather", price: 2000 },
        { id: 4, type: "Black Leather", price: 3500 }
    ],

    Technologies: [
        { id: 1, type: "Basic Package", price: 9000 },
        { id: 2, type: "Navigation Package", price: 12000 },
        { id: 3, type: "Visibility Package", price: 20000 },
        { id: 4, type: "Ultra Package", price: 35000 }
    ],

    Wheels: [
        { id: 1, type: "17-inch Radial", price: 900 },
        { id: 2, type: "17-inch Radial Black", price: 1200 },
        { id: 3, type: "17-inch Spoke Silver", price: 2000 },
        { id: 4, type: "17-inch Spoke Black (Off-Road Edition)", price: 3500 },
],
customOrders: [
    {
        id: 1,
        paintId: 3,
        interiorId: 2,
        wheelsId: 1, 
        technologyId: 3,
        timestamp: 1614659931693
    }
],
    // the order builder is designed to hold transient state.
    orderBuilder: {},
}

// the get functions defined here are used to create replicas of the database items to new arrays, this will allow the
// the perm. state items to remain static

export const getPaints = () => {
    return database.Paints.map(paint => ({ ...paint }))
}
export const getInteriors = () => {
    return database.Interiors.map(interior => ({ ...interior }))
}
// this function needs no input(param) because it is simply making a copy of the provided array
export const getTechnologies = () => {
    // the return here is explicitly and is providing the value of the array the method was used on
    return database.Technologies.map(technology => ({ ...technology }))
}
export const getWheels = () => {
    return database.Wheels.map(wheel => ({ ...wheel }))
}

export const getOrders = () => { 
   
    return database.customOrders.map(customOrders => ({...customOrders}))
}

// the set functions defined here are designed to update the transient state with the Id's that are coming from user input
// selections in order to update the customers orders



export const setPaint = (id) => {
    database.orderBuilder.paintId = id
}
// the function is passed the input (param) of id in order to construct the objects for orders
export const setInterior = (id) => {
    // the item on the left (interiorId) is assigned the value of id, this will aide in object creation
    database.orderBuilder.interiorId = id
}
export const setTechnology = (id) => {
    database.orderBuilder.technologyId = id
}
export const setWheel = (id) => {
    database.orderBuilder.wheelsId = id
}

// define a function that is will be used for creating the car's custom orders

    // the user selection will be needed for each selections

    export const addCustomOrder = () => {
        // Copy the current state of user choices
        const newOrder = {...database.orderBuilder}
        // Add a new primary key to the object
    
        // this is to initiallize the length to match the order
        const lastIndex = database.customOrders.length - 1
         // square brackets access the object at its index
        newOrder.id = database.customOrders[lastIndex].id + 1
    
        // Add a timestamp to the order
        newOrder.timestamp = Date.now()
    
        // Add the new order object to custom orders state (creating perm state)
        database.customOrders.push(newOrder)
    
        // Reset the temporary state for user choices
        database.orderBuilder = {} // sets transient to per/solid state
    
        // Broadcast a notification that permanent state has changed
        document.dispatchEvent(new CustomEvent("stateChanged"))
    }
    

