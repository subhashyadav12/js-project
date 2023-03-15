function popup() {
    let body = document.getElementsByTagName("body")[0];
    let main = document.createElement("main");
    main.innerHTML = body.innerHTML;
    main.style.filter = "blur(4px)";
    body.innerHTML = ``;
    body.append(main);
    let div = document.createElement("div");
    div.className = "new";
    div.innerHTML =
        `<p class="c1">Add New Task</p>
    <input type="text" placeholder="Add New Task" id="name">
    <div class="popupWindow">
        <button onclick="addTask()">Add</button>
        <button onclick="goBack()">Close</button>
    </div>`;
    body.append(div);
};
const taskList = [];
let counter = 0;
let Count = 1;
let addTask = () => {
    let card_Title = document.getElementById("name").value;
    if (card_Title !== ''){
        const tempObj = {
            id: Date.now(),
            taskname: card_Title
        };
        taskList.push(tempObj);
        document.getElementById("msg").style.visibility = "hidden";
        let parent = document.getElementById("parent");
        parent.innerHTML += `<div id= ${counter} class="item">
                <span class="c2" onclick="expandItem(this)">${card_Title}</span>
                <br>
                <hr>
                <ul class="tasks" id="items-list-${counter}"></ul>
                <i class="fa-solid fa-trash-can close" onclick="delList(this)"></i>
                <i class="fa-solid fa-circle-plus addtask" id="add-btn-${counter++}" onclick="popup2(); getListID(event)"></i>
            </div>`;
        let body = document.getElementsByTagName("body")[0];
        let main = document.getElementsByTagName("main")[0];
        body.innerHTML = main.innerHTML;
    }
    else
    {
        alert("Plese Enter Task");
    }
}
function popup2() {
    let body = document.getElementsByTagName("body")[0];
    let main = document.createElement("main");
    main.innerHTML = body.innerHTML;
    main.style.filter = "blur(4px)";
    body.innerHTML = ``;
    body.append(main);
    let div = document.createElement("div");
    div.className = "new";
    div.innerHTML =
        `<p class="c2">Add New Item</p>
    <input type="text" placeholder="Add New Item" id="item_title" autofocus>
    <div class="popupWindow">
        <button onclick="addItem(this)">Add</button>
        <button onclick="goBack()">Close</button>
    </div>`;
    body.append(div);
};

let listID = "";
function getListID(tasks) {
    listID = tasks.target.previousSibling.previousSibling.previousSibling.previousSibling.id;
}

let addItem = () => {
    let item_title = document.getElementById("item_title").value;
    if (item_title !== '') {
        let li = document.createElement("li");
        document.getElementById(listID).appendChild(li);
        li.id = `item-${Count++}`;
        li.innerHTML = `<span>${item_title}</span>
        <button class="btn" onclick="strike(this)">mark done</button>`;
        let body = document.getElementsByTagName("body")[0];
        let main = document.getElementsByTagName("main")[0];
        body.innerHTML = main.innerHTML;
    }
    else{
        alert("Please Enter Additonal Items");
    }

};

let strike = (btn) => {
    btn.parentElement.classList.add("marked");
    btn.classList.add("hide");
};



let delList = (trash_can) => {
    trash_can.parentElement.remove();
    taskList.splice(trash_can.parentElement.id, 1);
    if (taskList.length === 0) {
        document.getElementById("msg").style.visibility = "visible";
        document.getElementById("msg").style.opacity = 0.7;
    };
};

function goBack() {
    let body = document.getElementsByTagName("body")[0]
    let main = document.getElementsByTagName("main")[0]
    body.innerHTML = main.innerHTML
}

let expandItem = (card) => {
    let body = document.getElementsByTagName("body")[0]
    let take = document.createElement("section")
    take.innerHTML = body.innerHTML
    body.innerHTML = ``
    body.append(take)
    let div = document.createElement("div")
    div.className = "popup"
    div.innerHTML =
        `<header class="item_expand_header">
      <div class="expBack" onclick="Close()">
        <i class="fa-solid fa-circle-chevron-left"></i>
        <span id="c3">Back</span>
      </div>
      <span id="itemExpTitleID" class="itemExpTitle">${card.innerText}</span>
      <div class="expAdd" onclick="popup()">
        <i class="fa-solid fa-circle-plus" style = "color:#00a5ec"></i>
        <span id="c3">Add Task</span>
      </div>
    </header>
    <div class="content">
        <div id="itemDetail" class="item_Detail"> ${card.parentElement.innerHTML}</div>
    </div>`
    body.append(div)
};


function Close() {
    let body = document.getElementsByTagName("body")[0]
    let take = document.getElementsByTagName("section")[0]
    body.innerHTML = take.innerHTML
}
