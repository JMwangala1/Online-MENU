/* ========================================
   SEARCH FUNCTION
   Filters items based on text entered
========================================= */
function searchMenu() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        item.style.display = text.includes(input) ? "block" : "none";
    });
}

/* ========================================
   CATEGORY FILTER FUNCTION
   Shows only selected category items
========================================= */
function filterCategory(category) {
    // Remove active from all buttons
    let buttons = document.querySelectorAll(".filters button");
    buttons.forEach(btn => btn.classList.remove("active"));

    // Highlight clicked button
    event.target.classList.add("active");

    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else {
            item.style.display = item.classList.contains(category)
                ? "block"
                : "none";
        }
    });
}
