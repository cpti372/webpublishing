var fa=require('fs');
fa.writeFileSync('food.txt',"i hate you");
console.log(fs.readFileSync("food.txt").toString());