// this module contains the function defined to select user interior

//Import the copy of selection array


//define a function that will produce html drop down element 

// create a event listener that will capture the user selection for interior

import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interior") {
            setInterior(parseInt(event.target.value))
       }
    }
)

export const Interiors = () => {
    let html = ""
    html += `<div> <label> Select Your Interior</label> </div>`
    html += `<select id= "interior">
<option value="0">Select Your Interior </option> `
// Use .map() for converting objects to <select> elements

for (const interior of interiors) { //inerating through each interior object in the interiors array 
        html += `<option value="${interior.id}" > ${interior.type} </option>` //generates html that capures the names through the ids provided in the options
    
    }
html+= "</select></div>"  //closing tags for HTML

return html
    }


   





