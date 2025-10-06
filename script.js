document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for nav links
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
      }
    });
  });

  // Highlight active section in nav (optional)
  const sections = document.querySelectorAll('.section, .sidebar');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (pageYOffset >= sectionTop - 100) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').substring(1) === current) {
        link.classList.add('active');
      }
    });
  });

  // Load data
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      // Sidebar
      document.getElementById('name').textContent = data.name;
      document.getElementById('role').textContent = data.role;
      document.getElementById('summary').textContent = data.summary;
      document.getElementById('profile-img').src = data.photo || 'https://via.placeholder.com/180/334155/60a5fa?text=NV';

      // Inline contact with icons (emoji-based)
      // Inline contact with SVG icons
const contactDiv = document.getElementById('contact-icons');
contactDiv.innerHTML = `
  <a href="mailto:${data.email}" title="Email">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
    <span class="label">Email</span>
  </a>
  <a href="tel:${data.phone}" title="Phone">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.79 21 3 14.21 3 6V5z" />
    </svg>
    <span class="label">Phone</span>
  </a>
  <a href="${data.linkedin}" target="_blank" title="LinkedIn">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
    <span class="label">LinkedIn</span>
  </a>
  <a href="${data.github}" target="_blank" title="GitHub">
    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
    <span class="label">GitHub</span>
  </a>
`;

      // Experience
      document.getElementById('experience-content').innerHTML = data.experiences.map(exp => `
        <div class="card">
          <div class="meta">
            <span>${exp.company}</span>
            <span>${exp.period}</span>
          </div>
          <h3>${exp.title}</h3>
          <ul style="padding-left: 1.25rem; margin-top: 0.5rem;">
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `).join('');

      // Projects
      document.getElementById('projects-content').innerHTML = data.projects.map(p => `
        <div class="card project">
          <div class="project-image">
            <img src="${p.image}" alt="${p.title}" onerror="this.style.display='none'; this.parentElement.innerHTML='<div style=\'padding:0.5rem;text-align:center;color:#cbd5e1\'>${p.title}</div>'">
          </div>
          <div class="project-content">
            <h3>${p.title}</h3>
            <p>${p.description}</p>
            <div class="tags">
              ${p.tech.map(t => `<span>${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('');

      // Awards
      document.getElementById('awards-list').innerHTML = data.awards.map(a => `<li>${a}</li>`).join('');

      // Education
      document.getElementById('education-content').innerHTML = data.education.map(edu => `
        <div class="card education-item">
          <h3>${edu.degree}</h3>
          <p><strong>${edu.school}</strong> — ${edu.location}</p>
          <p><em>${edu.period}</em></p>
          ${edu.gpa ? `<p><strong>GPA:</strong> ${edu.gpa}</p>` : ''}
          ${edu.coursework ? `<p><strong>Coursework:</strong> ${edu.coursework.join(', ')}</p>` : ''}
        </div>
      `).join('');

      // Skills
// Categorized Skills
const skillsContainer = document.getElementById('skills-categories');
let skillsHTML = '';

// Define skill categories (from your resume)
const skillGroups = {
  "Languages": ["Python", "Go", "Java", "C#", "C++", "JavaScript", "HTML/CSS"],
  "AI/ML & Libraries": ["PyTorch", "TensorFlow", "LLMs", "RAG", "OpenCV", "BERT", "Scikit-Learn", "Pandas", "NumPy"],
  "Frameworks": ["FastAPI", "Flask", "ASP.NET", ".NET Core", "React.js", "Node.js", "Express.js"],
  "Databases": ["PostgreSQL", "MySQL", "Elasticsearch", "Kibana", "NeptuneDB", "MongoDB"],
  "DevOps & Cloud": ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD", "Terraform", "Git", "RabbitMQ", "Redis"],
  "MLOps & Concepts": ["MLOps", "Airflow", "Kubeflow", "LLM Pipelines", "Generative AI", "Simulation"]
};

// Map icons to categories
const categoryIcons = {
  "Languages": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>',
  "AI/ML & Libraries": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>',
  "Frameworks": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h8a4 4 0 014-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4H7z" /></svg>',
  "Databases": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>',
  "DevOps & Cloud": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4 4 0 003 15z" /></svg>',
  "MLOps & Concepts": '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>'
};

for (const [category, skills] of Object.entries(skillGroups)) {
  const icon = categoryIcons[category] || '<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>';
  skillsHTML += `
    <div class="skill-category">
      <h3>${icon} ${category}</h3>
      <div class="skills-grid">
        ${skills.map(skill => `<div class="skill-item">${skill}</div>`).join('')}
      </div>
    </div>
  `;
}

skillsContainer.innerHTML = skillsHTML;
});
});