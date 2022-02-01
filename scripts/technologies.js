import { getTechnologies, setTechnology } from "./database.js"

const technologies = getTechnologies()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "technology") {
            setTechnology(parseInt(event.target.value))
        }
    }
)

export const Technologies = () => {
    let html = ""
    html += `<div> <label> Select Your Technology</label> </div>
<select id= "technology">`
html += `<option value="0">Select Your Technology </option> `
    // Use .map() for converting objects to <li> elements

    for (const technology of technologies) { //inerating through each technology object in the technologys array 
        html += `<option value="${technology.id}" > ${technology.type} </option>` //generates html that capures the names through the ids provided in the options

    }
    html += "</select></div>"  //closing tags for HTML

    return html
}