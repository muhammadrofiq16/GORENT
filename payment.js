document.addEventListener('DOMContentLoaded', function() {
    // Thumbnail image click handler
    const thumbnails = document.querySelectorAll('.thumbnail img');
    const mainImage = document.querySelector('.main-image img');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            // Swap the main image with the clicked thumbnail
            const tempSrc = mainImage.src;
            mainImage.src = this.src;
            this.src = tempSrc;
            
            // Add animation
            mainImage.style.opacity = '0';
            setTimeout(() => {
                mainImage.style.opacity = '1';
            }, 100);
        });
    });
    
    // Transmission type selection
    const transmissionBtns = document.querySelectorAll('.transmission-btn');
    
    transmissionBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            transmissionBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
        });
    });
    
    // Rent button click handler
    const rentBtn = document.querySelector('.rent-btn');
    
    rentBtn.addEventListener('click', function() {
        alert('Terima kasih! Anda akan diarahkan ke halaman pembayaran.');
        // In a real application, you would redirect to payment page
        // window.location.href = '/payment';
    });
    
    // Navigation smooth scrolling
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});