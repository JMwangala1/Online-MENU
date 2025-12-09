/* ========================================
   1. WHATSAPP ORDERING FUNCTION
========================================= */
function orderItem(name, price) {
    // CHANGE THIS NUMBER TO YOUR OWN (Format: 254...)
    let phoneNumber = "254701639517"; 
    
    let text = `Hello, I would like to order: ${name} @ KES ${price}. Table Number: `;
    
    // Create the WhatsApp link
    let url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`;
    
    // Open in new tab
    window.open(url, '_blank');
}

/* ========================================
   2. SEARCH FUNCTION
========================================= */
function searchMenu() {
    let input = document.getElementById("search").value.toLowerCase();
    let items = document.querySelectorAll(".item");

    items.forEach(item => {
        let text = item.textContent.toLowerCase();
        // Check if text matches; set display to block or none
        item.style.display = text.includes(input) ? "block" : "none";
    });

    // Re-check column visibility after searching
    updateColumnVisibility();
}

/* ========================================
   3. CATEGORY FILTER FUNCTION
========================================= */
function filterCategory(category, btnElement) {
    // 1. Update the Active Button visual style
    let buttons = document.querySelectorAll(".filters button");
    buttons.forEach(btn => btn.classList.remove("active"));
    btnElement.classList.add("active");

    let items = document.querySelectorAll(".item");

    // 2. Loop through all items and show/hide based on category
    items.forEach(item => {
        if (category === "all") {
            item.style.display = "block";
        } else {
            // Check if item has the class (e.g., "drinks" or "food")
            if (item.classList.contains(category)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        }
    });

    // 3. Re-check column visibility after filtering
    updateColumnVisibility();
}

/* ========================================
   4. SMART COLUMN HIDER
   (Hides the "Drinks" or "Food" box if empty)
========================================= */
function updateColumnVisibility() {
    let columns = document.querySelectorAll(".column");
    
    columns.forEach(col => {
        let itemsInCol = col.querySelectorAll(".item");
        let hasVisibleItems = false;

        // Check if any item in this column is currently visible
        itemsInCol.forEach(item => {
            if (item.style.display !== "none") {
                hasVisibleItems = true;
            }
        });

        // Toggle the display of the whole column
        col.style.display = hasVisibleItems ? "block" : "none";
    });
}