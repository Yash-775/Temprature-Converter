function tempCon(){
    let a= document.getElementById("temp").value;
    let selectElement = document.querySelector('#forunits');
    let output1 = selectElement.value;
    let toUnits = document.querySelector('#tounits');
    let output2 = toUnits.value;
    
    if(a == ""){
        document.getElementById("result").innerHTML = "Please enter the temprature.";
    }
    else if (output1 == "From Units"){
        document.getElementById("result").innerHTML = "Please select From Units";
    }
    else if (output2 == "To Units"){
        document.getElementById("result").innerHTML = "Please select To Units";
    }
    else {
        if(output1 == "Fahrenheit" && output2 == "Celsius"){
            let sum1=(a-32)*(5/9);
            document.getElementById("result").innerHTML = sum1.toFixed(3) + '&#8451';
            document.getElementById("result").style.color = "green";
        }
        else if(output1 == "Celsius" && output2 == "Fahrenheit"){
            let sum2=a*(9/5)+32;
            document.getElementById("result").innerHTML = sum2.toFixed(3) + '&#8457';
            document.getElementById("result").style.color = "green";
        }
        else if(output1 == "Fahrenheit" && output2 == "Kelvin"){
            let sum3=(a-32)*(5/9)+273.15;
            document.getElementById("result").innerHTML = sum3.toFixed(3) + "K";
            document.getElementById("result").style.color = "green";
        }
        else if(output1 == "Celsius" && output2 == "Kelvin"){
            let sum4=a;
            let sum5=(a/(10)+0.9)+(273.15);
            document.getElementById("result").innerHTML = sum5 + "K";
            document.getElementById("result").style.color = "green";
        }
        else if(output1 == "Kelvin" && output2 == "Fahrenheit"){
            let sum6=(a-273.15)*(9/5)+32;
            document.getElementById("result").innerHTML = sum6.toFixed(3) + "K";
            document.getElementById("result").style.color = "green";
        }
        else if(output1 == "Kelvin" && output2 == "Celsius"){
            let sum7=(a/(10)+0.9)-(273.15);
            document.getElementById("result").innerHTML = sum7.toFixed(3) + "K";
            document.getElementById("result").style.color = "green";
        }
    }

}

function darkMode(){
    document.body.classList.toggle("darkmodebtn");
    let convert= document.getElementById("convert");
    convert.style.border= "2px solid white";
    let colorchange= document.getElementById("ic_fluent_dark_theme_24_regular");
    colorchange.classList.toggle("colorChange");
}