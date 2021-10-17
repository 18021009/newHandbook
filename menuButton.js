function showNav() {
    var nav_items = document.getElementById("nav-items");
    if (nav_items.className === "nav-items") {
        nav_items.className += " actived";
    } else {
        nav_items.className = "nav-items";
    }
}