
  // Menggunakan Vanilla JavaScript
  document.addEventListener("DOMContentLoaded", function() {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const totalItems = carouselItems.length;
    let currentIndex = 0;

    function slide() {
      carouselItems[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % totalItems;
      carouselItems[currentIndex].classList.add('active');
    }

    setInterval(slide, 3000); // Mengubah gambar setiap 3 detik (3000 ms)
  });
  const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
  });
  
  // Animasi untuk carousel item
  sr.reveal('.carousel-item', {
    interval: 200 // Menambahkan interval antara setiap elemen
  });
  
  // Animasi untuk section "Infor"
  sr.reveal('.service-top', { delay: 100 });
  
  // Animasi ke kanan untuk elemen dalam class "col"
sr.reveal('.col', {
  delay: 200,
  origin: 'right',
  distance: '50px',
  duration: 1000,
  opacity: 0,
  interval: 200
});

// Animasi ke kiri untuk elemen dalam class "project-item"
sr.reveal('.project-item', {
  delay: 200,
  origin: 'bottom',
  distance: '50px',
  duration: 1000,
  opacity: 0,
  interval: 200
});
  
  // Animasi untuk section "Tentang Saya"
  sr.reveal('.row.align-items-center', { delay: 100 });
  
  
  
  // Animasi untuk section "Alamat Saya"
  sr.reveal('iframe', { delay: 100 });
  
  // Animasi untuk footer
  sr.reveal('footer', { delay: 100 });
  // Animasi gambar dari kiri ke kanan
sr.reveal('.col-md-6 img', {
  delay: 200,
  origin: 'left',
  distance: '50px',
  duration: 1000,
  opacity: 0,
  interval: 200
});

// Animasi deskripsi dari kanan ke kiri
sr.reveal('.col-md-6', {
  delay: 200,
  origin: 'right',
  distance: '50px',
  duration: 1000,
  opacity: 0,
  interval: 200
});
  
