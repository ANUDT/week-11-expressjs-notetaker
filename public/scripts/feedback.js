const feedbackForm = document.getElementById('feedback-form');
const homeBtn = document.getElementById('home-btn');

homeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.location.href = '/';
});


if (feedbackForm) {
  feedbackForm
    .addEventListener('submit', (e) => {
      e.preventDefault();


      let feedback = document.getElementById('feedbackText').value;

      let email = document.getElementById('feedbackUsername').value.trim();

   
      const newFeedback = {
        feedback,
        email,
        feedbackType: 'Complaint',
      };

         fetch('api/feedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newFeedback),
      })
        .then((res) => res.json())
        .then((data) => {
          alert(data.status);
          email = '';
          feedback = '';
        });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
}
