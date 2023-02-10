const burger = document.querySelector("#burger");  /* переменная имя обращаемся к документу и получаем нашу кнопку */
const menu = document.querySelector("#menu");

burger.addEventListener("click", () => {  /* указываем кнопку добавляем событие и указать при каком действии должен сработать код */
    menu.classList.toggle("disp"); /* спрашиваем у меню есть ли у него класс Disp, если есть то мы его убираем или добавляем */
});
