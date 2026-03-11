//The magical sorting hat:Immagine you have a magical sorting hat that assigns students to different houses based on the length of their names. The rules are as follows:
//If the student's name has 6 or fewer characters, they are assigned to the "Swift" house.
//If the student's name has more than 6 but less than 8 characters, they are assigned to the "Audi" house.
//If the student's name has 8 or more characters, they are assigned to the "BMW" house.
//Write a JavaScript program that takes an array of student names and outputs an array of their corresponding houses based on the above rules.



let students=["Siddhi","Shivani","Satyarth","Satyam","Satyarth","Satyarth"];
let houses=[]

for (const student of students) {
    if(student.length <= 6){
        houses.push("Swift");
    }
    else if(student.length < 8){
        houses.push("Audi");
    }
    else{
        houses.push("BMW");
    }
}
console.log(houses)