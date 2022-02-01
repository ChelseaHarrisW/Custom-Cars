import { carBuilder } from "./carBuilder.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
// the function body invokes the kneel diamondfunction in the inner html
    mainContainer.innerHTML = carBuilder()
}

renderAllHTML()

document.addEventListener("stateChanged", event => {
    // when the state changes console.log the message
    console.log("State of data has changed. Regenerating HTML...")
    renderAllHTML()
})
 // this module  listens for the state change, and rerenders all html