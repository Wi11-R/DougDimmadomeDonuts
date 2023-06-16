var button = document.getElementById("donutClick");

var donutCount = 0;

button.addEventListener("click", function() {
    donutCount++;
    document.getElementById("donutClicked").textContent = donutCount;
    enoughClicks()
});

var button = document.getElementById("autoClick");
var autoCount = 0;
var requiredClicks = 10;

button.disabled = true;

var enoughClicks = function() {
    if (donutCount >= requiredClicks) {
       return button.disabled = false;
    }
    return button.disabled = true;
};

button.addEventListener("click", function() {
    autoCount++;
    document.getElementById("autoClicked").textContent = autoCount;
})

var increaseAutoClickerCost = function() {
    if (autoCount + requiredClicks) {}
}











//this.modalButton = document.querySelector('#modalBttn');
//this.modal = document.querySelector('#modal-container');
//this.close = document.querySelector('#close');