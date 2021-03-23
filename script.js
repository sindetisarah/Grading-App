function getGrade(marks){
    let grade;
    if(marks >= 80){
        grade="A";
        console.log(grade);
    }else if(marks >=70 && marks<80){
         grade="B";
         console.log(grade);
    }else if(marks>=50 && marks<60){
        grade="C";
        console.log(grade);
    }else if(marks>0 && marks<50){
        grade="D";
        console.log(grade);
    }else{
        grade="E";
    }
    return grade;
       
    
}
getGrade(20)