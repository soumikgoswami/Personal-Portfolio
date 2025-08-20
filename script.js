// Portfolio Data
const portfolioData = {
    name: "Soumik Goswami",
    contact: {
        phone: "+91-9875486803",
        email: "soumikgoswami58@gmail.com",
        linkedin: "https://www.linkedin.com/in/soumik-goswami-01916028a/",
        github: "https://github.com/soumikgoswami",
    },
    objective: "Looking for an entry-level position as a Software Developer where I can apply my programming, problem-solving, and web development skills to contribute to organizational growth while enhancing my professional expertise.",
    education: [
        { degree: "Bachelor of Technology in Computer Science and Engineering", institution: "University of Engineering and Management, Kolkata", cgpa: "8.96", years: "2022-2026" },
        { degree: "Higher Secondary Education (ISC)", institution: "St. Luke's Day School", cgpa: "96.5%", years: "2021-2022" },
        { degree: "Secondary Education (ICSE)", institution: "St. Luke's Day School", cgpa: "94.5%", years: "2019-2020" },
    ],
    // ...existing code...
projects: [
    {
        title: "Responsive Restaurant Website",
        tech: "HTML, CSS, JavaScript",
        year: "2024",
        description: "Built a responsive multi-page website with sections for home, menu, about, and contact to showcase restaurant services. Enhanced UI/UX with interactive navigation, image galleries, and smooth scrolling for better engagement. Ensured cross-device compatibility and clean layout to provide a professional online presence.",
        github: "https://github.com/soumikgoswami/Restaurant_Website"
    },
    {
        title: "Water Quality Prediction Model",
        tech: "Python, Pandas, Scikit-learn, Flask",
        year: "2025",
        description: "Developed a multi-output regression model using Random Forest to predict key water quality parameters from historical data. Performed preprocessing and exploratory analysis to handle missing values and extract patterns. Deployed the trained model via a Flask web app for real-time prediction.",
        github: "https://github.com/soumikgoswami/Water_Quality_Prediction"
    },
    {
        title: "Dynamic Image Captioning Tool",
        tech: "HTML, CSS, JavaScript",
        year: "2024",
        description: "Developed a lightweight web app to generate custom memes by overlaying user text on images. Showcased front-end skills with DOM manipulation, event handling, and real-time rendering. Gained hands-on experience in front-end interactivity, client-side rendering, and UI customization.",
        github: "https://github.com/soumikgoswami/Meme-Generator"
    }
],
// ...existing code...,
    skills: {
        "Programming Languages": ["Python", "Java", "SQL", "JavaScript"],
        "Libraries": ["NumPy", "Pandas", "Matplotlib", "Seaborn", "PyTorch", "TensorFlow"],
        "Web Development": ["HTML", "CSS", "JavaScript", "Bootstrap"],
        "Version Control": ["Git", "GitHub"],
        "Others": ["DSA", "Object-oriented Programming", "DBMS", "Computer Networks", "Operating System"],
    },
    hobbies: ["Playing and Watching Football", "Listening to Music"],
    // ...existing code...
certifications: [
    { 
        name: "Introduction to Artificial Intelligence", 
        year: "2024", 
        source: "Infosys Springboard",
        link: "https://drive.google.com/file/d/1lKxzHQsceT12NQbRAcFP59bEXkb5V-f_/view?usp=drive_link"
    },
    { 
        name: "Fundamentals of Java by Abdul Bari", 
        year: "2023", 
        source: "Udemy",
        link: "https://drive.google.com/file/d/1obrVTWu_m2HP1vgzspcb4hrYE6zgjHQH/view?usp=drive_link"
    },
    { 
        name: "Artificial Intelligence and Data Analytics", 
        year: "2025", 
        source: "Edunet(AICTE approved)",
        link: "https://drive.google.com/file/d/1qACM_c2YPL9So6Hi-sWYQyT8T38kLL1h/view?usp=drive_link"
    },
],
// ...existing code...
};

// DOM Elements
const sections = document.querySelectorAll('section');
const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const scrollToTopBtn = document.getElementById('scroll-to-top');

// Show only the selected section
const showSection = (id) => {
    sections.forEach(section => {
        section.classList.add('hidden');
    });
    const targetSection = document.getElementById(id);
    if (targetSection) {
        targetSection.classList.remove('hidden');
    }
    // Hide mobile menu on navigation
    if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
    }
};

// Attach navigation event listeners
const attachNavListeners = () => {
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').replace('#', '');
            showSection(pageId);
        });
    });
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const pageId = this.getAttribute('href').replace('#', '');
            showSection(pageId);
        });
    });
};

// Populate Home section
// ...existing code...

const populateHome = () => {
    document.getElementById('name').textContent = portfolioData.name;
    document.getElementById('objective').textContent = portfolioData.objective;
    const contactLinks = document.getElementById('contact-links');
    contactLinks.innerHTML = `
        <a href="mailto:${portfolioData.contact.email}" class="text-blue-400 hover:text-blue-500 transition-colors duration-300" aria-label="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
        </a>
        <a href="${portfolioData.contact.linkedin}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500 transition-colors duration-300" aria-label="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
        </a>
        <a href="${portfolioData.contact.github}" target="_blank" rel="noopener noreferrer" class="text-blue-400 hover:text-blue-500 transition-colors duration-300" aria-label="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3.2-1 6.5-1.6 6.5-7.4a5.3 5.3 0 0 0-1.4-3.5c.3-.8.3-2.1 0-2.8-.5-.1-1.3-.2-2.5.8a10.2 10.2 0 0 0-5.6-1.5c-2.2 0-4.3.5-5.6 1.5-1.1-1-1.9-1.2-2.5-.8 0 .7 0 2 0 2.8a5.3 5.3 0 0 0-1.4 3.5c0 5.8 3.3 6.4 6.5 7.4-.9.6-1.6 1.6-1.6 3.2v4c0 1.3-1.4 1.9-2.2 1.9a.8.8 0 0 1-.8-.8v-3.8l-1.4.6a2.6 2.6 0 0 1-.8.2c-.5.1-.9.3-1.4-.2s-.9-.8-1.5-1.2c-.4-.3-.8-.5-1.2-.5-.4 0-.8-.1-1.2-.1-.4-.1-.8-.1-1.2-.1-1.5.1-2.4 1-2.4 2.8a6.5 6.5 0 0 0 .5 2.5c.4.9 1.1 1.7 2 2.3.8.6 1.8.9 3 1.2s2.5.4 3.6.4c1.1 0 2.2-.2 3.3-.4 1.1-.3 2.1-.6 3-1.2.9-.6 1.6-1.4 2-2.3.5-1.2.5-2.5.5-3.8v-3.8c0-.8-1-1.4-2.2-1.4h-2.2c-.5 0-1-.1-1.6-.2-1.4-.6-2.6-.9-3.8-.9-1.2 0-2.4.2-3.6.4-1.2.2-2.3.5-3.3.8-.8.3-1.4.5-2.1.8-.4.2-.8.4-1.2.6-.4.2-.8.3-1.2.4-.4.1-.8.1-1.2 0-.4-.1-.8-.2-1.2-.3-.4-.1-.8-.2-1.2-.3-1.5-.6-2.8-1.1-3.6-1.4a.8.8 0 0 0-.8-.8c-.6 0-1.2 0-1.8.2-1.6.4-2.7 1.4-3.6 2.7-.9 1.3-1.4 2.7-1.4 4.3v4.6c0 1.2 1.4 1.7 2.2 1.7a.8.8 0 0 1 .8-.8v-3.8a.8.8 0 0 0-.8-.8c-.6 0-1.2-.2-1.8-.6-.6-.4-1.1-.9-1.5-1.5-.4-.6-.7-1.2-.8-1.9-.1-.7-.2-1.4-.2-2.2 0-.8 0-1.6.2-2.4.2-.8.4-1.5.8-2.2.4-.7.9-1.3 1.5-1.9.6-.6 1.2-1.1 1.9-1.5.7-.4 1.4-.7 2.2-.9.8-.2 1.6-.3 2.4-.3h.8a2.5 2.5 0 0 1 2.4 2.4v1.6c0 .8.6 1.4 1.4 1.4h1.6c.8 0 1.4-.6 1.4-1.4v-1.6a2.5 2.5 0 0 1 2.4-2.4h.8c.8 0 1.6.1 2.4.3.8.2 1.5.5 2.2
        </a>
    `;
};
// ...existing code...
// Populate Projects section
const populateProjects = () => {
    const container = document.getElementById('projects-container');
    if (!container) return;
    container.innerHTML = portfolioData.projects.map(project => `
    <div class="bg-gray-800 p-6 rounded-2xl shadow-lg flex flex-col h-full">
        <h3 class="text-xl font-semibold text-blue-300 mb-2">${project.title}</h3>
        <span class="text-sm text-gray-400 mb-2">${project.tech} &bull; ${project.year}</span>
        <p class="text-gray-200 mb-4">${project.description}</p>
        ${project.github ? `<a href="${project.github}" target="_blank" class="text-blue-400 hover:underline mt-auto">GitHub Repo</a>` : ""}
    </div>
`).join('');
};

// Populate Skills section
const populateSkills = () => {
    const container = document.getElementById('skills-container');
    if (!container) return;
    container.innerHTML = Object.entries(portfolioData.skills).map(([category, skills]) => `
        <div class="bg-gray-800 p-6 rounded-2xl shadow-lg min-w-[220px]">
            <h4 class="text-lg font-semibold text-blue-300 mb-2">${category}</h4>
            <ul class="list-disc list-inside text-gray-200">
                ${skills.map(skill => `<li>${skill}</li>`).join('')}
            </ul>
        </div>
    `).join('');
};

// Populate Education section
const populateEducation = () => {
    const container = document.getElementById('education-container');
    if (!container) return;
    container.innerHTML = portfolioData.education.map(edu => `
        <div class="mb-4">
            <div class="font-semibold text-blue-200">${edu.degree}</div>
            <div class="text-gray-300">${edu.institution}</div>
            <div class="text-gray-400 text-sm">CGPA: ${edu.cgpa} &bull; Years: ${edu.years}</div>
        </div>
    `).join('');
};

// Populate Certifications section
const populateCertifications = () => {
    const container = document.getElementById('certifications-container');
    if (!container) return;
    // ...existing code...
container.innerHTML = portfolioData.certifications.map(cert => `
    <li>
        <span class="font-semibold text-blue-200">${cert.name}</span>
        <span class="text-gray-400">(${cert.year}, ${cert.source})</span>
        ${cert.link ? `<a href="${cert.link}" target="_blank" class="text-blue-400 hover:underline ml-2">View Certificate</a>` : ""}
    </li>
`).join('');
// ...existing code...
};

// Populate Hobbies section
const populateHobbies = () => {
    const container = document.getElementById('hobbies-container');
    if (!container) return;
    container.innerHTML = portfolioData.hobbies.map(hobby => `
        <span class="bg-blue-900 text-blue-200 px-3 py-1 rounded-full">${hobby}</span>
    `).join('');
};

// Scroll to top button functionality
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            scrollToTopBtn.classList.remove('hidden');
        } else {
            scrollToTopBtn.classList.add('hidden');
        }
    });
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}

// Mobile menu toggle functionality
const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.classList.toggle('hidden');
    closeIcon.classList.toggle('hidden');
};
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', toggleMobileMenu);
}

// Initialize: show home page, populate content, and set up navigation
window.onload = () => {
    showSection('home');
    populateHome();
    populateProjects();
    populateSkills();
    populateEducation();
    populateCertifications();
    populateHobbies();
    attachNavListeners();
};