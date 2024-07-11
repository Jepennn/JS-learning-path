
//Find the unorderd list and create a list element to append

function createListItem(item){

    const ulist = document.getElementById("item-list");
    const li = document.createElement("li");

    //creates all the children to the ul element
    const text = document.createTextNode(item);
    li.appendChild(text)

    //Creating button element
    const button = document.createElement("button")
    button.classList.add("remove-item", "btn-link", "text-red")

    //Creating children to button
    const i = document.createElement("i")
    i.classList.add("fa-solid", "fa-xmark")

    //Appending children to button
    button.appendChild(i)
    
    //Appending button to li
    li.appendChild(button)

    //Appending li element to ul element
    ulist.appendChild(li)
};


//Adding choclate to shopping list
createListItem("Choclate")
