
const buttons = document.querySelectorAll(".button");//accessign all div with class button
const userInput = document.querySelector(".inputDiv");//accessing inputDiv which show the user inputed value 
let userInputArr = [] //store the value input by user

let haveOperator = false //check if there is any operator in userInputArr and prevent dublicate operation from happening
let operator = "" // store the operator which is used
let result = false // it is used to determine that the doOperator has been invkoed and if user clear a value do accordingly
let ans = 0;// it is used to store the answer after operation has done

function clearAllText() { // clear every thing and start as new as before
    userInput.innerText = ""
    userInputArr.splice(0)
    haveOperator = false
}


function clearText() { // delete only one value 

    if (result && !(userInputArr.includes(operator, 0))) {
        ans = ans.toString() // converting the result into string from a number
        ans = ans.split("");// converting that string to a array
        userInputArr.splice(0)// removing all element from userInputArr. Because it contain (ans) value

        for (const i of ans) { // looping through ans array 
            userInputArr.push(i)// pushing element in userInputArr
        }
        userInputArr.pop()// removing the last element
        clearNum = userInputArr.join("");//using join method to join array and represent as a string
        userInput.innerText = clearNum;
        userInputArr.includes(operator, 0) ? haveOperator = true : haveOperator = false;// if there have any operator than other operator will not is implemented
    } else {

        userInputArr.pop()
        clearNum = userInputArr.join("");
        userInput.innerText = clearNum;
        userInputArr.includes(operator, 0) ? haveOperator = true : haveOperator = false;
    }
    result = false
}



function doOperation() { // Do operation according to operator when pressed (=)
    let text = userInputArr.join("")// storing the userInputArr elements as an string in text
    let opra = text.indexOf(operator, 0)//storing index of operator
    let num1 = text.slice(0, opra)//storing number before that operator
    let num2 = text.slice(opra + 1) // storing number after that operator
    num1 = Number(num1)//converting them
    num2 = Number(num2)
    if (num2) {


        if (operator == "+") {

            ans = add(num1, num2) // invoking add() and storing return value in ans
            userInput.innerText = ans // showing that value to user
            userInputArr.splice(0)//deleting every value from userInputArr
            userInputArr.push(ans)//storing ans value in userInputArr
            haveOperator = false // making haveOperator false so that next operator can be done

        } else if (operator == "-") {

            ans = subtract(num1, num2)
            userInput.innerText = ans
            userInputArr.splice(0)
            userInputArr.push(ans)
            haveOperator = false

        } else if (operator == "*") {

            ans = multiply(num1, num2)
            userInput.innerText = ans
            userInputArr.splice(0)
            userInputArr.push(ans)
            haveOperator = false

        } else if (operator == "/") {

            ans = divide(num1, num2)
            userInput.innerText = ans
            userInputArr.splice(0)
            userInputArr.push(ans)
            haveOperator = false

        } else if (operator == "%") {

            ans = module(num1, num2)
            userInput.innerText = ans
            userInputArr.splice(0)
            userInputArr.push(ans)
            haveOperator = false
        }

        result = true // making result true which tells that the operation is done and the expretion is became one means ['9','+','9'] is now ['18'] so do operation accordingly
    }
}



function add(num1, num2) {
    return num1 + num2
}
function subtract(num1, num2) {
    return num1 - num2
}
function multiply(num1, num2) {
    return num1 * num2
}
function divide(num1, num2) {
    return num1 / num2
}
function module(num1, num2) {
    return num1 % num2
}


function addElement() { //add user inputed values and display it
    if (userInputArr[0] == 0) { // if contain 0 value at 0 index then remove it so that it does not concatinate
        userInputArr.shift()// if have 0 that remove it
        let input = userInputArr.toString() // converting that array value into string
        userInput.innerText = input.replaceAll(",", "") // replacing all , from sting and displaying value
    } else {
        // if userInputArr does not contain 0 value on index 0
        let input = userInputArr.toString()
        userInput.innerText = input.replaceAll(",", "")

    }
}



for (const button of buttons) { // looping throung all  divs of class button which are used for input
    button.addEventListener('click', (e) => {
        e.preventDefault();
        let value = e.target.innerText // storing the targated div text

        switch (value) { // using switch to do operation as needed according to the input
            case "AC":
                clearAllText();
                break;
            case "C":
                clearText()
                break;
            case "1":
                userInputArr.push(value)
                addElement()
                break;

            case "2":
                userInputArr.push(value)
                addElement()
                break;

            case "3":
                userInputArr.push(value)
                addElement()
                break;

            case "4":
                userInputArr.push(value)
                addElement()
                break;

            case "5":
                userInputArr.push(value)
                addElement()
                break;

            case "6":
                userInputArr.push(value)
                addElement()
                break;

            case "7":
                userInputArr.push(value)
                addElement()
                break;

            case "8":
                userInputArr.push(value)
                addElement()
                break;

            case "9":
                userInputArr.push(value)
                addElement()
                break;

            case "0":
                if (userInput.innerText == "") {

                } else {
                    userInputArr.push(value)
                    addElement()
                }
                break;

            case "00":
                if (userInput.innerText == "") {

                } else {
                    userInputArr.push(0, 0)
                    addElement()
                }
                break;

            case ".":
                if (userInputArr.includes(".", 0)) {

                } else {

                    userInputArr.push(value)
                    addElement()
                }


                break;

            case "+":

                if (haveOperator && (userInputArr.includes(operator, 0))) { // cheacking if userInputArr have operator and haveOperator= true

                } else { // if not that else will run
                    operator = value
                    haveOperator = true
                    userInputArr.push(value)
                    addElement()
                }
                break;

            case "-":

                if (haveOperator && (userInputArr.includes(operator, 0))) {

                } else {
                    operator = value
                    haveOperator = true
                    userInputArr.push(value)
                    addElement()
                }
                break;

            case "/":

                if (haveOperator && (userInputArr.includes(operator, 0))) {

                } else {
                    operator = value
                    haveOperator = true
                    userInputArr.push(value)
                    addElement()
                }
                break;

            case "*":

                if (haveOperator && (userInputArr.includes(operator, 0))) {

                } else {
                    operator = value
                    haveOperator = true
                    userInputArr.push(value)
                    addElement()
                }
                break;
            case "%":

                if (haveOperator && (userInputArr.includes(operator, 0))) {

                } else {
                    operator = value
                    haveOperator = true
                    userInputArr.push(value)
                    addElement()
                }
                break;

            case "=":
                if (haveOperator) {// if there is any operator, if yes than the operation will be performed accordingly
                    doOperation()
                }
                break;


            default: // if switch does'nt work
                console.log('Not working');
                break;
        }
    })
}






