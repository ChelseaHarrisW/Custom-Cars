import { getWheels, setWheel } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheel") {
            setWheel(parseInt(event.target.value))
       }
    }
)

export const Wheels = () => {
    let html = ""
    html += `<div> <label> Select Your Wheel</label> 
<select id= "wheel">`
html += `<option value="0">Select Your Wheel </option> `
// Use .map() for converting objects to <li> elements

for (const wheel of wheels) { //inerating through each wheel object in the wheels array 
        html += `<option value="${wheel.id}" > ${wheel.type} </option>` //generates html that capures the names through the ids provided in the options
    
    }
html+= "</select></div>"  //closing tags for HTML

return html
    }