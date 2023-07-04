
const todoList = document.querySelectorAll(".todo_list_area li");
const formArea = document.querySelector(".todo_form");
const clickArea = document.querySelector(".todo_list_area ul");
const textField = document.querySelector("#text_input");

clickArea.addEventListener("click", (e) => {

    if(e.target.classList.contains("option")) {
        const vargb = e.target.nextSibling.firstChild;
        if(vargb.style.visibility === "visible") {
            vargb.style.visibility = "hidden";
        } else {
            vargb.style.visibility = "visible";
        }
    }

    if(e.target.classList.contains("delete")) {
        e.target.parentNode.parentNode.parentNode.parentNode.remove();
    }

    if(e.target.classList.contains("edit")) {
        const text = e.target.offsetParent.offsetParent.previousSibling.textContent;

        textField.value = text;
        
        e.target.offsetParent.offsetParent.parentElement.remove();
        
    }

    if(e.target.tagName === "SPAN" || e.target.tagName === "INPUT") {
        if(e.target.tagName === "SPAN") {
            if(e.target.classList.contains("done")) {
                e.target.classList.remove("done");
                e.target.previousSibling.checked = false;
            } else {
                e.target.classList.add("done");
                e.target.previousSibling.checked = true;
            }
        } if(e.target.tagName === "INPUT") {
            if(e.target.nextSibling.classList.contains("done")) {
                e.target.nextSibling.classList.remove("done");
            } else {
                e.target.nextSibling.classList.add("done");
            }
        }
       
    }

});

formArea.addEventListener("submit", (e) => {
    e.preventDefault();

    const input = e.target.inp.value;
    if(validateInput(input, e.target.inp)){
        clickArea.insertAdjacentElement("beforeend", createNewElement(input));
        
        e.target.inp.value = "";
    }
});

const validateInput = (text, element) => {
    if(text) {
        element.parentNode.classList.remove("err");
        return true;
    } else {
        element.parentNode.classList.add("err");
        alert("Your task field is empty!");
        return false;
    }
};

const createNewElement = (text) => {

    const listOfElement = document.createElement('li');

    let htmlBlog =  "<label for= 'task'>" +
                        "<input name='task' type='checkbox'>" +
                        "<span style = 'padding-left: 10px'>" + text +"</span>" +
                    "</label>" +
                    "<span style = 'padding-left: 10px' class='dot_icon'>" +
                        "<i class='uil uil-ellipsis-h option'></i>" +
                        "<span class='option_bar'>" +
                            "<span class='main_option'>" +
                                "<i class='uil uil-trash-alt delete'></i>" +
                                "<i class='uil uil-edit edit'></i>" +
                            "</span>" +
                        "</span>" +
                    "</span>";

    listOfElement.innerHTML = htmlBlog;
    return listOfElement;
};



