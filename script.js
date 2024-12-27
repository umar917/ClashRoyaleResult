// Функция для отображения информации о бойце
function showFighter(fighter) {
    const fighterInfo = {
        Валькирия: {
            name: "Валькирия",
            description: "Суровый воин ближнего боя, наносящий урон вокруг себя.",
            image: "https://avatars.mds.yandex.net/i?id=2dfb7f0d39b0c267796ab61949c6cb68fffb8804-4314155-images-thumbs&n=13"
        },
        Лучницы: {
            name: "Лучницы",
            description: "Это дальнобойщики, которые стреляют стрелами по врагам.",
            image: "https://pibig.info/uploads/posts/2022-05/1653348724_22-pibig-info-p-koroleva-luchnits-art-krasivo-22.jpg"
        },
        Дракончик: {
            name: "Дракончик",
            description: "Это летающий отряд, который выдыхает огонь на небольшой территории.",
            image: "https://i.pinimg.com/originals/67/ee/79/67ee79f6c38acecb0ee6b5610b925934.png"
        },
        Ведьма: {
            name: "Ведьма",
            description: "Ведьма призывает скелетов и стреляет брызгающими снарядами.",
            image: "https://make.supercell.com/images/creation/44209e4c-7d7b-0291-afbe-03f7b25cf654/coverImage/15154_7-2-clash-of-clans-witch-png.jpg"
        },
        Голем: {
            name: "Голем",
            description: "Это очень медленный наземный воин ближнего боя с ОЧЕНЬ высоким запасом здоровья",
            image: "https://i.pinimg.com/originals/ed/bb/99/edbb99f82ef5fd38ce9789d96ad1e1ac.png"
        },
        Мегарыцарь: {
            name: "Мегарыцарь",
            description: "Это наземный воин с большим уроном по области и солидным здоровьем.",
            image: "https://static.wikia.nocookie.net/0c0afc6c-b783-45eb-8a2b-38ebefcb87de/scale-to-width/755"
        },
        ПЕККА: {
            name: "ПЕККА",
            description: "Тяжело бронированный отряд ближнего боя, наносящий огромный урон.",
            image: "https://i.pinimg.com/originals/08/a1/c2/08a1c2fe1b9be1956800782bdcf0c3e3.png"
        },
        Шахтер: {
            name: "Шахтер",
            description: "Шахтёр перемещается под землёй и появляется где угодно на арене.",
            image: "https://avatars.mds.yandex.net/i?id=cecf72bf7138d2384602bb8faf9ec5dc_l-5232437-images-thumbs&n=13"
        }
    };

    const selectedFighter = fighterInfo[fighter];
    const fighterInfoDiv = document.getElementById("fighter-info");

    if (selectedFighter) {
        // Создаем HTML для выбранного бойца
        fighterInfoDiv.innerHTML = `
            <h2>${selectedFighter.name}</h2>
            <p>${selectedFighter.description}</p>
            <img src="${selectedFighter.image}" alt="${selectedFighter.name}" style="max-width: 100%; height: auto; border-radius: 10px;">
            <button onclick="closeFighterInfo()" style="margin-top: 10px; padding: 10px 20px; background-color: #ff0000; color: white; border: none; border-radius: 5px; cursor: pointer;">Закрыть</button>
        `;
    } else {
        fighterInfoDiv.innerHTML = `
            <h2>Fighter not found</h2>
        `;
    }
}

// Функция для закрытия информации о бойце
function closeFighterInfo() {
    const fighterInfoDiv = document.getElementById("fighter-info");
    fighterInfoDiv.innerHTML = `
        <h2>Выберите бойца, чтобы узнать подробности!</h2>
    `;
}

// Добавление отзывов
const reviewForm = document.getElementById("review-form");
const reviewsBody = document.getElementById("reviews-body");

reviewForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("review-name").value;
    const text = document.getElementById("review-text").value;
    const rating = document.getElementById("review-rating").value;

    if (name && text && rating) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${text}</td>
            <td>${rating}/5</td>
        `;
        reviewsBody.appendChild(newRow);
        setTimeout(() => newRow.classList.add('visible'), 10); // Анимация появления

        // Очищаем форму
        reviewForm.reset();
    } else {
        alert("Пожалуйста, заполните все поля!");
    }
});

// Функция для открытия формы вопроса
function openQuestionForm() {
    const form = document.getElementById("question-form");
    form.classList.add('visible');
}

// Функция для закрытия формы вопроса
function closeQuestionForm() {
    const form = document.getElementById("question-form");
    form.classList.remove('visible');
}

// Функция для отправки вопроса
function submitQuestion(event) {
    event.preventDefault();
    const name = document.getElementById("question-name").value;
    const question = document.getElementById("question-text").value;

    if (name && question) {
        alert(`Спасибо, ${name}! Ваш вопрос отправлен.`);
        closeQuestionForm();
    } else {
        alert("Пожалуйста, заполните все поля!");
    }
}

// Анимация при загрузке страницы
document.addEventListener("DOMContentLoaded", function() {
    // Анимация заголовков
    const headings = document.querySelectorAll('h1, h2');
    headings.forEach(heading => {
        heading.classList.add('visible');
    });

    // Анимация таблиц
    const tables = document.querySelectorAll('.deck-table, .reviews-table, .facts-table');
    tables.forEach(table => {
        table.classList.add('visible');
    });
});