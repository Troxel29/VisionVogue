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
      { keywords: ['products', 'glasses', 'shop'], page: 'Products.html','eyeglasses', 'sunglasses'] },
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