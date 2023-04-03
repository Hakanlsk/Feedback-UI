const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

const containerEl = document.getElementById("container");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (e) => {
        removeActive();
        selectedRating =
            e.target.innerText || e.target.parentNode.innerText; 
            e.target.classList.add("active");
            e.target.parentNode.classList.add("active")
    });
});

/* 12. satır = Seçili derecelendirme butonunun değerini, tıklanan HTML elementinin metninden (innerText) veya tıklanan elementin ebeveyninin metninden alır. Bu değer daha sonra başka bir yerde kullanılmak üzere saklanır.
 13.satır = Tıklanan HTML elementine active sınıfı eklenir. Bu işlem, seçilen derecelendirme butonunu görsel olarak vurgulamak için yapılır.
 14.satır = Tıklanan HTML elementinin ebeveynine de active sınıfı eklenir. Bu işlem, özellikle derecelendirme butonları bir liste içindeyse, ebeveyn elementin de görsel olarak vurgulanmasını sağlar.*/

btnEl.addEventListener("click", () => {
    if (selectedRating !== "") {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
    })
}























