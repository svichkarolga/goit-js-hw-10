// // Описаний у документації
 import iziToast from "izitoast";
// // Додатковий імпорт стилів
import "izitoast/dist/css/iziToast.min.css";

const form = document.querySelector('.form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const delay = Number(form.elements.delay.value); // Отримуємо затримку з поля вводу
    const state = form.elements.state.value; // Отримуємо обрану опцію (fulfilled або rejected)
    createNotification(delay, state);
});

function createNotification(delay, state) {
    // // Create promise
    const delayPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (state === 'fulfilled') {
                resolve(delay);
            } else {
                reject(delay);
            }
        }, delay);
    })
    // // Registering promise callbacks
    delayPromise
        .then((delay) => {
            iziToast.success({
                title: 'OK',
                message: `✅ Fulfilled promise in ${delay} ms!`,
            });
        })
        .catch((delay) => {
            iziToast.error({
                title: 'Error',
                message: `❌ Rejected promise in ${delay} ms`,
            });
        })
    form.reset();
}