var button = document.getElementById("donutClick");

var donutCount = 0;

button.addEventListener("click", function() {
    donutCount++;
    document.getElementById("donutClicked").textContent = donutCount;
    enoughDonuts()
});

var button = document.getElementById("autoClick");
var autoClickCount = 0;
var donutClicked = 10;

button.disabled = true;

var enoughDonuts = function() {
    if (donutCount >= donutClicked) {
       return button.disabled = false;
    }
    return button.disabled = true; 
};

button.addEventListener("click", function() {
    autoClickCount++;
    document.getElementById("autoClicked").textContent = autoClickCount;
})

var autoClickCostDisplay = document.getElementById("autoClickCostDisplay");

var autoClickerCost = 10;
var costIncreasePercentage = 10; // 10% increase

button.addEventListener("click", function() {
  if (donutCount >= autoClickerCost) {
    var costIncrease = Math.ceil(autoClickerCost * (costIncreasePercentage / 100));
    autoClickerCost += costIncrease;
    donutCount -= autoClickerCost;
    autoClickCostDisplay.textContent = autoClickerCost;
    autoClickerCost = Math.ceil(autoClickerCost * costIncrease);
    console.log("Auto Clicker purchased! Cost increased by", costIncrease);

    startAutoClicker();
  } else {
    console.log("Auto Clicker purchased!");
  }})

  autoClickCount++;
  console.log("Total Auto Clickers:", autoClickCount);

  function startAutoClicker() {
    if (autoClickInterval === null) {
        autoClickInterval = setInterval(autoClick, 1000);
    }
  }

  function autoClick() {
    if (donutCount < autoClickerCost) {
        donutCount++;
        donutClicked++;
        donutClicked();
    } 
  }













this.modalButton = document.querySelector('#modalBttn');
this.modal = document.querySelector('#modal-container');
this.close = document.querySelector('#close');