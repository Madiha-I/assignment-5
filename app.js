// Chapter 1

// Task 1
// alert("Welcome Aboard!");

// Task 2
// alert("JavaScript Alert \n Error! Please enter a valid password.");

// Task 3
// alert("Welcome to JS Land... \n  Happy Coding");

// Task 4
// alert("Welcome to JS Land");
// alert("Happy Coding!");

// Task 5
//alert("Hello... I can run JS through my web browser’s console");




// Chapter 2

// Task 1
// var username;


// Task 2
// var myName="Madiha Idrees";


// Task 3
// var message;
// message="Hello World";
// alert(message);


// Task 4
// var name = "John Doe";
// var age = 15;
// var qualification = "Mobile Application Development";

// alert(name);
// alert(age + " years old");
// alert("Certified " + qualification);


// Task 5
//var food = "PIZZA";
// alert(food + "\n" + food.slice(0,4)+ "\n" + food.slice(0,3)+ "\n" + food.slice(0,2)+ "\n" + food.slice(0,1));


// Task 6
// var email = "madihaidrees15@hotmail.com";
// alert("My email adress is " + email);

// Task 7
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the book, " + book);

// Task 8
// document.write("Yah! I can write HTML content through JavaScript");

// Task 9
// var string = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(string);




// Chapter 3

// Task 1
// var age = 21;
// alert("I am " + age + " years old");


// Task 2
// var count = 14;
// alert("You have visited this site " + count + " times");


// Task 3
// var birthYear = 1998;
// document.write("My birth year is " + birthYear);
// document.write(" <br> Data type of my declared variable is " + (typeof birthYear));

// Task 4
// var name = prompt("Your name");
// var product = prompt("Your desired product");
// var quantity = prompt("product quantity");
// document.write(name + " has ordered " + quantity +" "+ product +"(s) on XYZ Clothing store");




// Chapter 4

// Task 1
// var name, age, gender;

// Task 2
// var 1stname, @ge, last name, *position, 2nd grade; 

// var name1, _gender, $age, userName, l_name;


// Task 3
// document.write("<br> <h1>Rules for naming JS variables</h1>");
// document.write("<br> <br> Variable names can only contain letters, numbers, $ and _ . For example $my_1stVariable");
// document.write("<br> Variables must begin with a letter, $ or_ . For example $name, _name or name");
// document.write("<br> Variable names are case sensitive");
// document.write("<br> Variable names should not be JS keywords");




// Chapter 5

// Task 1
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// document.write("<br> Sum of " + num1 + " and " + num2 + " is " + (num1+num2) );

// Task 2
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");
// document.write("<br> Difference of " + num1 + " and " + num2 + " is " + (num1-num2) );
// document.write("<br> Product of " + num1 + " and " + num2 + " is " + (num1*num2) );
// document.write("<br> Division of " + num1 + " and " + num2 + " is " + (num1/num2) );
// document.write("<br> Modulus of " + num1 + " and " + num2 + " is " + (num1%num2) );

// Task 3
// var value;
// document.write("<br> Value after variable declaration is " + value);
// value = 5;
// document.write("<br> Initial value: " + value);
// value++;
// document.write("<br> Value after increment is: " + value);
// value = value + 7;
// document.write("<br> Value after addition is:  " + value);
// value--;
// document.write("<br> Value after decrement is: " + value);
// document.write("<br> The remainder is: " + (value%3));

// Task 4
// var cost = 600;
// document.write("<br> Total cost of buying 5 tickets to a movie is " + (cost*5) + "PKR");

// Task 5
// var num = +prompt("Enter a number");
// document.write("<br> Table of " + num);
// for(var i=1; i<=10; i++)
// {
//     document.write("<br>" + num + " x " + i + " = " + (num*i) );
// }

// Task 6
// var cel = 25, far = 70;
// document.write("<br>" + cel + "°C" + " is " + ((cel*(9/5)+32)) + "°F" );
// document.write("<br>" + far + "°F" + " is " + ((far-32)*(5/9)) + "°C" );

// Task 7
// var shipCharge = 100, total;
// var price1 = +prompt("Enter price of 1st item");
// var amount1 = +prompt("Enter quantity of 1st item");
// var price2 = +prompt("Enter price of 2nd item");
// var amount2 = +prompt("Enter quantity of 2nd item");
// total = (price1*amount1) + (price2*amount2) + shipCharge;

// document.write("<br> <h1>Shopping Cart</h1>");
// document.write("<br> Price of item 1 is " + price1);
// document.write("<br> Quantity of item 1 is " + amount1);
// document.write("<br> Price of item 2 is " + price2);
// document.write("<br> Quantity of item 2 is " + amount2);
// document.write("<br> Shipping Charges " + shipCharge);
// document.write("<br><br> Total cost of your order is " + total);

// Task 8
// var marks = +prompt("Enter obtained marks");
// var totalMarks = +prompt("Enter total marks");

// document.write("<br> <h1>Mark Sheet</h1>");
// document.write("<br> Total Marks: " + totalMarks);
// document.write("<br> Marks Obtained: " + marks);
// document.write("<br> Percentage: " + ((marks/totalMarks)*100) + "%" );

// Task 9
// var dollar = 10, riyal = 25;
// document.write("<br> <h1>Currency in PKR</h1>");
// document.write("<br> Total Currency in PKR: " + ((dollar*104.80) + (riyal*28)) );

// Task 10
// var num = 2;
// num = (((num+5)*10)/2);
// document.write("<br> Result: " + num);

// Task 11
// var curYear = +prompt("Enter the current year");
// var birthYear = +prompt("Enter the birth year");

// document.write("<br> <h1>Age Calculator</h1>");
// document.write("<br> Current Year: " + curYear);
// document.write("<br> Birth Year: " + birthYear);
// document.write("<br> Your Age is either: " + ((curYear-birthYear)-1) + " or " + (curYear-birthYear) );


// Task 12
// var radius = 20, pie = 3.142;

// document.write("<br> <h1>The Geometrizer</h1>");
// document.write("<br> Radius of a circle is: " + radius);
// document.write("<br> The circumference is: " + (2*pie*radius));
// document.write("<br> The area is: " + (pie*(radius*radius)));


// Task 13
// var favSnack = prompt("Enter your favourite snack");
// var age = +prompt("Enter your age");
// var estMaxAge = +prompt("Enter an estimated maximum age");
// var perDay = +prompt("Enter amount per day");
// var total = (((estMaxAge-age)*365)*perDay);

// document.write("<br> <h1>Lieftime Supply Calculator</h1>");
// document.write("<br> Favourite Sanck: " + favSnack);
// document.write("<br> Current Age: " + age);
// document.write("<br> Estimated Maximum Age: " + estMaxAge);
// document.write("<br> Amount of Snacks Per Day: " + perDay);
// document.write("<br> You will need " + total +" "+ favSnack + " to last you until the ripe old age of " + estMaxAge);



// Chapter 6 - 9

// Task 1
// var a = 10;

// document.write("<br> Result:");
// document.write("<br> The value of  a  is: " + a);
// document.write("<br> ...........................");
// document.write("<br><br>  The value of  ++a  is: " + (++a));
// document.write("<br> Now the value of  a  is: " + a);
// document.write("<br><br>  The value of  a++  is: " + (a++));
// document.write("<br> Now the value of  a  is: " + a);
// document.write("<br><br>  The value of  --a  is: " + (--a));
// document.write("<br> Now the value of  a  is: " + a);
// document.write("<br><br>  The value of  a--  is: " + (a--));
// document.write("<br> Now the value of  a  is:" + a);


// Task 2
// var a = 2, b = 1;
// var result;
// document.write("<br> The value of a is: " + a);
// document.write("<br> The value of b is: " + b);
// document.write("<br> Computing --a - --b + ++b + b--: ");
// result = --a;
// document.write("<br> The value of  --a  is: " + result);
// result = result - --b;
// document.write("<br> The value of  --a - --b  is: " + result);
// result = result + ++b;
// document.write("<br> The value of  --a - --b + ++b  is: " + result);
// document.write("<br> The value of  --a - --b + ++b + b--  is: " + (result + b--));


// Task 3
// var name = prompt("What is your name?");
// alert("Greetings, " + name + "!");


// Task 4
// var table;
// table = +prompt("Pick a number");

// if (table > 0)
// {
//     document.write("<br> Table of " + table);
//     for(var i=1; i<=10; i++)
//     {
//         document.write("<br>" +table+ " x " +i+ " = " +table*i);
//     }
// }
// else
// {
//     for(var i=1; i<=10; i++)
//     {
//         document.write("<br>" +5+ " x " +i+ " = " +5*i);
//     }
// }


// Task 5
// var sub1, sub2, sub3, mark1, mark2, mark3, total = 100;
// sub1 = prompt("Enter 1st Subject");
// mark1 = +prompt("Enter " + sub1 + " Mark");
// sub2 = prompt("Enter 2nd Subject");
// mark2 = +prompt("Enter " + sub2 + " Mark");
// sub3 = prompt("Enter 3rd Subject");
// mark3 = +prompt("Enter " + sub3 + " Mark");

// document.write("<br><table>");
// document.write("<tr>");
// document.write("<td><b>Subject</td>");
// document.write("<td><b>Total Marks</td>");
// document.write("<td><b>Obtained Marks</td>");
// document.write("<td><b>Percentage</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub1+"</td>");
// document.write("<td>"+total+"</td>");
// document.write("<td>"+mark1+"</td>");
// document.write("<td>"+((mark1/total)*100)+"%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub2+"</td>");
// document.write("<td>"+total+"</td>");
// document.write("<td>"+mark2+"</td>");
// document.write("<td>"+((mark2/total)*100)+"%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>"+sub3+"</td>");
// document.write("<td>"+total+"</td>");
// document.write("<td>"+mark3+"</td>");
// document.write("<td>"+((mark3/total)*100)+"%</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td> </td>");
// document.write("<td><b>"+total*3+"</td>");
// document.write("<td><b>"+(mark1+mark2+mark3)+"</td>");
// document.write("<td><b>"+(((mark1+mark2+mark3)/(total*3))*100)+"%</td>");
// document.write("</tr>");
// document.write("</table>");




// Chapter 9 - 11

// Task 1
// var city = prompt("Enter your city");
// if(city === "karachi" || city === "Karachi")
// {
//     alert("Welcome to the city of lights!");
// }


// Task 2
// var gender = prompt("Enter your gender");
// if(gender === "male" || gender === "Male")
// {
//     alert(" Good Morning Sir");
// }
// else if(gender === "female" || gender === "Female")
// {
//     alert(" Good Morning Ma’am");
// }


// Task 3
// var colour = prompt("Enter traffic light colour");
// if(colour === "red" || colour === "Red")
// {
//     alert("Must Stop!");
// }
// else if(colour === "yellow" || colour === "Yellow")
// {
//     alert("Ready to move!");
// }
// else if(colour === "green" || colour === "Green")
// {
//     alert("Move now!");
// }


// Task 4
// var amount = +prompt("Enter fuel in car in litres");
// if(amount === 0.25)
// {
//     alert("Please refill the fuel in your car!");
// }


// Task 5
// var a = 4;
// if (++a === 5)
// {alert("given condition for variable a is true");}
// Result: given condition for variable a is true

// var b = 82;
// if (b++ === 83)
// {alert("given condition for variable b is true");}
// Result: no result

// var c = 12;
// if (c++ === 13)
// {alert("condition 1 is true");}
// if(c === 13){alert("condition 2 is true");}
// if (++c < 14){alert("condition 3 is true");}
// if(c === 14){alert("condition 4 is true");}
// Result: condition 2 is true, condition 4 is true

// var materialCost = 20000;var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost)
// {alert("The cost equals");}
// Result: The cost equals

// if (true)
// {alert("True");}
// if (false)
// {alert("False");}
// Result: True

// if("car" < "cat")
// {alert("car is smaller than cat");}
// Result: car is smaller than cat


// Task 6
// var marks1, marks2, marks3, totalMarks, percentage, total = 100;
// marks1 = +prompt("Enter 1st subject marks");
// marks2 = +prompt("Enter 2nd subject marks");
// marks3 = +prompt("Enter 3rd subject marks");

// totalMarks = marks1 + marks2 + marks3;
// percentage = (totalMarks/(total*3))*100;

// document.write("<br> <h1>Mark Sheet</h1>");
// document.write("<br>Total Marks : " + total);
// document.write("<br>Marks Obtained: " + totalMarks);
// document.write("<br>Percentage: " + percentage + "%");
// if(percentage >= 80)
// {
//     document.write("<br>Grade: A-one");
//     document.write("<br>Remarks: Excellent");
// }
// else if(percentage >= 70)
// {
//     document.write("<br>Grade: A");
//     document.write("<br>Remarks: Good");
// }
// else if(percentage >= 60)
// {
//     document.write("<br>Grade: B");
//     document.write("<br>Remarks: You need to improve");
// }
// else if(percentage < 60)
// {
//     document.write("<br>Grade: You Fail");
//     document.write("<br>Remarks: Sorry");
// }


// Task 7
// var num = 5, guess;

// guess = +prompt("Guess a number between 1 and 10");
// if(guess === num)
// {
//     alert("Bingo! Correct answer");
// }
// else if(guess === (num + 1))
// {
//     alert("Close enough to the correct answer");
// }


// Task 8
// var num = +prompt("Enter a number");
// if((num%3) === 0)
// {
//     alert("This number is divisble by 3");
// }
// else
// {
//     alert("This number is not divisble by 3");
// }


// Task 9
// var num = +prompt("Enter a number");
// if((num%2) === 0)
// {
//     alert("This number is even");
// }
// else
// {
//     alert("This number is odd");
// }


// Task 10
// var temp = +prompt("Enter today's temperature");
// if(temp > 40)
// {
//     alert("It is too hot outside");
// }
// else if(temp > 30)
// {
//     alert("The weather today is normal");
// }
// else if(temp > 20)
// {
//     alert("Today’s weather is cool");
// }
// else if(temp > 10)
// {
//     alert("OMG! Today’s weather is so Cool");
// }


// Task 11
// var num1, num2, operator;

// num1 = +prompt("Enter 1st number");
// operator = prompt("Enter operation");
// num2 = +prompt("Enter 2nd number");

// if(operator === '+')
// {
//     alert("Result: " + (num1+num2));
// }
// else if(operator === '-')
// {
//     alert("Result: " + (num1-num2));
// }
// else if(operator === '*')
// {
//     alert("Result: " + (num1*num2));
// }
// else if(operator === '/')
// {
//     alert("Result: " + (num1/num2));
// }
// else if(operator === '%')
// {
//     alert("Result: " + (num1%num2));
// }




// Chapter 12 - 13

// Task 1
// var char = prompt("Enter a character");
// if(char.charCodeAt(0)>=48 && char.charCodeAt(0)<=57)
// {
//     alert(char + " is a number");
// }
// else if(char.charCodeAt(0)>=65 && char.charCodeAt(0)<=90)
// {
//     alert(char + " is an uppercase letter ");
// }
// else if(char.charCodeAt(0)>=97 && char.charCodeAt(0)<=122)
// {
//     alert(char + " is a lowercase letter ");
// }


// Task 2
// var num1 = +prompt("Enter 1st number");
// var num2 = +prompt("Enter 2nd number");

// if(num1 > num2)
// {
//     alert(num1 + " is bigger");
// }
// else if(num2 > num1)
// {
//     alert(num2 + " is bigger");
// }
// else
// {
//     alert("both numbers are equal");
// }


// Task 3
// var num = +prompt("Enter an number");
// if(num > 0)
// {
//     alert(num + " is a positive number");
// }
// else if(num === 0)
// {
//     alert(num + " is equal to zero");
// }
// else
// {
//     alert(num + " is a negative  number");
// }


// Task 4
// var char = prompt("Enter a character");
// if(char === 'a' || char === 'e' || char === 'i'|| char === 'o'|| char === 'u' || char === 'A'|| char === 'E'|| char === 'I'|| char === 'O'|| char === 'U')
// {
//     alert(char + " is a vowel");
// }
// else 
// {
//     alert(char + " is a consonant");
// }


// Task 5
// var password, confirmation;
// password = prompt("Save a password");
// confirmation = prompt("Enter your password");
// if(confirmation === null)
// {
//     alert("Please enter your password");
// }
// else
// {
    // if(confirmation === password)
    // {
    //     alert("Correct! The password you entered matches the original password");
    // }
    // else
    // {
    //     alert("Incorrect password");
    // }
// }


// Task 6
// var greeting;var hour = 13;
// if (hour < 18) 
// {greeting = "Good day";}
// else
// {greeting = "Good evening";}


// Task 7
// var time;
// time = prompt("Enter time in 24-hour format");

// if(time>=0000 && time<1200)
// {
//     alert("Good Morning!");
// }
// else if(time>=1200 && time<1700)
// {       
//      alert("Good Afternoon!");
// }
// else if(time>=1700 && time<2100)
// {       
//      alert("Good Evening!");
// }
// else if(time>=2100 && time<=2359)
// {       
//      alert("Good Night!");
// }




// Chapter 14- 16

// Task 1
// var stdName = [];


// Task 2
// var stdName = new Array();


// Task 3
// var stdName = ["Ahmed", "Ali", "Umar"];


// Task 4
// var num = [1, 2, 3, 4];


// Task 5
// var bool = [true, false];


// Task 6
// var mixed = ["tree", 5, false];


// Task 7
// var qual = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil", "PhD"];

// document.write("<br> Qualifications:");
// for(var i=0; i< (qual.length); i++)
// {
//     document.write("<br>" + (i+1)+") " + qual[i]);
// }


// Task 8
// var stdName = ["Michael","John","Tony"];
// var marks = [320, 230, 480];

// for(var i=0; i< (stdName.length); i++)
// {
//     document.write("<br> Score of " + stdName[i]+ " is " + marks[i] + ". Percentage: " + ((marks[i]/500)*100) + "%" );
// }


// Task 9
// var colour = ["green", "red", "blue"];

// document.write("<br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// document.body.innerHTML = " ";
// var newColour = prompt("Pick a colour to add to the beginning");
// colour.unshift(newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// newColour = prompt("Pick a colour to add to the end");
// colour.push(newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// alert("Pick two colours to add to the beginning");
// newColour = prompt("Pick 1st colour to add to the beginning");
// colour.unshift(newColour);
// newColour = prompt("Pick 2nd colour to add to the beginning");
// colour.unshift(newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// alert("After the 1st colour is deleted");
// colour.shift();
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// alert("After the last colour is deleted");
// colour.pop();
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// newColour = prompt("Pick a colour to add");
// var index = prompt("Pick index");
// colour.splice(index, 0,newColour);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }

// var amount = prompt("Pick how many colours to delete");
// var index = prompt("Pick index");
// colour.splice(index, amount);
// document.write("<br><br> Colours:");
// for(var i=0; i< (colour.length); i++)
// {
//     document.write("<br> " + colour[i]);
// }


// Task 10
// var scores = [320, 230, 480, 120];

// document.write("<br>Scores of Students: " + scores);
// scores.sort(function(a, b){return a - b});
// document.write("<br><br>Ordered Scores of Students: " + scores);



// Task 11
// cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
// var selectedCities = cities.slice(2, 5);

// document.write("<br> Cities List: <br>" + cities);
// document.write("<br><br> Selected Cities List: <br>" + selectedCities);


// Task 12
// var arr = ["This", "is", "my", "cat"];
// document.write("<br> Array: <br>" + arr);
// document.write("<br><br> String: <br>" + arr.join(" ") );


// Task 13
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<br> Devices: <br>" + devices + "<br>");
// var length = devices.length;
// for(var i=0; i<length; i++)
// {
//     document.write("<br>Out:");
//     var x = devices.shift();
//     document.write("<br>" + x);
// }



// Task 14
// var devices = ["keyboard", "mouse", "printer", "monitor"];
// document.write("<br> Devices: <br>" + devices + "<br>");
// var length = devices.length;
// for(var i=0; i<length; i++)
// {
//     document.write("<br>Out:");
//     var x = devices.pop();
//     document.write("<br>" + x);
// }




// Task 15
// phone = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];

// document.write("<br> <select>");
// for(var i=0; i<phone.length; i++)
// {
//     document.write("<option>" + phone[i] +"</option>");
// }
// document.write("</select>");




// Chapter 17- 20

// Task 1
// var studentMarks = [
//     ["Ali", 60],
//     ["Ahmed", 70],
//     ["Umar", 80]
// ];


// Task 2
// var arr = [
//     [0,1,2,3],
//     [1,0,1,2],
//     [2,1,0,1]
// ];


// Task 3
// for(var i=1; i<=10; i++)
// {
//     document.write("<br>" + i);
// }


// Task 4
// var table = +prompt("Enter a number to show its multiplication table");
// var length = +prompt("Enter length of multiplication table");

// document.write("<br> Multiplication Table of " + table);
// document.write("<br> Length " + length + "<br>");
// for(var i=1; i<=length; i++)
// {
//     document.write("<br>" + table + " x " + i + " = " + (table*i));
// }


// Task 5
// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];

// for(var i=0; i<fruits.length; i++)
// {
//     document.write("<br>" + fruits[i]);
// }
// document.write("<br>");
// for(var i=0; i<fruits.length; i++)
// {
//     document.write("<br> Element at index " + i + " is " + fruits[i]);
// }


// Task 6
// document.write("<br> <b>Counting:</b> <br><br>");
// for(var i=1; i<=15; i++)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Reverse Counting:</b> <br><br>");
// for(var i=10; i>=1; i--)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Even:</b> <br><br>");
// for(var i=2; i<=20; i+=2)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Odd:</b> <br><br>");
// for(var i=1; i<=19; i+=2)
// {
//     document.write(i + ", ");
// }
// document.write("<br><br> <b>Series:</b> <br><br>");
// for(var i=2; i<=20; i+=2)
// {
//     document.write(i + "k, ");
// }


// Task 7
// A = ["cake", "apple pie", "cookie", "chips", "patties"]; var available = 0;
// var input = prompt("Welcome to ABC Bakery. What do you want to order Sir / Ma'am?");
// for(var i=0; i<A.length; i++)
// {
//     if(A[i] === input)
//     {
//         var available = 1;
//         document.write(input + " is <b>available</b> at index " + i + " in our bakery");
//         break;
//     }
// }
// if(available === 0)
// {
//     document.write("We are sorry. " + input + " is <b> not available</b> in our bakery")
// }    


// Task 8
// var A = [24, 53, 78, 91, 12]; big = 0;

// for(var i=0; i<A.length; i++)
// {
//     if(A[i] > big )
//     {
//         big = A[i];
//     }
// }

// document.write("<br> Array items: " + A);
// document.write("<br> The largest number is " + big);


// Task 9
// var A = [24, 53, 78, 91, 12]; small = A[0];

// for(var i=0; i<A.length; i++)
// {
//     if(A[i] < small )
//     {
//         small = A[i];
//     }
// }

// document.write("<br> Array items: " + A);
// document.write("<br> The smallest number is " + small);


// Task 10
// for(var i=5; i<=100; i+=5)
// {
//     document.write(i + ", ");
// }




