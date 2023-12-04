document.getElementById('sidePanelToggler').onclick = function() {
    openNav();
};

function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}

document.getElementById('guyRitchieBtn').onclick = scrollToSectionRitchie;
document.getElementById('guyRitchieBtn2').onclick = scrollToSectionRitchie;

function scrollToSectionRitchie() {
    const section = document.getElementById('guy-ritchie-section');
    section.style.opacity = '1'; // Muuda läbipaistvus nähtavaks
    section.scrollIntoView({ behavior: 'smooth' });
    // Taasta onscroll sündmus pärast kerimist
    setTimeout(() => {
        window.onscroll = onScrollFunction;
        scrolledToSectionRitchie = true;
    }, 1000);
}
let scrolledToSectionRitchie = false;

function onScrollFunction() {
    const scrollPosition = window.scrollY || document.documentElement.scrollTop;
    const ritchieSection = document.getElementById('guy-ritchie-section');
    const nolanSection = document.getElementById('Christofer_Nolan_section');
    const quentinSection = document.getElementById('Quentin_Tarantino_section');
    
    // Defineeri läve väärtus, näiteks 300px üle elemendi ülemise ääre
    const threshold = 700;

    // Kontrolli, kas Guy Ritchie sektsiooni on keritud
    if (scrollPosition + threshold >= ritchieSection.offsetTop && !scrolledToSectionRitchie) {
        ritchieSection.style.opacity = '1';
        scrolledToSectionRitchie = true;
    }

    // Kontrolli, kas Christopher Nolan sektsiooni on keritud
    if (scrollPosition + threshold >= nolanSection.offsetTop && !scrolledToSectionChristopher) {
        nolanSection.style.opacity = '1';
        scrolledToSectionChristopher = true;
    }
    // Kontrolli, kas Quentin sektsiooni on keritud
    if (scrollPosition + threshold >= quentinSection.offsetTop && !scrolledToSectionQuentin) {
        quentinSection.style.opacity = '1';
        scrolledToSectionQuentin = true;
    }
    
}



document.getElementById('Christofer_Nolan_section_nupp').onclick = scrollToSectionChristopher;
document.getElementById('Christofer_Nolan_section_nupp2').onclick = scrollToSectionChristopher;

function scrollToSectionChristopher() {
    const section = document.getElementById('Christofer_Nolan_section');
    section.style.opacity = '1'; // Muuda läbipaistvus nähtavaks
    section.scrollIntoView({ behavior: 'smooth' });
    // Taasta onscroll sündmus pärast kerimist
    setTimeout(() => {
        window.onscroll = onScrollFunction;
        scrolledToSectionChristopher = true;
    }, 1000);
}
let scrolledToSectionChristopher = false;


document.getElementById('Quentin_Tarantino_section_nupp').onclick = scrollToSectionQuentin;
document.getElementById('Quentin_Tarantino_section_nupp2').onclick = scrollToSectionQuentin;

function scrollToSectionQuentin() {
    const section = document.getElementById('Quentin_Tarantino_section');
    section.style.opacity = '1'; // Muuda läbipaistvus nähtavaks
    section.scrollIntoView({ behavior: 'smooth' });
    // Taasta onscroll sündmus pärast kerimist
    setTimeout(() => {
        window.onscroll = onScrollFunction;
        scrolledToSectionQuentin = true;
    }, 1000);
}
let scrolledToSectionQuentin = false;

// Määra onscroll sündmus
window.onscroll = onScrollFunction;
