document.getElementById('sidePanelToggler').onclick = function() {
    openNav();
};

function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}

  
  // Kuulame kerimissündmust
window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || document.documentElement.scrollTop;
    var secondSection = document.querySelector('.second-section');
  
    // Kui kerime piisavalt alla, näitame teist sektsiooni
    var triggerHeight = window.innerHeight; // Kerimiskõrgus, mille juures teine sektsioon ilmub
  
    if (scrollPosition > triggerHeight && !secondSection.style.display) {
      secondSection.style.display = 'block'; // Või 'flex', 'grid' jne, olenevalt paigutusest
    }
  });