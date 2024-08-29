function triangle (height){
    for (let i =1; i<= height; i++){
        row = "";
        for (let j = height; j >=  i; j--){
            row += "* ";
        }
        console.log(row);
    }
    
}
triangle(69);