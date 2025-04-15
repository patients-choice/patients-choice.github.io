document.addEventListener('DOMContentLoaded', function() {
    // Create a div to hold the footer
    const footerContainer = document.createElement('div');
    footerContainer.id = 'footer-container';
    
    // Determine if we're on the resources page
    const isResourcesPage = window.location.pathname.includes('resources.html');
    
    // Embedded footer content
    const footerContent = `
<!-- Footer -->
<footer class="footer">
    <div class="container">                        
        <div class="footer-content">
            <div class="footer-section">
                <div class="footer-brand">
                    <h3 data-translation-key="footer.brand">Patient's Choice</h3>
                </div>
                <p data-translation-key="footer.desc">Providing exceptional home health care services with compassion and professionalism. Your health and well-being are our top priorities.</p>
            </div>
            <div class="footer-section">
                <h3 data-translation-key="footer.quickLinks">Quick Links</h3>
                <ul>
                    <li><a href="${isResourcesPage ? 'index.html' : '#home'}" data-translation-key="nav.home">Home</a></li>
                    <li><a href="${isResourcesPage ? 'index.html#services' : '#services'}" data-translation-key="nav.services">Services</a></li>
                    <li><a href="${isResourcesPage ? 'index.html#insurance' : '#insurance'}" data-translation-key="nav.insurance">Insurance</a></li>
                    <li><a href="${isResourcesPage ? 'index.html#about' : '#about'}" data-translation-key="nav.about">About Us</a></li>
                    <li><a href="${isResourcesPage ? 'index.html#contact' : '#contact'}" data-translation-key="nav.contact">Contact</a></li>
                    <li><a href="${isResourcesPage ? 'index.html#testimonials' : '#testimonials'}" data-translation-key="nav.testimonials">Testimonials</a></li>
                    <li><a href="${isResourcesPage ? 'index.html#faqs' : '#faqs'}" data-translation-key="nav.faqs">FAQs</a></li>
                    <li><a href="resources.html" class="${isResourcesPage ? 'active' : ''}" data-translation-key="nav.resources">Resources</a></li>
                </ul>
            </div>
            <div class="footer-section">
                <h3 data-translation-key="footer.address">Address</h3>
                <p>
                    <span data-translation-key="contact.info.address.line1">7205 NW 19th Street, Suite 201</span><br>
                    <span data-translation-key="contact.info.address.line2">Miami, Florida 33126</span>
                </p>
                <h3 data-translation-key="footer.hours" style="margin-top: 1.5rem;">Office Hours</h3>
                <p data-translation-key="contact.info.hours">Monday–Friday, 9 AM – 5 PM</p>
                <p data-translation-key="footer.onCall">On-Call Nurses Available 24/7</p>
            </div>
            <div class="footer-section">
                <h3 data-translation-key="footer.connect">Connect With Us</h3>
                <div class="social-links">
                    <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><i class="fab fa-facebook-f"></i></a>
                    <a href="https://x.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                    <a href="https://www.linkedin.com/company/patient-s-choice-home-health-care-inc/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                    <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <img src="images/patients-choice-icon-teal.png" alt="Patient's Choice Icon" class="footer-icon">
            <p data-translation-key="footer.copyright">&copy; 2025 Patient's Choice Home Health Care.<br/> All rights reserved. <a href="https://www.patients-choice.com/" target="_blank" rel="noopener noreferrer">www.patients-choice.com</a></p>
            <div class="directory-links">
                <a href="https://www.google.com/maps/place/Patient's+Choice+Home+Health+Care/@25.7907,-80.3150,15z" target="_blank" rel="noopener noreferrer">Google Business Profile</a>
                <a href="https://www.yelp.com/biz/patients-choice-home-health-care-miami" target="_blank" rel="noopener noreferrer">Yelp</a>
                <a href="https://www.bbb.org/us/fl/miami/profile/home-health-care/patients-choice-home-health-care-llc-0633-1000002012" target="_blank" rel="noopener noreferrer">Better Business Bureau</a>
                <a href="https://www.healthgrades.com/home-health-care/patients-choice-home-health-care-miami-fl-x8h8h" target="_blank" rel="noopener noreferrer">Healthgrades</a>
            </div>
        </div>
    </div>
</footer>`;

    // Insert the footer content
    footerContainer.innerHTML = footerContent;
    
    // Insert the footer at the end of the body
    document.body.appendChild(footerContainer);
}); 