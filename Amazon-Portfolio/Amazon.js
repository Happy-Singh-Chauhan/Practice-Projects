
        document.addEventListener('DOMContentLoaded', function() {
            const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
            const mobileMenu = document.getElementById('mobileMenu');
            const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');
            const mobileMenuClose = document.getElementById('mobileMenuClose');
            
            mobileMenuIcon.addEventListener('click', function() {
                mobileMenu.classList.add('active');
                mobileMenuOverlay.style.display = 'block';
                document.body.style.overflow = 'hidden';
            });
            
            mobileMenuClose.addEventListener('click', function() {
                closeMobileMenu();
            });
            
            mobileMenuOverlay.addEventListener('click', function() {
                closeMobileMenu();
            });
            
            function closeMobileMenu() {
                mobileMenu.classList.remove('active');
                mobileMenuOverlay.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
            
            // Close menu when clicking on links
            const mobileMenuLinks = document.querySelectorAll('.mobile-menu-section a');
            mobileMenuLinks.forEach(link => {
                link.addEventListener('click', closeMobileMenu);
            });
        });