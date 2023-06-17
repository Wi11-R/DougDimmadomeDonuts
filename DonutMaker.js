class DonutMaker {
    constructor() {
        this.donutClick = 0;
        this.donutCount = 1;

        this.autoClickCount = 0;
        this.autoClickerCost = 100;

        //this.multiplierCount = 0;
        //this.multiplierCost = 10;
    }

    donutClicked() {
        this.donutClick = this.donutClick + this.donutCount;
    }

    getDonutClicked() {
        return this.donutClick;
    }

    addAutoClicker() {
        if (this.donutClicked >= this.autoClickerCost) {
            this.donutClicked = this.donutClicked - this.autoClickerCost;
            this.autoClickCount++;
            increaseAutoClickerCost()
        }
    }

    increaseAutoClickerCost() {
        this.autoClickerCost = this.autoClickerCost + this.autoClickerCost * .1;
    }

    getAutoClickCount() {
        return this.autoClickCount
    }

    getAutoClickerCost() {
        return this.autoClickerCost
    }

    makeAutoClickerWork() {
        this.donutClick = this.autoClickCount + this.donutClick * donutCount
    }

    getDonutValue() {
        return this.donutCount
    }
}
