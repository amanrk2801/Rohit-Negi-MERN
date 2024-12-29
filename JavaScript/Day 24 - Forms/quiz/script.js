document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const formData = new FormData(form);
        const correctAnswers = ["Paris", "Elon Musk", "Jupiter", "Leonardo da Vinci"];
        const questions = ["q1", "q2", "q3", "q4"];
        const score = questions.reduce((acc, question, index) => 
            formData.get(question) === correctAnswers[index] ? acc + 1 : acc, 0);
        alert(`Your score is: ${score}`);
    });
});
