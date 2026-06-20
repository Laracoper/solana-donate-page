// Автоопределение языка при загрузке
document.addEventListener("DOMContentLoaded", () => {
    // Получаем язык браузера (например, "ru-RU" или "en-US") -> обрезаем до "ru"/"en"
    const userLang = navigator.language || navigator.userLanguage;
    const shortLang = userLang.toLowerCase().startsWith('ru') ? 'ru' : 'en';
    
    setLanguage(shortLang);
});

function setLanguage(lang) {
    const enSection = document.getElementById('content-en');
    const ruSection = document.getElementById('content-ru');
    const htmlTag = document.documentElement;

    if (lang === 'ru') {
        enSection.style.display = 'none';
        ruSection.style.display = 'block';
        htmlTag.setAttribute('lang', 'ru');
    } else {
        enSection.style.display = 'block';
        ruSection.style.display = 'none';
        htmlTag.setAttribute('lang', 'en');
    }
}

// Функция копирования кошелька в буфер обмена
function copyAddress() {
    const addressText = document.querySelector('.address-box').innerText;
    navigator.clipboard.writeText(addressText).then(() => {
        const currentLang = document.documentElement.getAttribute('lang');
        if (currentLang === 'ru') {
            document.getElementById('tip-ru').innerText = "✅ Адрес скопирован!";
            setTimeout(() => document.getElementById('tip-ru').innerText = "Нажмите, чтобы скопировать адрес", 2000);
        } else {
            document.getElementById('tip-en').innerText = "✅ Address copied!";
            setTimeout(() => document.getElementById('tip-en').innerText = "Click to copy address", 2000);
        }
    });
}
