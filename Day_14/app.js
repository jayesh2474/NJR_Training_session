function triangle (height){
    for (let i =1; i<= height; i++){
        row = "";
        for (let j = 1; j <=  i; j++){
            row += "* ";
        }
        console.log(row);
    }
    
}
triangle(5);