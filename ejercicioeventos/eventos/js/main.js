const checkboxes = document.querySelectorAll(".control-checkbox")

checkboxes.forEach((checkbox) => {
    checkbox.setAttribute("data-target-index", index);
    checkbox.addEventListener("click", (event) => {
        console.log(event);
        console.log(event.target.dataset.targetIndex);
    })
})