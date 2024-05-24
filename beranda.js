document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }

        // Close the navigation menu on mobile after clicking a link
        document.getElementById('nav-menu').classList.remove('active');
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('active');
});

// Typing effect
const texts = ["Rakha Pandu Narendra", "Fresh Graduate"];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.getElementById('typing-text').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
        setTimeout(type, 2000); // waktu jeda sebelum teks berikutnya
    } else {
        setTimeout(type, 200); // kecepatan mengetik
    }
})();


// Fade-in effect on load
window.addEventListener('load', () => {
    document.querySelector('.box1').classList.add('fade-in-left');
    document.querySelector('.box2').classList.add('fade-in-right');
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }

        document.getElementById('nav-menu').classList.remove('active');
    });
});

document.getElementById('hamburger').addEventListener('click', function() {
    document.getElementById('nav').classList.toggle('active');
});


const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target); // Stop observing once the element has appeared
            // Panggil fungsi untuk memulai animasi foto profil setelah teks dan deskripsi singkat muncul
            startProfileAnimation();
        }
    });
}, {
    threshold: 0.1
});

// tentang saya

document.addEventListener('DOMContentLoaded', function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    document.querySelectorAll('.about-box').forEach(box => {
        observer.observe(box);
    });
});


// pendidikan

document.addEventListener('DOMContentLoaded', function() {
    const sectionPendidikan = document.querySelector('#pendidikan');
    const boxes = document.querySelectorAll('.pendidikan-box');

    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                boxes.forEach((box, index) => {
                    box.classList.add('fade-in');
                    box.style.transitionDelay = `${index * 0.5}s`;
                });
                observer.unobserve(entry.target); // Stop observing the section once it's in view
            }
        });
    }, observerOptions);

    sectionObserver.observe(sectionPendidikan);
});


//  pengalaman

document.addEventListener('DOMContentLoaded', function() {
    const sectionPengalaman = document.querySelector('#pengalaman');
    const boxes = document.querySelectorAll('.pengalaman-box');

    const observerOptions = {
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                boxes.forEach((box, index) => {
                    setTimeout(() => {
                        box.classList.add('fade-in');
                    }, index * 500); // Delay each box by 0.5s
                });
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sectionObserver.observe(sectionPengalaman);
});


// pengalaman

document.addEventListener("DOMContentLoaded", function () {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const experienceBoxes = document.querySelectorAll(".experience-box");
    const sectionTitle = document.querySelector("#pengalaman h2");

    experienceBoxes.forEach(box => {
        observer.observe(box);
    });
    observer.observe(sectionTitle);
});

// pencapaian

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".achievement");

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        items.forEach((item, index) => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                setTimeout(() => {
                    item.classList.add("visible");
                }, index * 200); // delay each item
            }
        });
    }

    window.addEventListener("scroll", checkVisibility);
    checkVisibility(); // check on load
});

// download cv

document.getElementById('downloadButton').addEventListener('click', function() {
    // Ganti "nama_file.pdf" dengan nama file CV Anda beserta ekstensinya
    var fileUrl = 'file/Rakha - CV.pdf';

    // Membuat sebuah anchor element
    var downloadAnchor = document.createElement('a');
    downloadAnchor.href = fileUrl;
    
    // Mendownload file dengan cara men-trigger klik pada anchor element
    downloadAnchor.download = 'Rakha - CVR.pdf'; // Nama file yang akan di-download
    downloadAnchor.click();
});







