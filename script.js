document.addEventListener('DOMContentLoaded', () => {
  fetch('data.json')
    .then(res => res.json())
    .then(data => {
      // Sidebar
      document.getElementById('name').textContent = data.name;
      document.getElementById('role').textContent = data.title;
      document.getElementById('summary').textContent = data.summary;

      const contact = document.getElementById('contact-links');
      contact.innerHTML = `
        <a href="mailto:${data.email}" title="Email">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span>Email</span>
        </a>
        <a href="tel:${data.phone}" title="Phone">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.79 21 3 14.21 3 6V5z" />
          </svg>
          <span>Phone</span>
        </a>
        <a href="${data.linkedin}" target="_blank" title="LinkedIn">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
          </svg>
          <span>LinkedIn</span>
        </a>
        <a href="${data.github}" target="_blank" title="GitHub">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
          </svg>
          <span>GitHub</span>
        </a>
      `;

      // Experience
      const expHTML = data.experience.map(exp => `
        <div class="card">
          <h3>${exp.role}</h3>
          <p class="meta"><strong>${exp.company}</strong> — ${exp.location} • ${exp.period}</p>
          <ul>
            ${exp.highlights.map(h => `<li>${h}</li>`).join('')}
          </ul>
        </div>
      `).join('');
      document.getElementById('experience-content').innerHTML = expHTML;

      // Projects
      const projHTML = data.projects.map(p => `
        <div class="card">
          <h3>${p.title}</h3>
          <p class="meta">${p.period}</p>
          <div class="tags">
            ${p.tags.map(tag => `<span>${tag}</span>`).join('')}
          </div>
          <p>${p.description}</p>
          <p><strong>Impact:</strong></p>
          <ul>
            ${p.impact.map(i => `<li>${i}</li>`).join('')}
          </ul>
          <p><strong>Key Learnings:</strong></p>
          <ul>
            ${p.learnings.map(l => `<li>${l}</li>`).join('')}
          </ul>
          <div class="project-links">
            ${p.links.map(link => `<a href="${link.url}" target="_blank">${link.label}</a>`).join('')}
          </div>
        </div>
      `).join('');
      document.getElementById('projects-content').innerHTML = projHTML;

      // Awards
      const awardsHTML = data.awards.map(a => `<li>${a}</li>`).join('');
      document.getElementById('awards-list').innerHTML = awardsHTML;

      // Education
      const eduHTML = data.education.map(edu => `
        <div class="card">
          <h3>${edu.degree}</h3>
          <p><strong>${edu.school}</strong> — ${edu.location}</p>
          <p><em>${edu.period}</em></p>
          ${edu.gpa ? `<p><strong>GPA:</strong> ${edu.gpa}</p>` : ''}
          ${edu.coursework ? `<p><strong>Coursework:</strong> ${edu.coursework.join(', ')}</p>` : ''}
        </div>
      `).join('');
      document.getElementById('education-content').innerHTML = eduHTML;

      // Skills
      let skillsHTML = '';
      for (const [category, items] of Object.entries(data.skills)) {
        skillsHTML += `
          <div class="skill-category">
            <h3>${category}</h3>
            <p>${items.join(', ')}</p>
          </div>
        `;
      }
      document.getElementById('skills-content').innerHTML = skillsHTML;
    })
    .catch(err => {
      console.error('Failed to load data.json:', err);
      document.body.innerHTML = '<div style="color:white;text-align:center;padding:3rem;">Error loading portfolio.</div>';
    });
});