// 1 - Select the section with an id of container without using querySelector.
document.getElementById("container");

// 2 - Select the section with an id of container using querySelector.

document.querySelector("#container");

//3 - Select all of the list items with a class of "second".

document.querySelectorAll(".second");

//4 - Select a list item with a class of third, but only the list item inside of the ol tag.

document.querySelector("ol .third");

//5 - Give the section with an id of container the text "Hello!".

document.getElementById("container").innerHTML = "Hello!";

//6 - Add the class main to the div with a class of footer.

document.getElementsByClassName('footer')[0].classList.add('main');

//7 - Remove the class main on the div with a class of footer.

document.getElementsByClassName('footer')[0].classList.remove('main');

//8 - Create a new li element.

var li = document.createElement("li");

//9 - Give the li the text "four".

li.appendChild(document.createTextNode("four"));

//10 - Append the li to the ul element.

document.querySelector("ol").appendChild(li);

//12 - Loop over all of the lis inside the ol tag and give them a background color of "green".

var x = document.querySelectorAll("ol li"); 

for (let i = 0; i < x.length; i++)
{
    x[i].style.backgroundColor = "green"; 
}

//13 - Remove the div with a class of footer.

document.body.removeChild(document.querySelector('.footer'));