function submit(){
    var name= document.getElementById("name").value;
    var age= document.getElementById("age").value;
    var wt=document.getElementById("wt").value;

    checkCondition(name,age,wt);
}

function checkCondition(name,age,wt){
var result="";

    if(age>=5 && age<=7 ){
        if(wt>=15 && wt<=20){
result="perfect";
        }
        else if(wt<15){
            result="less";
        }
        else{
            result="greater";
        }
        
    }
   else if(age>=8 && age<=10 ){

    if(wt>=21 && wt<=25){
        result="perfect";
                }
                else if(wt<21){
                    result="less";
                }
                else{
                    result="greater";
                }
                
        
    }

   else if(age>=11 && age<=15){
    if(wt>=26 && wt<=30){
        result="perfect";
                }
                else if(wt<26){
                    result="less";
                }
                else{
                    result="greater";
                }
        
    }

   else if(age>=16 && age<=20){
    if(wt>=31 && wt<=40){
        result="perfect";
                }
                else if(wt<31){
                    result="less";
                }
                else{
                    result="greater";
                }
    }

    else{

    }

    display(name,age,wt,result)


}

function display(name,age,wt,result){

    if(result=="perfect"){
        document.getElementById("output").innerHTML="Hello "+name+" your wt. is "+result;
    }
    
    else{
document.getElementById("output").innerHTML="hello "+name+" your wt. is "+result+" than recommended value of "+wt+" kg at an age of "+age;
    }
}