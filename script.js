/* ═══════════════ RESUME DATA MAPPING ═══════════════ */
const skills = [
  { icon:'☕', name:'Java Programming', pct:92, desc:'Strong command of object-oriented principles, enterprise patterns, and advanced backend logic execution[cite: 1].' },
  { icon:'⚙️', name:'C & ADA', pct:88, desc:'Proficient in systems-level programming, Algorithms and Data Structures (ADA), and memory architecture[cite: 1].' },
  { icon:'🌐', name:'Web Technologies', pct:90, desc:'Skilled in HTML, CSS, JavaScript, responsive design interfaces, and modern layout structures[cite: 1].' },
  { icon:'⚡', name:'Databases & Tools', pct:85, desc:'Experienced with DBMS, SQL, MongoDB, GitHub version control, Figma, and Canva design environments[cite: 1].' },
  { icon:'📊', name:'Productivity Software', pct:90, desc:'Advanced expertise across Microsoft PowerPoint, Excel, and Word for professional analytical reporting[cite: 1].' },
  { icon:'🎯', name:'Core Competencies', pct:92, desc:'Specialized in Data Structures & Algorithms (DSA), system logic architecture, and prompt engineering[cite: 1].' },
  { icon:'🐧', name:'Professional Skills', pct:88, desc:'Strong leadership coordination capabilities, clear technical communication, and cross-functional team execution[cite: 1].' },
];

const projects = [
  { 
    emoji:'🌐', 
    tag:'Full-Stack AI Platform', 
    name:'HeritageSphere - AI-Integrated Cultural Explorer', 
    techs:['HTML','CSS','JavaScript','Conversational AI','Geospatial Mapping'], 
    desc:'Developed a full-stack cultural platform featuring an interactive map of India with state-specific real-time engagement and color-themed immersion profiles[cite: 1]. Merged geospatial data with conversational AI and camera-driven features to provide automated chatbot assistance and interactive exploration[cite: 1].' 
  },
  { 
    emoji:'📋', 
    tag:'Backend Systems', 
    name:'Student CIE Results Monitoring and Messaging System', 
    techs:['Core Java','Multithreading'], 
    desc:'Engineered a parallel performance processing framework in Java to manage, synthesize, and calculate student academic evaluations concurrently[cite: 1]. Implemented advanced multithreading principles, manually extending the Thread class and managing execution lifecycles using start(), sleep(), and join() methods to compile unified summary reports[cite: 1].' 
  },
  { 
    emoji:'⚡', 
    tag:'Web App', 
    name:'Queue Management System', 
    techs:['Python Flask','JavaScript','SQL'], 
    desc:'Developed a digital application to replace manual queues, minimizing service delays and optimizing real-time data flow[cite: 1]. Implemented asynchronous frontend-backend communication to enable seamless data updates without page refreshes[cite: 1].' 
  },
  { 
    emoji:'🏛️', 
    tag:'Data Tracking', 
    name:'Temple Receipt Management System', 
    techs:['Core Programming','Data Structures'], 
    desc:'Developed a digital tracking platform to record, manage, and audit donation receipts and minimize paperwork[cite: 1]. Optimized underlying data organization for rapid administrative record retrieval[cite: 1].' 
  },
  { 
    emoji:'🧮', 
    tag:'Desktop Utility', 
    name:'Scientific & Standard Calculator', 
    techs:['Java','C','Modular Design'], 
    desc:'Created desktop calculator applications supporting arithmetic, trigonometric, and advanced functions[cite: 1]. Applied robust input validation and modular design principles to ensure calculation accuracy[cite: 1].' 
  },
  { 
    emoji:'🎮', 
    tag:'Interactive Web', 
    name:'Rock Paper Scissor Game', 
    techs:['HTML','CSS','JavaScript'], 
    desc:'Built an interactive web-based gaming application featuring real-time state management and dynamic UI elements[cite: 1]. Implemented core game logic, live score tracking, and instant feedback mechanisms for an engaging user experience[cite: 1].' 
  },
];

const education = [
  {
    badge:'Bachelor of Engineering', institution:'Canara Engineering College',
    degree:'Bachelor of Engineering in Information Science and Technology[cite: 1]', year:'2028 · Bantwal, India[cite: 1]',
    percentage:'GPA: 9.24[cite: 1]',
    marks:[{subject:'Degree Status',score:'Pursuing'}]
  },
  {
    badge:'Pre-University', institution:'Canara Pre-University College',
    degree:'PUC in PCMB[cite: 1]', year:'2024 · Mangalore, India[cite: 1]',
    percentage:'GPA: 86.88[cite: 1]',
    marks:[{subject:'Stream',score:'Science'}]
  },
  {
    badge:'Secondary School', institution:'Kendriya Vidyalaya No.1',
    degree:'Secondary Education[cite: 1]', year:'2022 · Mangalore, India[cite: 1]',
    percentage:'GPA: 91.8[cite: 1]',
    marks:[{subject:'Board',score:'KVS'}]
  },
];

const certs = [
  { issuer:'NPTEL', name:'Programming in Java Certification', date:'Apr 2026', desc:'Scored 90/100, earning an Elite + Gold credential.', driveUrl:'https://drive.google.com/file/d/1WmqCCRzMlOGAsIjp7stJ8FDhFgFdIQGY/view?usp=drive_link'},
  { issuer:'Be10x', name:'AI tools workshop', date:'Jul 2026', desc:'Advanced practical AI tooling and workspace efficiency training.', driveUrl:'https://drive.google.com/drive/folders/17hgW5Hcf186BcnU1_xR0GtNun4k6AKS6'},
  { issuer:'Infosys Springboard', name:'Prompt Engineering Certification', date:'Feb 2026', desc:'Mastered structural prompt formulation and LLM task optimization.', driveUrl:'https://drive.google.com/file/d/1mN2yXDCObe2XUDhF0-B249OOeULuyzz1/view?usp=drive_link'},
  { issuer:'NMAM Institute of Technology', name:'Code for Innovex (Hackathon)', date:'Nov 2025', desc:'24-Hour National Level Hackathon - Top 48 Finalist out of 300+ Teams.', driveUrl:'https://drive.google.com/file/d/1b0evMy5aHRzdFLkUzgBWooSMCCiGP80x/view?usp=drive_link'},
  { issuer:'IBM SkillsBuild', name:'AI Literacy Certification', date:'Dec 2025', desc:'Foundational core concepts in artificial intelligence architectures.', driveUrl:'https://drive.google.com/file/d/1w6M4ZqW7IaEU6d62Zpd5Bx6ZLYG7MonU/view?usp=drive_link'},
  { issuer:'Tata via Forage', name:'GenAI Powered Data Analytics Job Simulation', date:'Apr 2026', desc:'Practical enterprise analytics execution utilizing generative solutions.', driveUrl:'https://drive.google.com/file/d/1fZnAtM2KiJIqKsHkI6FTJK3zjxohA8WP/view?usp=drive_link'},
  { issuer:'Infosys Springboard', name:'Basics of Python', date:'Sep 2025', desc:'Python fundamentals, basic scripts, and structural workflows.', driveUrl:'https://drive.google.com/file/d/181ikSJpDa2qz_4C_tIN8jddLyy2hAjic/view?usp=drive_link'},
  { issuer:'NXT Wave', name:'Generative AI', date:'Jun 2025', desc:'Generative AI concepts and modern application use-cases.', driveUrl:'https://drive.google.com/file/d/17hp4GMJjRai8RfaW19X1Llcmpdjs9Klm/view?usp=drive_link'},
  { issuer:'LinkedIn Learning', name:'Modern CSS Techniques without JavaScript', date:'Jun 2025', desc:'Advanced layout design and styling with pure CSS.', driveUrl:'https://drive.google.com/file/d/17oVkV5Dja2dZf9PfukCwkFEuqEgNTX90/view?usp=drive_link'},
  { issuer:'Spoken Tutorial, IIT Bombay', name:'C Programming Training Certification', date:'May 2025', desc:'Procedural compilation, memory structures, and file pointers.', driveUrl:'https://drive.google.com/file/d/17tqTR8fY4OlX0rGpVBhpCc3gRWAHQ_4e/view?usp=drive_link'},
  { issuer:'Spoken Tutorial, IIT Bombay', name:'Html Programming Training Certification', date:'Oct 2025', desc:'Semantic web structure and content layout standards.', driveUrl:'https://drive.google.com/file/d/13CG7WECS2Sc7nMOusvq8L2NBU43_-_w5/view?usp=drive_link'},
  { issuer:'Spoken Tutorial, IIT Bombay', name:'Java Programming Training Certification', date:'Apr 2026', desc:'Object-oriented programming execution and fundamentals.', driveUrl:'https://drive.google.com/file/d/1SBF_sFrpePOWKXl68fSW4qdusaA9IzKO/view?usp=drive_link'}
];

/* ═══════════════ SKILLS GENERATION ═══════════════ */
const sgrid = document.getElementById('skillsGrid');
let activeSkill = null;
skills.forEach((s,i) => {
  const el = document.createElement('div');
  el.className = 'skill-card reveal';
  el.innerHTML = `<div class="skill-icon">${s.icon}</div><div class="skill-name">${s.name}</div>`;
  el.addEventListener('click', () => {
    document.querySelectorAll('.skill-card').forEach(c => c.classList.remove('active'));
    const panel = document.getElementById('skillDescPanel');
    if (activeSkill === i) { panel.classList.remove('visible'); activeSkill = null; return; }
    el.classList.add('active'); activeSkill = i;
    document.getElementById('sdTitle').textContent = `${s.icon} ${s.name}`;
    document.getElementById('sdDesc').textContent = s.desc;
    document.getElementById('sdBarLabel').textContent = 'Proficiency';
    document.getElementById('sdBarPct').textContent = s.pct + '%';
    const fill = document.getElementById('sdBarFill');
    fill.style.width = '0%';
    panel.classList.add('visible');
    setTimeout(() => fill.style.width = s.pct + '%', 50);
  });
  sgrid.appendChild(el);
});

/* ═══════════════ PROJECTS GENERATION ═══════════════ */
const pg = document.getElementById('projectsGrid');
projects.forEach(p => {
  const el = document.createElement('div');
  el.className = 'project-card reveal';
  el.innerHTML = `
    <div class="project-thumb">${p.emoji}</div>
    <div class="project-body">
      <div class="project-tag">${p.tag}</div>
      <div class="project-name">${p.name}</div>
      <div class="project-desc">${p.desc.slice(0,90)}…</div>
      <div class="project-footer">${p.techs.map(t=>`<span class="tech-tag">${t}</span>`).join('')}</div>
    </div>`;
  el.addEventListener('click', () => {
    document.getElementById('projEmoji').textContent = p.emoji;
    document.getElementById('projTitle').textContent = p.name;
    document.getElementById('projBody').textContent = p.desc;
    document.getElementById('projTags').innerHTML = p.techs.map(t=>`<span class="tech-tag">${t}</span>`).join('');
    document.getElementById('projModal').classList.add('open');
  });
  pg.appendChild(el);
});

/* ═══════════════ EDUCATION TIMELINE ═══════════════ */
const et = document.getElementById('eduTimeline');
education.forEach(e => {
  const card = document.createElement('div');
  card.className = 'edu-card reveal';
  card.innerHTML = `
    <div class="edu-header">
      <span class="edu-badge">${e.badge}</span>
      <span class="edu-year">📅 ${e.year}</span>
    </div>
    <div class="edu-institution">${e.institution}</div>
    <div class="edu-degree">${e.degree}</div>
    <div class="edu-marks-grid">${e.marks.map(m=>`<div class="edu-mark-item"><div class="edu-mark-subject">${m.subject}</div><div class="edu-mark-score">${m.score}</div></div>`).join('')}</div>
    ${e.percentage !== '—' ? `<div class="edu-percentage">Overall: <strong>${e.percentage}</strong></div>` : ''}`;
  et.appendChild(card);
});

/* ═══════════════ CERTIFICATES SYSTEM ═══════════════ */
const cg = document.getElementById('certsGrid');
function renderCerts() {
  cg.innerHTML = '';
  certs.forEach((c) => {
    const el = document.createElement('div');
    el.className = 'cert-card reveal';
    el.innerHTML = `
      <div class="cert-img-area">
         <svg class="cert-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
            <polyline points="14 2 14 8 20 8"></polyline>
            <line x1="16" y1="13" x2="8" y2="13"></line>
            <line x1="16" y1="17" x2="8" y2="17"></line>
            <polyline points="10 9 9 9 8 9"></polyline>
         </svg>
         <span class="cert-view-badge">View Certificate ↗</span>
      </div>
      <div class="cert-body">
        <div>
          <div class="cert-issuer">${c.issuer}</div>
          <div class="cert-name">${c.name}</div>
          <div class="cert-desc">${c.desc}</div>
        </div>
        <div class="cert-date">📅 ${c.date}</div>
      </div>`;
    
    el.addEventListener('click', () => {
      if(c.driveUrl && c.driveUrl !== '#') {
        window.open(c.driveUrl, '_blank');
      } else {
        alert('Google Drive source reference placeholder setup detected. Configure the target link within your script array object parameters.');
      }
    });
    cg.appendChild(el);
  });
}
renderCerts();

/* ═══════════════ INTERACTIVE OVERLAYS ═══════════════ */
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
document.getElementById('projModal').addEventListener('click', e => { if(e.target===e.currentTarget) closeModal('projModal'); });

/* ═══════════════ CUSTOM MOTION CURSORS ═══════════════ */
const cur = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
document.addEventListener('mousemove', e => {
  cur.style.left = e.clientX+'px'; cur.style.top = e.clientY+'px';
  setTimeout(() => { ring.style.left = e.clientX+'px'; ring.style.top = e.clientY+'px'; }, 80);
});

/* ═══════════════ MATRIX STARFIELD BACKGROUND ═══════════════ */
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
let stars = [];
function resize() { canvas.width = innerWidth; canvas.height = innerHeight; }
function makeStars() { stars = Array.from({length:180}, () => ({ x:Math.random()*canvas.width, y:Math.random()*canvas.height, r:Math.random()*1.5+.3, a:Math.random(), da:(Math.random()-.5)*.005 })); }
function drawStars() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  stars.forEach(s => {
    s.a = Math.max(.05, Math.min(1, s.a+s.da));
    if(s.a<=.05||s.a>=1) s.da*=-1;
    ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
    ctx.fillStyle=`rgba(100,180,255,${s.a})`; ctx.fill();
  });
  requestAnimationFrame(drawStars);
}
resize(); makeStars(); drawStars();
window.addEventListener('resize', () => { resize(); makeStars(); });

/* ═══════════════ VIEWPORT INTERSECTION OBSERVER ═══════════════ */
function revealAll() {
  const els = document.querySelectorAll('.reveal:not(.in)');
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if(e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { threshold:.12 });
  els.forEach(el => io.observe(el));
}
revealAll();

/* ═══════════════ DIRECT GMAIL FORM SUBMISSION HANDLER ═══════════════ */
const directMailForm = document.getElementById('directMailForm');
if (directMailForm) {
  directMailForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const subject = document.getElementById('senderSubject').value;
    const message = document.getElementById('senderMessage').value;

    const recipient = 'sonikaacharya2706@gmail.com';
    const mailtoUrl = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent("Name: " + name + "\nEmail: " + email + "\n\nMessage:\n" + message)}`;
    
    window.location.href = mailtoUrl;
  });
}