// First is get element by its id. In which we first access the document and then apply getElementById method on it and then in qoutes we pass our id like.,

document.getElementById('title'); // It returns the full tag with its attributes and inner values
// We also store this in a variable like.,
const title = document.getElementById('title');


// here in this we also access its properties like id, class, innertext or innerhtml 

document.getElementById('title').id // It returns the id of the tag
document.getElementById('title').className // It returns the class name of the tag

document.getElementById('title').innerHTML // It returns the HTML value of the tag
document.getElementById('title').textContent // To grab the text of the following tag 
document.getElementById('title').innerText // it returns the text display on screen

// getAttribute 
document.getElementById('title').getAttribute('id'); // returns the value of the given attribute

// setAttribute
document.getElementById('title').setAttribute('class', "heading"); // To change the attribute's value. Note - It overwrite the original value 



// Change styles in DOM 
// <get the element>.<style>.<styling property> = '<define the property>'

title.style.backgroundColor = 'blue';



// ---------------------------- Query Selector ----------------------------

document.querySelector('h2'); // It return the first attribute which match with it.
document.querySelector('.head'); // It return the first attribute which match with it.
// We can access it by id or class or also by direct HTML tag.


// To access a nested element first method is to get upper and then in it attribute 
document.querySelector('ul').querySelector('li');

// querySelectorAll
document.querySelectorAll('li'); // If we run this it returns us a NodeList which is similiar to a array but not a proper array. So for access values here first we store this in a variable 

const tempList = document.querySelectorAll('li');
// and for access a single value we write the index value like.,

tempList[0].style.color = 'blue';

// Note: If we have single value in nodelist we also use the above method.

// We also use forEach method on nodeList 

tempList.forEach((val) => {
    val.style.backgroundColor = 'blue'
}); // To open the scope in console use shift + enter



// IMP. change a HTML collection to a array
// this method is generally use with HTML collection like.,

const tempListItem = document.getElementsByClassName('list-item');
Array.from(tempListItem);

// we also apply multiple properties in a single query selector element. like.,

const allList = document.querySelectorAll('li');

allList.forEach((listItem) => {
    listItem.style.backgroundColor = 'blue';
    listItem.style.color = 'black';
    listItem.style.padding = '10px';
    listItem.innerText = 'List-Item';
});