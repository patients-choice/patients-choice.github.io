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
        'services.subtitle': 'Patients Choice offers a wide range of Medicare-certified and insurance-covered home health services, plus private-pay packages for postoperative and cosmetic surgery recovery. Professional nursing care in the comfort of your home.',
        
        'services.skilledNursing': 'Skilled Nursing',
        'services.skilledNursing.bullet1': 'Diabetic Care and Teaching',
        'services.skilledNursing.bullet2': 'Respiratory Disorders (COPD)',
        'services.skilledNursing.bullet3': 'IV Therapy',
        'services.skilledNursing.bullet4': 'Rehabilitation Guidance',
        'services.skilledNursing.bullet5': 'Administering Injections',
        'services.skilledNursing.bullet6': 'Pain Relief / Pain Management',
        'services.skilledNursing.bullet7': 'Incontinence Management',
        'services.skilledNursing.bullet8': 'Vital Signs Monitoring',
        'services.skilledNursing.bullet9': 'Catheter Care and Maintenance',
        'services.skilledNursing.bullet10': 'Wound VAC Therapy',
        'services.skilledNursing.bullet11': 'Dressing Changes',

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

        'services.physicalTherapy': 'Physical Therapy',
        'services.physicalTherapy.bullet1': 'Expert therapy to help you regain strength and mobility',
        'services.physicalTherapy.bullet2': 'Post-Surgery Rehabilitation',
        'services.physicalTherapy.bullet3': 'Strength Training',
        'services.physicalTherapy.bullet4': 'Balance Improvement',
        'services.physicalTherapy.bullet5': 'Mobility Enhancement',
        'services.physicalTherapy.bullet6': 'Pain Management',
        'services.physicalTherapy.bullet7': 'Gait Training',

        'services.occupationalTherapy': 'Occupational Therapy',
        'services.occupationalTherapy.bullet1': 'Assistance in regaining independence in daily activities',
        'services.occupationalTherapy.bullet2': 'Daily Living Activities Training',
        'services.occupationalTherapy.bullet3': 'Home Safety Assessment',
        'services.occupationalTherapy.bullet4': 'Adaptive Equipment Training',
        'services.occupationalTherapy.bullet5': 'Fine Motor Skills Development',
        'services.occupationalTherapy.bullet6': 'Energy Conservation Techniques',

        'services.homeHealthAide': 'Home Health Aide',
        'services.homeHealthAide.bullet1': 'Compassionate personal care and assistance with daily activities',
        'services.homeHealthAide.bullet2': 'Personal Hygiene Assistance',
        'services.homeHealthAide.bullet3': 'Medication Reminders',
        'services.homeHealthAide.bullet4': 'Light Housekeeping',
        'services.homeHealthAide.bullet5': 'Meal Preparation',
        'services.homeHealthAide.bullet6': 'Companionship',

        'services.medicalSocialWorker': 'Medical Social Worker',
        'services.medicalSocialWorker.bullet1': 'Support in navigating healthcare and community resources',
        'services.medicalSocialWorker.bullet2': 'Resource Coordination',
        'services.medicalSocialWorker.bullet3': 'Care Planning',
        'services.medicalSocialWorker.bullet4': 'Family Support',
        'services.medicalSocialWorker.bullet5': 'Community Service Connection',
        'services.medicalSocialWorker.bullet6': 'Healthcare Navigation',

        'services.note': 'All services are delivered under the supervision of your physician and based on your personalized care plan.',
        
        // Insurance Section
        'insurance.title': 'Insurance',
        'insurance.subtitle': 'Patients Choice accepts the following plans:',
        'insurance.medicare': 'Medicare & Medicare Advantage',
        'insurance.medicareDesc': 'We accept Original Medicare and Medicare Advantage plans',
        'insurance.private': 'Private Insurance',
        'insurance.privateDesc': 'We work with most major insurance providers',
        'insurance.military': 'Military & Government',
        'insurance.militaryDesc': 'Serving our military and government personnel',
        'insurance.managed': 'Managed Care',
        'insurance.managedDesc': 'Comprehensive managed care plans',
        'insurance.longTerm': 'Long Term Care Plans',
        'insurance.longTermDesc': 'Supporting your long-term care needs',

        'insurance.longTermPlans': [
            'American Elder Care',
            'Amerigroup Florida',
            'Coventry Health Care of Florida',
            'Humana Medical Plan (Florida Comfort Choice)',
            'Independent Living',
            'Little Havana Nutrition and Activities Center',
            'Molina Complete Care',
            'Sunshine Health Plan'
        ],

        'insurance.acceptedPlans': [
            'Advantage Health Plan',
            'Aetna Health Plans',
            'Aetna Medicare Advantage',
            'Amerigroup',
            'Amerivantage',
            'Argus Home Infusion (PDP)',
            'Assurant',
            'AvMed Health Plans',
            'Beech Street',
            'Best Choice',
            'Better Health',
            'Blue Cross Blue Shield (BCBS)',
            'Blue Cross, Blue Shield',
            'CarePlus',
            'Centene',
            'CIGNA',
            'Cofinity',
            'Corvel Corporation',
            'Coventry',
            'Coventry Health Care',
            'Dimension Health / Evolutions',
            'Florida Community Care',
            'Florida Health Care Plus',
            'Focus Healthcare Management',
            'Freedom Health',
            'Great West',
            'Health Net',
            'Healthease',
            'HealthSun',
            'Healthy Kids',
            'Humana',
            'Little Havana Activities and Nutrition Centers',
            'LoveLace',
            'Magellan',
            'Medica Healthcare Plans',
            'Medicare (Original)',
            'Molina Healthcare',
            'MSC Care Management',
            'Neighborhood Health Plan',
            'Nursing Home Diversion Waiver Programs',
            'Optum Health',
            'Optum VA',
            'Physicians United Plan',
            'Preferred Medical Plan',
            'Prestige Health Plan',
            'Quality Health Plan',
            'South Florida',
            'Staywell',
            'TRICARE South Region',
            'United Behavioral Health / Optum Health',
            'United Healthcare',
            'VSHP',
            'WellCare Health Plans'
        ],

        'insurance.managedCarePlans': [
            'Florida Community Health',
            'Simply Healthcare',
            'Sunshine Health',
            'Sunshine State Health Plan (Centene)'
        ],

        'insurance.militaryPlans': [
            'Optum VA',
            'Tricare (Military Health)',
            'Humana Military'
        ],

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
        'footer.address': 'Address',
        'footer.hours': 'Office Hours',
        'footer.onCall': 'On-Call Nurses Available 24/7',
        
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
        'careers.contact': 'Interested in being a part of our team?',
        'careers.contactDesc': 'Contact us now for more information!',
        
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
        'faqs.answer5': 'Call us or have your doctor send a referral. We\'ll handle the rest!',

        // Contact Form Placeholders and Labels
        'contact.name.placeholder': 'Enter your full name',
        'contact.email.placeholder': 'Enter your email address',
        'contact.phone.placeholder': 'Enter your phone number',
        'contact.message.placeholder': 'Tell us about your needs',
        
        // Contact Form Service Options
        'contact.service.optgroup.nursing': 'Skilled Nursing Services',
        'contact.service.option.nursing': 'Skilled Nursing Care',
        'contact.service.option.medication': 'Medication Management',
        'contact.service.option.wound': 'Wound Care',
        'contact.service.option.monitoring': 'Health Monitoring',
        
        'contact.service.optgroup.therapy': 'Therapy Services',
        'contact.service.option.physical': 'Physical Therapy',
        'contact.service.option.occupational': 'Occupational Therapy',
        
        'contact.service.optgroup.personal': 'Personal Care Services',
        'contact.service.option.daily': 'Daily Activities Assistance',
        'contact.service.option.hygiene': 'Personal Hygiene Care',
        'contact.service.option.mobility': 'Mobility Assistance',
        
        'contact.service.optgroup.other': 'Other Services',
        'contact.service.option.caregiver': 'Caregiver Relief',
        'contact.service.option.coordination': 'Care Coordination',
        'contact.service.option.other': 'Other Services',

        'contact.address': 'Address',
        'contact.license': 'License #299992327',

        // Contact Information
        'contact.info.phone': '(305) 225-5353',
        'contact.info.fax': '(305) 225-5306',
        'contact.info.email': 'info@patients-choice.com',
        'contact.info.careers_email': 'careers@patientschoice.com',
        'contact.info.license': 'License #299992327',
        'contact.info.address.line1': '7205 NW 19th Street, Suite 201',
        'contact.info.address.line2': 'Miami, Florida 33126',
        'contact.info.hours': 'Monday–Friday, 9 AM – 5 PM',
        'contact.info.callToday': 'Call Today:',
        'contact.info.faxLabel': 'Fax:',
        'contact.info.emailLabel': 'Email:',
        'contact.info.companyName': 'Patients Choice Home Health Agency',
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
        'services.subtitle': 'Patients Choice ofrece una amplia gama de servicios de salud en el hogar certificados por Medicare y cubiertos por seguros, además de paquetes de pago privado para la recuperación postoperatoria y de cirugía estética. Atención de enfermería profesional en la comodidad de su hogar.',
        
        'services.skilledNursing': 'Enfermería Especializada',
        'services.skilledNursing.bullet1': 'Cuidado y Educación Diabética',
        'services.skilledNursing.bullet2': 'Trastornos Respiratorios (EPOC)',
        'services.skilledNursing.bullet3': 'Terapia IV',
        'services.skilledNursing.bullet4': 'Guía de Rehabilitación',
        'services.skilledNursing.bullet5': 'Administración de Inyecciones',
        'services.skilledNursing.bullet6': 'Alivio del Dolor / Manejo del Dolor',
        'services.skilledNursing.bullet7': 'Manejo de la Incontinencia',
        'services.skilledNursing.bullet8': 'Monitoreo de Signos Vitales',
        'services.skilledNursing.bullet9': 'Cuidado y Mantenimiento de Catéteres',
        'services.skilledNursing.bullet10': 'Terapia VAC para Heridas',
        'services.skilledNursing.bullet11': 'Cambios de Vendajes',

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

        'services.physicalTherapy': 'Terapia Física',
        'services.physicalTherapy.bullet1': 'Terapia experta para ayudarte a recuperar fuerza y movilidad',
        'services.physicalTherapy.bullet2': 'Rehabilitación Post-Quirúrgica',
        'services.physicalTherapy.bullet3': 'Entrenamiento de Fuerza',
        'services.physicalTherapy.bullet4': 'Mejora del Equilibrio',
        'services.physicalTherapy.bullet5': 'Mejora de la Movilidad',
        'services.physicalTherapy.bullet6': 'Manejo del Dolor',
        'services.physicalTherapy.bullet7': 'Entrenamiento de la Marcha',

        'services.occupationalTherapy': 'Terapia Ocupacional',
        'services.occupationalTherapy.bullet1': 'Asistencia para recuperar la independencia en actividades diarias',
        'services.occupationalTherapy.bullet2': 'Entrenamiento en Actividades de la Vida Diaria',
        'services.occupationalTherapy.bullet3': 'Evaluación de Seguridad en el Hogar',
        'services.occupationalTherapy.bullet4': 'Entrenamiento en Equipos Adaptativos',
        'services.occupationalTherapy.bullet5': 'Desarrollo de Habilidades Motoras Finas',
        'services.occupationalTherapy.bullet6': 'Técnicas de Conservación de Energía',

        'services.homeHealthAide': 'Asistente de Salud en el Hogar',
        'services.homeHealthAide.bullet1': 'Cuidado personal compasivo y asistencia con actividades diarias',
        'services.homeHealthAide.bullet2': 'Asistencia con la Higiene Personal',
        'services.homeHealthAide.bullet3': 'Recordatorios de Medicamentos',
        'services.homeHealthAide.bullet4': 'Limpieza Ligera',
        'services.homeHealthAide.bullet5': 'Preparación de Comidas',
        'services.homeHealthAide.bullet6': 'Compañía',

        'services.medicalSocialWorker': 'Trabajador Social Médico',
        'services.medicalSocialWorker.bullet1': 'Apoyo en la navegación de recursos sanitarios y comunitarios',
        'services.medicalSocialWorker.bullet2': 'Coordinación de Recursos',
        'services.medicalSocialWorker.bullet3': 'Planificación de Cuidados',
        'services.medicalSocialWorker.bullet4': 'Apoyo Familiar',
        'services.medicalSocialWorker.bullet5': 'Conexión con Servicios Comunitarios',
        'services.medicalSocialWorker.bullet6': 'Navegación del Sistema de Salud',

        'services.note': 'Todos los servicios se brindan bajo la supervisión de su médico y según su plan de atención personalizado.',
        
        // Insurance Section
        'insurance.title': 'Seguros',
        'insurance.subtitle': 'Patients Choice acepta los siguientes planes:',
        'insurance.medicare': 'Medicare y Medicare Advantage',
        'insurance.medicareDesc': 'Aceptamos Medicare Original y planes Medicare Advantage',
        'insurance.private': 'Seguros Privados',
        'insurance.privateDesc': 'Trabajamos con la mayoría de los proveedores de seguros principales',
        'insurance.military': 'Militar y Gubernamental',
        'insurance.militaryDesc': 'Sirviendo a nuestro personal militar y gubernamental',
        'insurance.managed': 'Atención Administrada',
        'insurance.managedDesc': 'Planes integrales de atención administrada',
        'insurance.longTerm': 'Planes de Cuidado a Largo Plazo',
        'insurance.longTermDesc': 'Apoyando sus necesidades de cuidado a largo plazo',
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
        'footer.address': 'Dirección',
        'footer.hours': 'Horario de Oficina',
        'footer.onCall': 'Enfermeras Disponibles 24/7',
        
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
        'careers.contact': '¿Interesado en ser parte de nuestro equipo?',
        'careers.contactDesc': '¡Contáctanos ahora para más información!',
        
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
        'faqs.answer5': '¡Llámenos o haga que su médico envíe una referencia. Nosotros nos encargamos del resto!',

        // Contact Form Placeholders and Labels
        'contact.name.placeholder': 'Ingrese su nombre completo',
        'contact.email.placeholder': 'Ingrese su correo electrónico',
        'contact.phone.placeholder': 'Ingrese su número de teléfono',
        'contact.message.placeholder': 'Cuéntenos sobre sus necesidades',
        
        // Contact Form Service Options
        'contact.service.optgroup.nursing': 'Servicios de Enfermería Especializada',
        'contact.service.option.nursing': 'Cuidado de Enfermería Especializada',
        'contact.service.option.medication': 'Manejo de Medicamentos',
        'contact.service.option.wound': 'Cuidado de Heridas',
        'contact.service.option.monitoring': 'Monitoreo de Salud',
        
        'contact.service.optgroup.therapy': 'Servicios de Terapia',
        'contact.service.option.physical': 'Terapia Física',
        'contact.service.option.occupational': 'Terapia Ocupacional',
        
        'contact.service.optgroup.personal': 'Servicios de Cuidado Personal',
        'contact.service.option.daily': 'Asistencia en Actividades Diarias',
        'contact.service.option.hygiene': 'Cuidado de Higiene Personal',
        'contact.service.option.mobility': 'Asistencia de Movilidad',
        
        'contact.service.optgroup.other': 'Otros Servicios',
        'contact.service.option.caregiver': 'Relevo del Cuidador',
        'contact.service.option.coordination': 'Coordinación de Cuidados',
        'contact.service.option.other': 'Otros Servicios',

        'contact.address': 'Dirección',
        'contact.license': 'Licencia #299992327',

        // Contact Information
        'contact.info.phone': '(305) 225-5353',
        'contact.info.fax': '(305) 225-5306',
        'contact.info.email': 'info@patients-choice.com',
        'contact.info.careers_email': 'careers@patientschoice.com',
        'contact.info.license': 'Licencia #299992327',
        'contact.info.address.line1': '7205 NW 19th Street, Suite 201',
        'contact.info.address.line2': 'Miami, Florida 33126',
        'contact.info.hours': 'Lunes–Viernes, 9 AM – 5 PM',
        'contact.info.callToday': 'Llame Hoy:',
        'contact.info.faxLabel': 'Fax:',
        'contact.info.emailLabel': 'Correo Electrónico:',
        'contact.info.companyName': 'Patients Choice Home Health Agency',
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
            // Handle optgroup labels specially
            if (element.tagName.toLowerCase() === 'optgroup') {
                element.label = translations[lang][key];
            }
            // Use innerHTML for elements that contain HTML
            else if (key === 'hero.title' || key === 'careers.applyDesc') {
                element.innerHTML = translations[lang][key];
            }
            // Handle placeholders
            else if (element.hasAttribute('placeholder')) {
                element.placeholder = translations[lang][key];
            }
            // Default text content update
            else {
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