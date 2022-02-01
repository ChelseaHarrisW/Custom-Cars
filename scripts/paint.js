import { getPaints, setPaint } from "./database.js"

const paints = getPaints()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "paint") {
            setPaint(parseInt(event.target.value))
        }
    }
)

export const Paints = () => {
    let html = ""
    html += `<div> <label> Select Your Paint</label> </div>
<select name="paint" id= "paint">`
html += `<option value="0">Select Your Paint </option> `
    // Use .map() for converting objects to <li> elements

    for (const paint of paints) { //inerating through each paint object in the paints array 
        html += `<option value="${paint.id}" > ${paint.type} </option>` //generates html that capures the names through the ids provided in the options

    }
    html += "</select>"  //closing tags for HTML

    return html
}