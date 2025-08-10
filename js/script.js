document.addEventListener('DOMContentLoaded', function() {
    // Navigation Scroll Effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.navbar-links');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
    });

    // Close mobile menu when clicking a link
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
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

    // Animated Counter for Stats
    const statNumbers = document.querySelectorAll('.stat-number');
    if (statNumbers.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const target = +entry.target.getAttribute('data-count');
                    const speed = 200; // Animation speed
                    const count = +entry.target.innerText;
                    const increment = target / speed;
                    
                    if (count < target) {
                        entry.target.innerText = Math.ceil(count + increment);
                        setTimeout(observerCallback, 1, entry.target, target, speed, increment);
                    } else {
                        entry.target.innerText = target;
                    }
                }
            });
        }, { threshold: 0.5 });
        
        statNumbers.forEach(number => {
            observer.observe(number);
        });
        
        function observerCallback(element, target, speed, increment) {
            const count = +element.innerText;
            if (count < target) {
                element.innerText = Math.ceil(count + increment);
                setTimeout(observerCallback, 1, element, target, speed, increment);
            } else {
                element.innerText = target;
            }
        }
    }

    // Teacher Modal Functionality
    const teacherCards = document.querySelectorAll('.teacher-card');
    const modal = document.querySelector('.modal');
    const closeModal = document.querySelector('.close-modal');
    
    if (teacherCards.length > 0) {
        // Sample teacher data - in a real app, this would come from a database
        const teachers = [
            {
                id: 1,
                name: "Udayan Phukan",
                position: "Principal",
                subjects: "Mathematics, Physics",
                bio: "With over 20 years of experience in education, Mr. Phukan has been instrumental in shaping the school's academic excellence. He holds a Master's degree in Physics and is passionate about innovative teaching methods.",
                email: "udayan@schoolname.edu",
                phone: "+91 9876543210"
            },
            // Add similar objects for all 10 teachers
        ];
        
        teacherCards.forEach((card, index) => {
            card.addEventListener('click', () => {
                const teacher = teachers[index];
                openTeacherModal(teacher);
            });
        });
        
        closeModal.addEventListener('click', () => {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });
        
        function openTeacherModal(teacher) {
            document.querySelector('.modal-title').textContent = teacher.name;
            document.querySelector('.modal-subtitle').textContent = teacher.position;
            document.querySelector('.modal-image img').src = `images/teachers/teacher-${teacher.id}.jpg`;
            document.querySelector('.modal-image img').alt = teacher.name;
            
            const detailsContainer = document.querySelector('.modal-details');
            detailsContainer.innerHTML = `
                <h4>About</h4>
                <p>${teacher.bio}</p>
                
                <h4>Subjects</h4>
                <p>${teacher.subjects}</p>
                
                <h4>Contact Information</h4>
                <div class="detail-item">
                    <i class="fas fa-envelope"></i>
                    <div class="info-content">
                        <p>${teacher.email}</p>
                    </div>
                </div>
                <div class="detail-item">
                    <i class="fas fa-phone"></i>
                    <div class="info-content">
                        <p>${teacher.phone}</p>
                    </div>
                </div>
            `;
            
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    // Gallery Lightbox Functionality
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = document.querySelector('.lightbox-img');
    const closeLightbox = document.querySelector('.close-lightbox');
    const lightboxPrev = document.querySelector('.lightbox-prev');
    const lightboxNext = document.querySelector('.lightbox-next');
    
    if (galleryItems.length > 0) {
        let currentImageIndex = 0;
        const images = [];
        
        galleryItems.forEach((item, index) => {
            const imgSrc = item.querySelector('img').src;
            images.push(imgSrc);
            
            item.addEventListener('click', () => {
                currentImageIndex = index;
                openLightbox(imgSrc);
            });
        });
        
        closeLightbox.addEventListener('click', () => {
            closeLightboxHandler();
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                closeLightboxHandler();
            }
        });
        
        document.querySelector('.lightbox-prev').addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(-1);
        });
        
        document.querySelector('.lightbox-next').addEventListener('click', (e) => {
            e.stopPropagation();
            navigateLightbox(1);
        });
        
        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (lightbox.style.display === 'block') {
                if (e.key === 'Escape') {
                    closeLightboxHandler();
                } else if (e.key === 'ArrowLeft') {
                    navigateLightbox(-1);
                } else if (e.key === 'ArrowRight') {
                    navigateLightbox(1);
                }
            }
        });
        
        function openLightbox(src) {
            lightboxImg.src = src;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
        
        function closeLightboxHandler() {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
        
        function navigateLightbox(direction) {
            currentImageIndex += direction;
            
            if (currentImageIndex < 0) {
                currentImageIndex = images.length - 1;
            } else if (currentImageIndex >= images.length) {
                currentImageIndex = 0;
            }
            
            lightboxImg.src = images[currentImageIndex];
        }
    }

    // Google Maps Integration
    if (document.getElementById('map')) {
        function initMap() {
            // Replace with your school's coordinates
            const schoolLocation = { lat: 26.1445, lng: 91.7362 };
            const map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: schoolLocation,
                styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "labels.text.fill",
                        "stylers": [
                            {
                                "color": "#444444"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#f2f2f2"
                            }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                            {
                                "saturation": -100
                            },
                            {
                                "lightness": 45
                            }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "simplified"
                            }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "labels.icon",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "all",
                        "stylers": [
                            {
                                "color": "#46bcec"
                            },
                            {
                                "visibility": "on"
                            }
                        ]
                    }
                ]
            });
            
            const marker = new google.maps.Marker({
                position: schoolLocation,
                map: map,
                title: 'Your School Name',
                icon: {
                    url: 'images/school-marker.png',
                    scaledSize: new google.maps.Size(40, 40)
                }
            });
            
            const infoWindow = new google.maps.InfoWindow({
                content: '<h3>Your School Name</h3><p>School Address</p>'
            });
            
            marker.addListener('click', () => {
                infoWindow.open(map, marker);
            });
        }
        
        window.initMap = initMap;
    }

    // Animation on Scroll
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.location-card, .teacher-card, .gallery-item, .stat-card');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });
        
        elements.forEach(element => {
            element.style.opacity = '0';
            element.style.transform = 'translateY(30px)';
            element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(element);
        });
    };
    
    animateOnScroll();
});