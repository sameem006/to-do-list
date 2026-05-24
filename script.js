var inputval = document.getElementById("ipbox")
var ul = document.getElementById("lst")

function add(event) {
    
    if (inputval.value === "") {
        alert("you must write something")
    }
    else {
        var newlst = document.createElement("li")
        newlst.textContent = inputval.value

        ul.appendChild(newlst)


        var span = document.createElement("button")
        span.innerHTML = "\u00d7"
        span.addEventListener("click", function (event) {


            event.target.parentElement.remove()


        })
        newlst.appendChild(span)

        newlst.addEventListener("click", function (event) {

            event.target.classList.toggle("checked")
        })
    
    }
    
    inputval.value = ""



}
