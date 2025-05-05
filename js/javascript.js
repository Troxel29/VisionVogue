const reviewForm = document.getElementById('reviewForm');
const reviewsContainer = document.getElementById('reviewsContainer');

reviewForm.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const rating = document.getElementById('rating').value;
  const reviewText = document.getElementById('review').value;

  const reviewDiv = document.createElement('div');
  reviewDiv.classList.add('review');

  reviewDiv.innerHTML = `
    <div class="stars">${'⭐'.repeat(rating)}</div>
    <p>${reviewText}</p>
    <div class="author">— ${name}</div>
  `;

  reviewsContainer.prepend(reviewDiv);
  reviewForm.reset();
});

function handleSearch(event) {
  event.preventDefault();
  const query = document.getElementById('search-query').value.toLowerCase().trim();

  const routes = [
    { keywords: ['home'], page: 'Index.html' },
    { keywords: ['products', 'glasses', 'shop', 'eyeglasses', 'sunglasses'], page: 'Products.html' },
    { keywords: ['about', 'our story', 'history'], page: 'About-Us.html' },
    { keywords: ['blog', 'articles'], page: 'Blog.html' },
    { keywords: ['contact', 'support'], page: 'contact-us.html' },
    { keywords: ['faq', 'questions'], page: 'faq.html' },
    { keywords: ['prescription', 'checkout', 'lenses'], page: 'Prescriptions.html' }
  ];

  for (const route of routes) {
    for (const keyword of route.keywords) {
      if (query.includes(keyword)) {
        window.location.href = route.page;
        return;
      }
    }
  }

  alert("Sorry, we couldn't find a matching page. Try words like 'products', 'about', 'faq', or 'prescription'.");
}

function toggleDetails() {
  const details = document.getElementById('more-details');
  const button = document.getElementById('toggle-button');

  if (details.style.display === 'none' || details.style.display === '') {
    details.style.display = 'block';
    button.textContent = 'Hide details';
  } else {
    details.style.display = 'none';
    button.textContent = 'See more details';
  }
}


function fetchProducts(query = "") {
  const formData = new FormData();
  formData.append("query", query);

  fetch("search.php", {
    method: "POST",
    body: formData
  })
    .then(res => res.text())
    .then(html => {
      productList.innerHTML = html;
    });
}

const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");
  
  // Live search listener
  searchInput.addEventListener("input", function () {
    const query = this.value.trim();
    fetchProducts(query);
  });
  
  function fetchProducts(query = "") {
    const formData = new FormData();
    formData.append("query", query);
  
    fetch("search.php", {
      method: "POST",
      body: formData
    })
      .then(res => res.text())
      .then(html => {
        productList.innerHTML = html;
      })
      .catch(err => {
        console.error("Search error:", err);
      });
  }