// Language translations
const translations = {
    en: {
        // Navigation
        'nav.home': 'Home',
        'nav.about': 'About Us',
        'nav.services': 'Services',
        'nav.insurance': 'Insurance',
        'nav.contact': 'Contact',
        'nav.testimonials': 'Testimonials',
        'nav.careers': 'Careers',
        'nav.faqs': 'FAQs',
        'nav.resources': 'Resources',
        
        // Hero Section
        'hero.title': 'Your Health, <span class="priority-text">Our Priority</span>',
        'hero.subtitle': 'Patient\'s Choice Home Health Care is thankful for the opportunity to make a positive difference to your health and your life at home. Whether you\'re battling a chronic illness, a disability, or facing challenges with daily activities, we will be there. You can count on our team of professionals 24 hours a day 7 days a week to help you through it all.',
        'hero.requestCare': 'Request Care',
        'hero.ourServices': 'Our Services',

        // Services Section
        'services.title': 'Our Services',
        'services.subtitle': 'Patients Choice offers a wide range of Medicare-certified and insurance-covered home health services, plus private-pay packages for postoperative and cosmetic surgery recovery.',
        'services.diabeticCare': 'Diabetic Care',
        'services.diabeticCare.bullet1': 'Blood sugar monitoring',
        'services.diabeticCare.bullet2': 'Medication/insulin administration',
        'services.diabeticCare.bullet3': 'Diabetic foot care',
        'services.diabeticCare.bullet4': 'Dietary and lifestyle education',
        'services.diabeticCare.bullet5': 'Prevention of complications',
        'services.postoperative': 'Postoperative Recovery',
        'services.postoperative.bullet1': 'Pain and wound management',
        'services.postoperative.bullet2': 'Mobility assistance',
        'services.postoperative.bullet3': 'Medication administration',
        'services.postoperative.bullet4': 'Communication with your surgeon',
        'services.postoperative.bullet5': 'Hospital-to-home transition planning',
        'services.cosmetic': 'Cosmetic Surgery Recovery',
        'services.cosmetic.bullet1': 'Transportation to/from surgery',
        'services.cosmetic.bullet2': '24-hour post-op care',
        'services.cosmetic.bullet3': 'Lymphatic drainage support',
        'services.cosmetic.bullet4': 'Dressing changes, drain monitoring',
        'services.cosmetic.bullet5': 'Private nursing & concierge care',
        'services.core': 'Core Home Health Services',
        'services.core.bullet1': 'Skilled Nursing: Wound care, IV therapy, injections, disease management',
        'services.core.bullet2': 'Physical Therapy: Post-surgical rehab, mobility, strength, balance',
        'services.core.bullet3': 'Occupational Therapy: Activities of daily living, adaptive techniques',
        'services.core.bullet4': 'Home Health Aides: Bathing, grooming, meals, mobility, light housekeeping',
        'services.core.bullet5': 'Medical Social Work: Counseling, community resources, care planning',
        'services.note': 'All services are delivered under the supervision of your physician and based on your personalized care plan.',
        
        // Insurance Section
        'insurance.title': 'Insurance',
        'insurance.subtitle': 'Patients Choice accepts the following plans:',
        'insurance.medicare': 'Medicare & Medicare Advantage',
        'insurance.private': 'Private Insurance',
        'insurance.military': 'Military & Government',
        'insurance.managed': 'Managed Care',
        'insurance.privatePay': 'Private Pay Options',
        'insurance.privatePayDesc': 'We offer flexible plans for those not covered by insurance, including postoperative and cosmetic surgery packages.',
        'insurance.support': 'Insurance Support',
        'insurance.supportDesc': 'Our staff will verify your benefits, explain any costs upfront, and guide you every step of the way.',
        
        // About Section
        'about.title': 'About Us',
        'about.mission': 'Locally Trusted. Family-Focused. Clinically Strong.',
        'about.missionDesc': 'Patients Choice Home Health Agency was founded with a simple mission to provide high-quality, compassionate health care to individuals in the comfort of their homes.',
        'about.community': 'Our Community',
        'about.communityDesc': 'As a locally owned and operated agency, we understand the unique needs of our community. We serve patients across Miami-Dade and Monroe Counties, from urban centers to coastal communities.',
        'about.team': 'Our Team',
        'about.teamDesc': 'We are proud to be a Medicare-certified and AHCA-licensed home health agency. Our team includes:',
        'about.teamList': 'Each member of our staff is carefully screened, trained, and supervised to ensure our patients receive only the most reliable and compassionate care.',
        'about.philosophy': 'Our Philosophy',
        'about.philosophyDesc': 'We treat every patient as family. We listen carefully, communicate clearly, and personalize every service around the goals of the patient and their family.',
        'about.team.bullet1': 'Registered Nurses (RNs)',
        'about.team.bullet2': 'Licensed Practical Nurses (LPNs)',
        'about.team.bullet3': 'Physical & Occupational Therapists',
        'about.team.bullet4': 'Home Health Aides (HHAs & CNAs)',
        'about.team.bullet5': 'Medical Social Workers',
        
        // Resources Section
        'resources.title': 'Resources',
        'resources.subtitle': 'Access these valuable healthcare resources and information to help you make informed decisions about your health.',
        'resources.hhs.title': 'U.S. Department of Health & Human Services',
        'resources.hhs.desc': 'Federal department overseeing health and human services programs.',
        'resources.medicare.title': 'Medicare',
        'resources.medicare.desc': 'Official Medicare website for healthcare coverage information and enrollment.',
        'resources.cms.title': 'Centers for Medicare & Medicaid Services',
        'resources.cms.desc': 'Federal agency administering Medicare, Medicaid, and other health programs.',
        'resources.ncd.title': 'National Council on Disability',
        'resources.ncd.desc': 'Independent federal agency advising on disability policy.',
        'resources.familiesUSA.title': 'FamiliesUSA',
        'resources.familiesUSA.desc': 'National nonprofit organization advocating for high-quality healthcare.',
        'resources.ahcancal.title': 'American Health Care Association',
        'resources.ahcancal.desc': 'National organization representing long-term and post-acute care providers.',
        'resources.ama.title': 'American Medical Association',
        'resources.ama.desc': 'Largest association of physicians and medical students in the United States.',
        'resources.alz.title': 'Alzheimer\'s Association',
        'resources.alz.desc': 'Leading voluntary health organization in Alzheimer\'s care and research.',
        'resources.everydayHealth.title': 'Everyday Health',
        'resources.everydayHealth.desc': 'Comprehensive online health information and resources.',
        'resources.medicineNet.title': 'MedicineNet',
        'resources.medicineNet.desc': 'Health and medical information produced by doctors.',
        'resources.healthLaw.title': 'The Health Law Offices',
        'resources.healthLaw.desc': 'Legal resources and information for healthcare-related matters.',
        'resources.floridaHealth.title': 'Florida Health Industry',
        'resources.floridaHealth.desc': 'Information about Florida\'s healthcare industry and services.',
        
        // Contact Section
        'contact.title': 'Contact Us',
        'contact.subtitle': 'Get in touch with us to learn more about our services or to schedule a consultation.',
        'contact.name': 'Full Name',
        'contact.email': 'Email Address',
        'contact.phone': 'Phone Number',
        'contact.service': 'Service Interest',
        'contact.servicePlaceholder': 'What type of care are you looking for?',
        'contact.message': 'Message',
        'contact.messagePlaceholder': 'Tell us about your needs',
        'contact.send': 'Send Message',
        'contact.success': 'Thank you for your message! We will get back to you soon.',
        'contact.officeHours': 'Office Hours',
        'contact.officeHoursDesc': 'Monday–Friday, 9 AM – 5 PM',
        'contact.onCall': 'On-Call Nurses Available 24/7',
        
        // CTA Section
        'cta.title': 'Ready to Get Started?',
        'cta.subtitle': 'Contact us today to learn more about our services and how we can help you or your loved ones. Our team is ready to provide the care and support you need.',
        'cta.button': 'Contact Us Now',
        
        // Footer
        'footer.brand': 'Patient\'s Choice',
        'footer.desc': 'Providing exceptional home health care services with compassion and professionalism. Your health and well-being are our top priorities.',
        'footer.quickLinks': 'Quick Links',
        'footer.connect': 'Connect With Us',
        'footer.copyright': '© 2025 Patient\'s Choice Home Health Care. All rights reserved.',
        
        // Testimonials Section
        'testimonials.title': 'What Our Patients Say',
        'testimonials.subtitle': 'Hear from our patients about their experiences with Patient\'s Choice Home Health Care.',
        'testimonials.quote1': '"After my mom\'s surgery, Patients Choice came to our home. Their nurse was incredible – compassionate, gentle, and professional. I highly recommend them!"',
        'testimonials.author1': 'Maria G.',
        'testimonials.quote2': '"Thanks to their diabetic care program, my sugar levels are under control. I\'ve learned so much!"',
        'testimonials.author2': 'Carlos M.',
        'testimonials.quote3': '"They helped me recover comfortably after my cosmetic procedure. So professional and discreet!"',
        'testimonials.author3': 'Emily S.',
        
        // Careers Section
        'careers.title': 'Careers at Patient\'s Choice',
        'careers.subtitle': 'We\'re hiring compassionate professionals who want to make a difference!',
        'careers.positions': 'Now Hiring',
        'careers.position1': 'RNs / LPNs',
        'careers.position2': 'Physical & Occupational Therapists',
        'careers.position3': 'CNAs / HHAs',
        'careers.position4': 'Medical Social Workers',
        'careers.position5': 'Intake Coordinators',
        'careers.benefits': 'Benefits',
        'careers.benefit1': 'Competitive Pay',
        'careers.benefit2': 'Flexible Scheduling',
        'careers.benefit3': 'Supportive Work Environment',
        'careers.benefit4': 'Ongoing Training',
        'careers.apply': 'Apply Today',
        'careers.applyDesc': 'Send your resume to <a href="mailto:careers@patientschoice.com" class="contact-link">careers@patientschoice.com</a>',
        
        // FAQs Section
        'faqs.title': 'Frequently Asked Questions',
        'faqs.subtitle': 'Find answers to common questions about our services and care.',
        'faqs.question1': 'What is home health care?',
        'faqs.answer1': 'Medical care provided in your home by nurses, therapists, and aides under a physician\'s direction.',
        'faqs.question2': 'Who qualifies?',
        'faqs.answer2': 'Patients who are homebound and require intermittent skilled care.',
        'faqs.question3': 'Is it covered by insurance?',
        'faqs.answer3': 'Yes! Medicare, Medicaid, and most private insurances cover qualified services.',
        'faqs.question4': 'Do you offer private-pay services?',
        'faqs.answer4': 'Yes – especially for cosmetic recovery and concierge care.',
        'faqs.question5': 'How do I start?',
        'faqs.answer5': 'Call us or have your doctor send a referral. We\'ll handle the rest!'
    },
    es: {
        // Navigation
        'nav.home': 'Inicio',
        'nav.about': 'Sobre Nosotros',
        'nav.services': 'Servicios',
        'nav.insurance': 'Seguros',
        'nav.contact': 'Contacto',
        'nav.testimonials': 'Testimonios',
        'nav.careers': 'Carreras',
        'nav.faqs': 'Preguntas Frecuentes',
        'nav.resources': 'Recursos',
        
        // Hero Section
        'hero.title': 'Su Salud, <span class="priority-text">Nuestra Prioridad</span>',
        'hero.subtitle': 'Patient\'s Choice Home Health Care está agradecido por la oportunidad de hacer una diferencia positiva en su salud y su vida en el hogar. Ya sea que esté lidiando con una enfermedad crónica, una discapacidad o enfrentando desafíos con las actividades diarias, estaremos allí. Puede contar con nuestro equipo de profesionales las 24 horas del día, los 7 días de la semana para ayudarlo en todo.',
        'hero.requestCare': 'Solicitar Atención',
        'hero.ourServices': 'Nuestros Servicios',

        // Services Section
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Patients Choice ofrece una amplia gama de servicios de salud en el hogar certificados por Medicare y cubiertos por seguros, además de paquetes de pago privado para la recuperación postoperatoria y de cirugía estética.',
        'services.diabeticCare': 'Cuidado Diabético',
        'services.diabeticCare.bullet1': 'Monitoreo de azúcar en sangre',
        'services.diabeticCare.bullet2': 'Administración de medicamentos/insulina',
        'services.diabeticCare.bullet3': 'Cuidado de pies diabéticos',
        'services.diabeticCare.bullet4': 'Educación sobre dieta y estilo de vida',
        'services.diabeticCare.bullet5': 'Prevención de complicaciones',
        'services.postoperative': 'Recuperación Postoperatoria',
        'services.postoperative.bullet1': 'Manejo del dolor y heridas',
        'services.postoperative.bullet2': 'Asistencia para la movilidad',
        'services.postoperative.bullet3': 'Administración de medicamentos',
        'services.postoperative.bullet4': 'Comunicación con su cirujano',
        'services.postoperative.bullet5': 'Planificación de transición del hospital al hogar',
        'services.cosmetic': 'Recuperación de Cirugía Estética',
        'services.cosmetic.bullet1': 'Transporte hacia/desde la cirugía',
        'services.cosmetic.bullet2': 'Cuidado postoperatorio las 24 horas',
        'services.cosmetic.bullet3': 'Soporte de drenaje linfático',
        'services.cosmetic.bullet4': 'Cambios de vendajes, monitoreo de drenajes',
        'services.cosmetic.bullet5': 'Enfermería privada y atención de conserjería',
        'services.core': 'Servicios Básicos de Salud en el Hogar',
        'services.core.bullet1': 'Enfermería Especializada: Cuidado de heridas, terapia intravenosa, inyecciones, manejo de enfermedades',
        'services.core.bullet2': 'Terapia Física: Rehabilitación postquirúrgica, movilidad, fuerza, equilibrio',
        'services.core.bullet3': 'Terapia Ocupacional: Actividades de la vida diaria, técnicas adaptativas',
        'services.core.bullet4': 'Asistentes de Salud en el Hogar: Baño, aseo personal, comidas, movilidad, limpieza ligera',
        'services.core.bullet5': 'Trabajo Social Médico: Consejería, recursos comunitarios, planificación de cuidados',
        'services.note': 'Todos los servicios se brindan bajo la supervisión de su médico y según su plan de atención personalizado.',
        
        // Insurance Section
        'insurance.title': 'Seguros',
        'insurance.subtitle': 'Patients Choice acepta los siguientes planes:',
        'insurance.medicare': 'Medicare y Medicare Advantage',
        'insurance.private': 'Seguros Privados',
        'insurance.military': 'Militar y Gubernamental',
        'insurance.managed': 'Atención Administrada',
        'insurance.privatePay': 'Opciones de Pago Privado',
        'insurance.privatePayDesc': 'Ofrecemos planes flexibles para aquellos no cubiertos por seguros, incluyendo paquetes postoperatorios y de cirugía estética.',
        'insurance.support': 'Soporte de Seguros',
        'insurance.supportDesc': 'Nuestro personal verificará sus beneficios, explicará cualquier costo por adelantado y lo guiará en cada paso del proceso.',
        
        // About Section
        'about.title': 'Sobre Nosotros',
        'about.mission': 'Confiado Localmente. Enfocado en la Familia. Clínicamente Fuerte.',
        'about.missionDesc': 'Patients Choice Home Health Agency fue fundada con una misión simple: proporcionar atención médica de alta calidad y compasiva a las personas en la comodidad de sus hogares.',
        'about.community': 'Nuestra Comunidad',
        'about.communityDesc': 'Como una agencia local y operada localmente, entendemos las necesidades únicas de nuestra comunidad. Atendemos a pacientes en los condados de Miami-Dade y Monroe, desde centros urbanos hasta comunidades costeras.',
        'about.team': 'Nuestro Equipo',
        'about.teamDesc': 'Estamos orgullosos de ser una agencia de salud en el hogar certificada por Medicare y con licencia AHCA. Nuestro equipo incluye:',
        'about.teamList': 'Cada miembro de nuestro personal es cuidadosamente seleccionado, capacitado y supervisado para garantizar que nuestros pacientes reciban solo la atención más confiable y compasiva.',
        'about.philosophy': 'Nuestra Filosofía',
        'about.philosophyDesc': 'Tratamos a cada paciente como familia. Escuchamos con atención, nos comunicamos claramente y personalizamos cada servicio en torno a los objetivos del paciente y su familia.',
        'about.team.bullet1': 'Enfermeras Registradas (RN)',
        'about.team.bullet2': 'Enfermeras Prácticas Licenciadas (LPN)',
        'about.team.bullet3': 'Terapeutas Físicos y Ocupacionales',
        'about.team.bullet4': 'Asistentes de Salud en el Hogar (HHA y CNA)',
        'about.team.bullet5': 'Trabajadores Sociales Médicos',
        
        // Resources Section
        'resources.title': 'Recursos',
        'resources.subtitle': 'Acceda a estos valiosos recursos e información de atención médica para ayudarlo a tomar decisiones informadas sobre su salud.',
        'resources.hhs.title': 'Departamento de Salud y Servicios Humanos de EE. UU.',
        'resources.hhs.desc': 'Departamento federal que supervisa los programas de salud y servicios humanos.',
        'resources.medicare.title': 'Medicare',
        'resources.medicare.desc': 'Sitio web oficial de Medicare para información sobre cobertura médica y registro.',
        'resources.cms.title': 'Centros de Servicios de Medicare y Medicaid',
        'resources.cms.desc': 'Agencia federal que administra Medicare, Medicaid y otros programas de salud.',
        'resources.ncd.title': 'Consejo Nacional sobre Discapacidad',
        'resources.ncd.desc': 'Agencia federal independiente que asesora sobre políticas de discapacidad.',
        'resources.familiesUSA.title': 'FamiliesUSA',
        'resources.familiesUSA.desc': 'Organización nacional sin fines de lucro que aboga por una atención médica de alta calidad.',
        'resources.ahcancal.title': 'Asociación Estadounidense de Atención Médica',
        'resources.ahcancal.desc': 'Organización nacional que representa a los proveedores de atención a largo plazo y post-aguda.',
        'resources.ama.title': 'Asociación Médica Estadounidense',
        'resources.ama.desc': 'La asociación más grande de médicos y estudiantes de medicina en los Estados Unidos.',
        'resources.alz.title': 'Asociación de Alzheimer',
        'resources.alz.desc': 'Organización de salud voluntaria líder en atención e investigación del Alzheimer.',
        'resources.everydayHealth.title': 'Salud Cotidiana',
        'resources.everydayHealth.desc': 'Información y recursos de salud en línea integrales.',
        'resources.medicineNet.title': 'MedicineNet',
        'resources.medicineNet.desc': 'Información de salud y médica producida por médicos.',
        'resources.healthLaw.title': 'Oficinas de Derecho de la Salud',
        'resources.healthLaw.desc': 'Recursos e información legal para asuntos relacionados con la atención médica.',
        'resources.floridaHealth.title': 'Industria de la Salud de Florida',
        'resources.floridaHealth.desc': 'Información sobre la industria y servicios de atención médica de Florida.',
        
        // Contact Section
        'contact.title': 'Contáctenos',
        'contact.subtitle': 'Póngase en contacto con nosotros para obtener más información sobre nuestros servicios o para programar una consulta.',
        'contact.name': 'Nombre Completo',
        'contact.email': 'Correo Electrónico',
        'contact.phone': 'Número de Teléfono',
        'contact.service': 'Servicio de Interés',
        'contact.servicePlaceholder': '¿Qué tipo de atención está buscando?',
        'contact.message': 'Mensaje',
        'contact.messagePlaceholder': 'Cuéntenos sobre sus necesidades',
        'contact.send': 'Enviar Mensaje',
        'contact.success': '¡Gracias por su mensaje! Nos pondremos en contacto con usted pronto.',
        'contact.officeHours': 'Horario de Oficina',
        'contact.officeHoursDesc': 'Lunes a Viernes, 9 AM – 5 PM',
        'contact.onCall': 'Enfermeras Disponibles 24/7',
        
        // CTA Section
        'cta.title': '¿Listo para Comenzar?',
        'cta.subtitle': 'Contáctenos hoy para obtener más información sobre nuestros servicios y cómo podemos ayudar a usted o a sus seres queridos. Nuestro equipo está listo para brindar la atención y el apoyo que necesita.',
        'cta.button': 'Contáctenos Ahora',
        
        // Footer
        'footer.brand': 'Patient\'s Choice',
        'footer.desc': 'Proporcionando servicios excepcionales de atención médica en el hogar con compasión y profesionalismo. Su salud y bienestar son nuestras principales prioridades.',
        'footer.quickLinks': 'Enlaces Rápidos',
        'footer.connect': 'Conéctese con Nosotros',
        'footer.copyright': '© 2025 Patient\'s Choice Home Health Care. Todos los derechos reservados.',
        
        // Testimonials Section
        'testimonials.title': 'Lo Que Dicen Nuestros Pacientes',
        'testimonials.subtitle': 'Escuche las experiencias de nuestros pacientes con Patient\'s Choice Home Health Care.',
        'testimonials.quote1': '"Después de la cirugía de mi mamá, Patients Choice vino a nuestra casa. Su enfermera fue increíble – compasiva, gentil y profesional. ¡Los recomiendo altamente!"',
        'testimonials.author1': 'María G.',
        'testimonials.quote2': '"Gracias a su programa de cuidado diabético, mis niveles de azúcar están bajo control. ¡He aprendido tanto!"',
        'testimonials.author2': 'Carlos M.',
        'testimonials.quote3': '"Me ayudaron a recuperarme cómodamente después de mi procedimiento cosmético. ¡Tan profesionales y discretos!"',
        'testimonials.author3': 'Emily S.',
        
        // Careers Section
        'careers.title': 'Carreras en Patient\'s Choice',
        'careers.subtitle': '¡Estamos contratando profesionales compasivos que quieren marcar la diferencia!',
        'careers.positions': 'Contratando Ahora',
        'careers.position1': 'RNs / LPNs',
        'careers.position2': 'Terapeutas Físicos y Ocupacionales',
        'careers.position3': 'CNAs / HHAs',
        'careers.position4': 'Trabajadores Sociales Médicos',
        'careers.position5': 'Coordinadores de Admisión',
        'careers.benefits': 'Beneficios',
        'careers.benefit1': 'Salario Competitivo',
        'careers.benefit2': 'Horario Flexible',
        'careers.benefit3': 'Ambiente de Trabajo de Apoyo',
        'careers.benefit4': 'Capacitación Continua',
        'careers.apply': 'Aplica Hoy',
        'careers.applyDesc': 'Envía tu currículum a <a href="mailto:careers@patientschoice.com" class="contact-link">careers@patientschoice.com</a>',
        
        // FAQs Section
        'faqs.title': 'Preguntas Frecuentes',
        'faqs.subtitle': 'Encuentre respuestas a preguntas comunes sobre nuestros servicios y atención.',
        'faqs.question1': '¿Qué es la atención médica en el hogar?',
        'faqs.answer1': 'Atención médica proporcionada en su hogar por enfermeras, terapeutas y asistentes bajo la dirección de un médico.',
        'faqs.question2': '¿Quién califica?',
        'faqs.answer2': 'Pacientes que están confinados en casa y requieren atención especializada intermitente.',
        'faqs.question3': '¿Está cubierto por el seguro?',
        'faqs.answer3': '¡Sí! Medicare, Medicaid y la mayoría de los seguros privados cubren servicios calificados.',
        'faqs.question4': '¿Ofrecen servicios de pago privado?',
        'faqs.answer4': 'Sí, especialmente para recuperación cosmética y atención de conserjería.',
        'faqs.question5': '¿Cómo empiezo?',
        'faqs.answer5': '¡Llámenos o haga que su médico envíe una referencia. Nosotros nos encargamos del resto!'
    }
};

// Function to set the language
function setLanguage(lang) {
    // Update HTML lang attribute
    document.documentElement.lang = lang;
    
    // Update all elements with data-translation-key attribute
    document.querySelectorAll('[data-translation-key]').forEach(element => {
        const key = element.getAttribute('data-translation-key');
        if (translations[lang] && translations[lang][key]) {
            // Use innerHTML for elements that contain HTML
            if (key === 'hero.title' || key === 'careers.applyDesc') {
                element.innerHTML = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    
    // Store language preference
    localStorage.setItem('preferredLanguage', lang);
    
    // Update active language button
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        }
    });
}

// Initialize language
document.addEventListener('DOMContentLoaded', () => {
    // Get preferred language from localStorage or default to English
    const preferredLanguage = localStorage.getItem('preferredLanguage') || 'en';
    setLanguage(preferredLanguage);
    
    // Add click event listeners to language buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
}); 