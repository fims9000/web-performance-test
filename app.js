// Функция для показа скрытого текста при нажатии на кнопку "Подробнее"
function showMore() {
    const moreInfo = document.getElementById("more-info");
    moreInfo.style.display = moreInfo.style.display === "none" ? "block" : "none";
}

// Функция для переключения табов
function showTabContent(tabId) {
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    const selectedTab = document.getElementById(tabId);
    selectedTab.classList.add('active');
}
