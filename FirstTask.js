let x=250;

var zakat = x * 0.025 ;

console.log( "Your zakat pay = " + zakat)


/*
Array Tasks : 
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the','fox' 'over' lazy, 'dog',  ]

*/

var num = [ 1 , 7 , 9 , 4 , 5]
var name = [ "Str" , "alex" , "moh", 'the' , 'fox' , 'over' , "lazy" , 'dog']

/*
2
What the index of "Banana","Tomato"
var fruits=["Tomato","Banana","Watermelon"]

*/

var fruits = ["Tomato","Banana","Watermelon"]

console.log(fruits[1])
console.log(fruits[0])

/*
3
Create an array represents your:
1- Favorite Food (2)
2- Favorite Sport (3)
3- Favorite Movie (2)
*/

var Food =[ "kapsh" , "ch3achel" ]
var sport = [ "Fottball" , "Formula 1" , "Esports" ]
var Movie = [ "Avengers:Endgame" , "Deadpool & Wolverine" ]

/*
4
Create a Variable to return the first element in an array 
Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/

var Array2=[1,4,5]
var Array1=["t","u","g","x"]
var firstOfArray = [Array2[0] , Array1[0]]
console.log( firstOfArray ) 

/*
5
Create a Variable to return the lastOfArray element in an array 

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/

var lastOfArray = [Array2[2] , Array1[3]]
console.log( lastOfArray )

/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/

var array = [0,5,7,9]
array.shift(0)
array.shift(5)
array.shift(7)
array.unshift(1,3,4,6,8)
array.push(10)
console.log(array)

/*
7
Using the console try to figure out what the thing thats (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/

var array2 = [5,9,-7,3.5]

array2.sort()

console.log(array2)

/*
8.
Write a JavaScript program to sort the items of an array.
Sample array : var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
Sample Output : -4,-3,1,2,3,5,6,7,8
*/

var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];

    arr1.sort((a,b)=>a-b)
    
    console.log(arr1)

// 9.
// Write a JavaScript function that returns rate as text
// less than 50 return ==> Fail
// equal or between 50 and 59 ===> E
// equal or between 60 and 69 ===> D
// equal or between 70 and 79 ===> C
// equal or between 80 and 89 ===> B
// equal or between 90 and 100 ===> A

function reMark (num){

    if(num < 50){
        console.log("Fail!!")
    }else if (num >=50 && num <=59 ){
        console.log("E")
    }else if (num >=60 && num <=69 ){
        console.log("D")
    }else if (num >=70 && num <=79 ){
        console.log("C")
    }else if (num >=80 && num <=89 ){
        console.log("B")
    }else if (num >=90 && num <=100 ){
        console.log("A")
    }

}

reMark(49)

// 10.
// Write a JS code to print a pattern using for loop

//    1 
//    1 2 
//    1 2 3 
//    1 2 3 4 
//    1 2 3 4 5 
//    1 2 3 4 5 6 
//    1 2 3 4 5 6 7 
//    1 2 3 4 5 6 7 8 

for(i=1 ; i<=8 ; i++){
    document.write( "<br>" )
    for(j=1 ; j<=i ; j++){
        document.writeln(j)
    }
}
