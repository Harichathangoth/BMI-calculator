
let height = null;
let weight = null;
let BMI = null;
let age = null;
let gender = null;
let condition;

function btnSubmit(){

     height = (document.getElementById('height').value/100)*(document.getElementById('height').value/100)
     weight = document.getElementById('weight').value
     age = document.getElementById('age').value

     BMI = Math.ceil((weight/height)*100)/100


     if (height == "" || weight == "" || age == "" ) {

        alert("All input must be filled out");

      } else{
        if(BMI<18.5){
            condition = 'UNDERWEIGHT'
         }else if(BMI<25){
            condition = 'HEALTHY'
         }else if(BMI<30){
            condition = 'OVERWEIGHT'
         }else if(BMI>=30){
            condition = 'OBESE'
         }
         document.getElementById('para').style.display = "";
        document.getElementById('para').innerHTML = `
    
                        <h3>Your BMI is</h3>
                        <div>
                            <h3>${BMI}</h3>
                            <h5>You are <b>${condition}</b></h5>
                        </div>
        
        `
      }
    
        

}

function btnreset(){
     height = null;
     weight = null;
     BMI = null;
     age = null;
     gender = null;
     condition = null;
     document.getElementById('height').value = height;
     document.getElementById('weight').value = weight;
     document.getElementById('age').value = age;
     document.getElementById('age').value = gender;
     document.getElementById('para').style.display = "none";

}


     