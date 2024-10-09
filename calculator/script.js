class Calculator {
    constructor(previousOperandElement, currentOperandElement) {
        this.previousOperandElement = previousOperandElement;
        this.currentOperandElement = currentOperandElement;
        this.clear();
    }

    clear() {
        this.currentOperand = "";
        this.previousOperand = "";
        this.operation = undefined;
    }

    delete() {
        this.currentOperand = this.currentOperand.toString().slice(0, -1);
    }

    appendNumber(number) {
        if (number === "." && this.currentOperand.includes(".")) return;
        this.currentOperand = this.currentOperand.toString() + number.toString();
    }

    chooseOperation(operation) {
        if (this.currentOperand === "") return;
        if (this.previousOperand !== "") {
            this.compute();
        }

        this.operation = operation;
        this.previousOperand = this.currentOperand;
        this.currentOperand = "";
    }

    compute() {
        let computationResult;
        const previousValue = parseFloat(this.previousOperand);
        const currentValue = parseFloat(this.currentOperand);

        if (isNaN(previousValue) || isNaN(currentValue)) return;

        switch (this.operation) {
            case "+":
                computationResult = previousValue + currentValue;
                break;
            case "-":
                computationResult = previousValue - currentValue;
                break;
            case "÷":
                computationResult = previousValue / currentValue;
                break;
            case "×":
                computationResult = previousValue * currentValue;
                break;
        }

        this.currentOperand = computationResult;
        this.operation = undefined;
        this.previousOperand = "";
    }

    getDisplayData(number) {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split(".")[0]);
        const decimalDigits = stringNumber.split(".")[1];
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = "";
        } else {
            integerDisplay = integerDigits.toLocaleString("en", { maximumFractionDigits: 0 });
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else {
            return integerDisplay;
        }
    }

    updateDisplay() {
        this.currentOperandElement.innerText = this.getDisplayData(this.currentOperand);
        if (this.operation != null) {
            this.previousOperandElement.innerText = `${this.getDisplayData(this.previousOperand)} ${this.operation}`;
        } else {
            this.previousOperandElement.innerText = this.getDisplayData(this.previousOperand);
        }
    }
}

const numberButtons = document.querySelectorAll("[data-number]");
const operationButtons = document.querySelectorAll("[data-operation]");
const allClearButton = document.querySelector("[data-all-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
const previousOperandElement = document.querySelector(".previous-operand");
const currentOperandElement = document.querySelector(".current-operand");

const calculator = new Calculator(previousOperandElement, currentOperandElement);

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const number = button.innerText;
        calculator.appendNumber(number);
        calculator.updateDisplay();
    });
});

operationButtons.forEach((operation) => {
    operation.addEventListener("click", () => {
        const op = operation.innerText;
        calculator.chooseOperation(op);
        calculator.updateDisplay();
    });
});

deleteButton.addEventListener("click", () => {
    calculator.delete();
    calculator.updateDisplay();
});

allClearButton.addEventListener("click", () => {
    calculator.clear();
    calculator.updateDisplay();
});

equalsButton.addEventListener("click", () => {
    calculator.compute();
    calculator.updateDisplay();
});
