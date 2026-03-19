const question = document.querySelectorAll(".question-item1");
question.forEach(item => {
    const btn = item.querySelector('.toggle-btn');
    btn.addEventListener('click', () => {
        item.classList.toggle('active');
    })
})