document.getElementById('sidePanelToggler').onclick = function() {
    openNav();
};

function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}