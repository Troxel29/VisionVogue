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