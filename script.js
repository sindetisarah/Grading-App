function getGrade(marks){
    let grade;
    if(marks >= 80){
        grade="A";
        console.log(grade);
    }else if(marks >=70 && marks<80){
         grade="B";
         console.log(grade);
    }else if(marks>=60 && marks<70){
        grade="C";
        console.log(grade);
    }else if(marks>=50 && marks<60){
        grade="D";
        console.log(grade);
    } else if(marks>=50 && marks<60){
        grade="E";
        console.log(grade);

    }else{
        grade="F";
        console.log(grade)
    }
    return grade;
       
    
}
getGrade(20)
getGrade(50)
getGrade(60)
getGrade(80)
getGrade(70)