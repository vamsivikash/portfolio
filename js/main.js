document.addEventListener('DOMContentLoaded', function() {
    // Initialize the portfolio
    initializePortfolio();
    
    // Setup event listeners
    setupEventListeners();
    
    // Setup smooth scrolling
    setupSmoothScrolling();
    
    // Setup external links
    setupExternalLinks();
});

function initializePortfolio() {
    renderTalks();
    renderPublications();
    renderReviewerWork();
    renderCertifications();
    updateLastUpdated();
}

function renderTalks() {
    const talksList = document.querySelector('.talks-list');
    if (!talksList || !portfolioData.talks) return;
    
    // Sort talks by date (most recent first)
    const sortedTalks = portfolioData.talks.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    talksList.innerHTML = sortedTalks.map(talk => {
        const links = [];
        if (talk.slidesUrl) links.push(`<a href="${talk.slidesUrl}" target="_blank">Slides</a>`);
        if (talk.videoUrl) links.push(`<a href="${talk.videoUrl}" target="_blank">Video</a>`);
        if (talk.eventLink) links.push(`<a href="${talk.eventLink}" target="_blank">Event</a>`);
        
        const linksHtml = links.length > 0 ? ` (${links.join(' | ')})` : '';
        const description = talk.description ? ` - ${talk.description}` : '';
        
        return `<li>
            <strong>${talk.event}</strong> - ${talk.title}${description}${linksHtml}
            <small class="text-muted d-block">${formatDate(talk.date)}</small>
        </li>`;
    }).join('');
}

function renderPublications() {
    const publicationsList = document.querySelector('.publications-list');
    if (!publicationsList || !portfolioData.publications) return;
    
    // Sort publications by date (most recent first)
    const sortedPublications = portfolioData.publications.sort((a, b) => new Date(b.date) - new Date(a.date));
    
    publicationsList.innerHTML = sortedPublications.map(pub => {
        const authorsText = pub.authors.join(', ');
        const linkHtml = pub.url ? ` (<a href="${pub.url}" target="_blank">Read</a>)` : '';
        
        return `<li>
            <strong>${pub.title}</strong><br>
            <em>${pub.journal}</em> - ${authorsText}${linkHtml}
            <small class="text-muted d-block">${formatDate(pub.date)}</small>
        </li>`;
    }).join('');
}

function renderReviewerWork() {
    const reviewerList = document.querySelector('.reviewer-list');
    if (!reviewerList || !portfolioData.reviewerWork) return;
    
    reviewerList.innerHTML = portfolioData.reviewerWork.map(work => {
        const urlLink = work.url ? ` (<a href="${work.url}" target="_blank">View Article</a>)` : '';
        return `<li>
            <strong>${work.role}</strong> - ${work.organization}<br>
            <small>${work.date}</small><br>
            <em>${work.description}</em>${urlLink}
        </li>`;
    }).join('');
}

function renderCertifications() {
    const badgesContainer = document.getElementById('badges');
    if (!badgesContainer || !portfolioData.certifications) return;
    
    badgesContainer.innerHTML = `
        <div class="certifications-grid">
            ${portfolioData.certifications.map(cert => {
                if (cert.badgeImageUrl) {
                    // Display only badge image
                    return `
                        <div class="certification-badge badge-only">
                            <img src="${cert.badgeImageUrl}" 
                                 alt="${cert.name}" 
                                 class="badge-image"
                                 title="${cert.name}">
                        </div>`;
                } else {
                    // Skip certifications without images
                    return '';
                }
            }).join('')}
        </div>
    `;
}

function setupEventListeners() {
    // Add search functionality
    const searchInput = document.getElementById('search');
    if (searchInput) {
        searchInput.addEventListener('input', handleSearch);
    }
    
    // Add filter functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    const sections = ['talks', 'publications', 'reviewer'];
    
    sections.forEach(section => {
        const items = document.querySelectorAll(`.${section}-list li`);
        items.forEach(item => {
            const text = item.textContent.toLowerCase();
            item.style.display = text.includes(searchTerm) ? 'block' : 'none';
        });
    });
}

function handleFilter(event) {
    const filterType = event.target.dataset.filter;
    const sections = document.querySelectorAll('.row > div[class*="col"]');
    
    sections.forEach(section => {
        if (filterType === 'all') {
            section.style.display = 'block';
        } else {
            const sectionId = section.querySelector('h2')?.id;
            section.style.display = sectionId === filterType ? 'block' : 'none';
        }
    });
    
    // Update active filter button
    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');
}

function setupSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

function setupExternalLinks() {
    document.querySelectorAll('a').forEach(link => {
        if (link.href && !link.href.includes(document.location.host) && !link.href.startsWith('#')) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
}

function formatDate(dateString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

function updateLastUpdated() {
    const lastUpdatedElement = document.getElementById('last-updated');
    if (lastUpdatedElement) {
        lastUpdatedElement.textContent = `Last updated: ${formatDate(new Date().toISOString())}`;
    }
}

// Add scroll-to-top functionality
function addScrollToTop() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '↑';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
    document.body.appendChild(scrollBtn);
    
    window.addEventListener('scroll', () => {
        scrollBtn.style.display = window.pageYOffset > 300 ? 'block' : 'none';
    });
}

// Initialize scroll-to-top after DOM is loaded
document.addEventListener('DOMContentLoaded', addScrollToTop);
