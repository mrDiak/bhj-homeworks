const modalMain = document.getElementById('modal_main');// Присвоил переменной главный div с id=modal_main
modalMain.classList.add('modal_active'); // добавил класс modal_active к этому div'у

let modalSuccess = document.getElementById("modal_success");// Присвоил перемоенной второй div

document.querySelector("a.show-success").onclick = function () {//По клику меняю аквивный div
    modalMain.classList.remove("modal_active");
    modalSuccess.classList.add("modal_active");
};

let popupArr = Array.from(document.querySelectorAll("div.modal__close"));

function closePopup() {
    popupArr.forEach(function (modal) {
        modal.onclick = function () {
            modal.closest("div.modal").classList.remove("modal_active");
        };
    });
};

closePopup();