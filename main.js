// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

// Initialize the modal as hidden immediately when the script loads
const errorModal = document.getElementById('modal');
errorModal.classList.add('hidden');

// Heart click handler
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('like-glyph')) {
    const heart = e.target;
    
    if (heart.textContent === EMPTY_HEART) {
      // Server call for empty heart
      mimicServerCall()
        .then(() => {
          // Success case
          heart.textContent = FULL_HEART;
          heart.classList.add('activated-heart');
        })
        .catch((error) => {
          // Error case
          errorModal.classList.remove('hidden');
          document.getElementById('modal-message').textContent = error;
          setTimeout(() => {
            errorModal.classList.add('hidden');
          }, 3000);
        });
    } else {
      // Click on full heart
      heart.textContent = EMPTY_HEART;
      heart.classList.remove('activated-heart');
    }
  }
});


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}









