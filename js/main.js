function likeReview(reviewId) {
  const likeCountElement = document.getElementById(`like-count-${reviewId}`);
  let currentCount = parseInt(likeCountElement.innerText);
  likeCountElement.innerText = currentCount + 1;
}
