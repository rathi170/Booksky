//selecting popup,popup-box,button
var  popup=document.querySelector(".pop-up")
var popup_box=document.querySelector(".popup-box")
var btn=document.querySelector("#add-popup-btn")

btn.addEventListener("click",function()
{
    popup.style.display="block"
    popup_box.style.display="block"

})

var cancelbtn=document.getElementById("cancel-btn")
cancelbtn.addEventListener("click",function()
{
    event.preventDefault()
    popup.style.display="none"
    popup_box.style.display="none"
     
})

// container select ,bbok title ,author input,book description

var container=document.querySelector(".container")
var book_title= document.getElementById("book-title")
var book_Author=document.getElementById("book-author")
var book_description=document.getElementById("description")
var add_btn=document.getElementById("add-btn")

   add_btn.addEventListener("click",function(){
       event.preventDefault()
    var div =document.createElement("div")    
        div.setAttribute("class","book-container")
        div.innerHTML=`<h2>${book_title.value}</h2>
        <h1>${book_Author.value}</h1>
        <p>${book_description.value}</p>
     <button  onclick="deletefn(event)">Delete</button>`
    container.append(div)
    popup.style.display="none"
    popup_box.style.display="none"
    })

    // select delete

    function deletefn(event){
          event.target.parentElement.remove()
    }