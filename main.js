function validateFormInput(){
    let nameInputValue = document.querySelector("#firstname").value;
    if(nameInputValue.length == 0){
        document.getElementById("error-name").innerText = " Please fill out with your name ";
    }else{
        document.getElementById("error-name").innerText = "";
    }

    let lastNameInputValue = document.querySelector("#lastname").value;
    if(lastNameInputValue.length == 0){
        document.getElementById("error-lastname").innerText = " Please fill out with your last name ";
    }else{
        document.getElementById("error-lastname").innerText = "";
    }

    let emailInputValue = document.querySelector("#email").value;
    if(emailInputValue.indexOf("@",2)<0){
        document.getElementById("error-email").innerText = " Please fill out with your email adress ";
    }else{
        document.getElementById("error-email").innerText = "";
    }
}

let car = {
    name: "Fiat",
    model: "500",
    color: "green",
    drive :function(){
       console.log(`${car.name} is started`);
    }
}
console.log(car.model);
console.log(car['model']);
car.drive();