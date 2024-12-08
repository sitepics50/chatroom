const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.querySelector('.faq-answer');
    const arrow = question.querySelector('.arrow');

    if (answer.style.display === 'block') {
      answer.style.display = 'none';
      arrow.className = 'arrow down';
    } else {
      answer.style.display = 'block';
      arrow.className = 'arrow up';
    }
  });
});
