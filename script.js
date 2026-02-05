// ====================================
// CONFIGURATION - UPDATE THESE VALUES
// ====================================

// Your WhatsApp number (format: country code + number, no spaces or +)
// Example: For India +91 8981641447, use "919876543210"
const WHATSAPP_NUMBER = "918981641447";

// Your Books Data - Replace this with your actual books
const BOOKS_DATA = [
    {
        id: 1,
        title: "Concepts of Physics Vol 1",
        author: "H.C. Verma",
        subject: "Physics",
        condition: "Good - Minimal highlighting",
        originalPrice: 850,
        sellingPrice: 400,
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=500&fit=crop"
    },
    {
        id: 2,
        title: "Concepts of Physics Vol 2",
        author: "H.C. Verma",
        subject: "Physics",
        condition: "Excellent - Like new",
        originalPrice: 850,
        sellingPrice: 450,
        image: "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400&h=500&fit=crop"
    },
    {
        id: 3,
        title: "Organic Chemistry",
        author: "Morrison & Boyd",
        subject: "Chemistry",
        condition: "Good - Some highlighting",
        originalPrice: 950,
        sellingPrice: 500,
        image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=400&h=500&fit=crop"
    },
    {
        id: 4,
        title: "Physical Chemistry",
        author: "O.P. Tandon",
        subject: "Chemistry",
        condition: "Very Good",
        originalPrice: 780,
        sellingPrice: 350,
        image: "https://images.unsplash.com/photo-1509021436665-8f07dbf5bf1d?w=400&h=500&fit=crop"
    },
    {
        id: 5,
        title: "Objective Mathematics",
        author: "R.D. Sharma",
        subject: "Mathematics",
        condition: "Good - Minor wear",
        originalPrice: 920,
        sellingPrice: 450,
        image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=400&h=500&fit=crop"
    },
    {
        id: 6,
        title: "Coordinate Geometry",
        author: "S.L. Loney",
        subject: "Mathematics",
        condition: "Excellent",
        originalPrice: 650,
        sellingPrice: 300,
        image: "https://images.unsplash.com/photo-1596495578065-6e0763fa1178?w=400&h=500&fit=crop"
    },
    {
        id: 7,
        title: "Problems in General Physics",
        author: "I.E. Irodov",
        subject: "Physics",
        condition: "Good - Some notes",
        originalPrice: 750,
        sellingPrice: 380,
        image: "https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400&h=500&fit=crop"
    },
    {
        id: 8,
        title: "Inorganic Chemistry",
        author: "J.D. Lee",
        subject: "Chemistry",
        condition: "Very Good - Clean",
        originalPrice: 880,
        sellingPrice: 450,
        image: "https://images.unsplash.com/photo-1532153955177-f59af40d6472?w=400&h=500&fit=crop"
    },
    {
        id: 9,
        title: "Calculus and Analytic Geometry",
        author: "Thomas & Finney",
        subject: "Mathematics",
        condition: "Good",
        originalPrice: 990,
        sellingPrice: 500,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 10,
        title: "PW Class 11th Full (PCM) JEE Module (15 Books)",
        author: "Physics Wallah",
        subject: "Physics , Chemistry , Mathematics",
        condition: "Good",
        originalPrice: 990,
        sellingPrice: 500,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    },
    {
        id: 11,
        title: "PW Class 12th Full (PCM) JEE Module (15 Books)",
        author: "Physics Wallah",
        subject: "Physics , Chemistry , Mathematics",
        condition: "Good",
        originalPrice: 990,
        sellingPrice: 500,
        image: "https://images.unsplash.com/photo-1509228468518-180dd4864904?w=400&h=500&fit=crop"
    }
];

// ====================================
// APPLICATION CODE - NO NEED TO EDIT BELOW
// ====================================

let currentFilter = 'All';
let currentSearch = '';

// Initialize the page
document.addEventListener('DOMContentLoaded', function() {
    renderBooks(BOOKS_DATA);
    setupEventListeners();
});

// Setup event listeners
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', function(e) {
        currentSearch = e.target.value.toLowerCase();
        filterAndRenderBooks();
    });

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            // Update current filter
            currentFilter = this.getAttribute('data-subject');
            filterAndRenderBooks();
        });
    });
}

// Filter and render books based on current filter and search
function filterAndRenderBooks() {
    let filteredBooks = BOOKS_DATA.filter(book => {
        const matchesSearch = book.title.toLowerCase().includes(currentSearch) ||
                            book.author.toLowerCase().includes(currentSearch);
        const matchesFilter = currentFilter === 'All' || book.subject === currentFilter;
        return matchesSearch && matchesFilter;
    });

    renderBooks(filteredBooks);
}

// Render books to the grid
function renderBooks(books) {
    const booksGrid = document.getElementById('booksGrid');
    const noResults = document.getElementById('noResults');

    if (books.length === 0) {
        booksGrid.style.display = 'none';
        noResults.style.display = 'block';
        return;
    }

    booksGrid.style.display = 'grid';
    noResults.style.display = 'none';

    booksGrid.innerHTML = books.map(book => createBookCard(book)).join('');

    // Add event listeners to WhatsApp buttons
    books.forEach(book => {
        const btn = document.getElementById(`whatsapp-${book.id}`);
        if (btn) {
            btn.addEventListener('click', () => openWhatsApp(book));
        }
    });
}

// Create a book card HTML
function createBookCard(book) {
    const discount = Math.round((1 - book.sellingPrice / book.originalPrice) * 100);
    
    return `
        <div class="book-card">
            <div class="book-image-container">
                <img src="${book.image}" alt="${book.title}" class="book-image">
                <div class="book-subject-badge">${book.subject}</div>
            </div>
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-author">by ${book.author}</p>
                
                <div class="book-condition-section">
                    <span class="condition-label">Condition:</span>
                    <span class="condition-text">${book.condition}</span>
                </div>

                <div class="book-pricing">
                    <span class="selling-price">₹${book.sellingPrice}</span>
                    <span class="original-price">₹${book.originalPrice}</span>
                    <span class="discount-badge">${discount}% OFF</span>
                </div>

                <button id="whatsapp-${book.id}" class="whatsapp-btn">
                    <svg class="whatsapp-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                    </svg>
                    Message on WhatsApp
                </button>
            </div>
        </div>
    `;
}

// Open WhatsApp with pre-filled message
function openWhatsApp(book) {
    const message = `Hi! I'm interested in buying "${book.title}" by ${book.author}`;
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}
