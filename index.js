let show_onscreen = document.getElementById("col")


let store_cards;
if (sessionStorage.getItem("checking")) {
    store_cards = JSON.parse(sessionStorage.getItem("checking"))
} else {
    store_cards = []
}

function read_idea(){
    
    let container = '';
    let container2 = '';
    store_cards.forEach((ele, i) => {
        if( !ele.selected ){
            container += `
                
                <div class="card card-1" style="width: 18rem; margin-bottom: 10px;" title="Click to select" onclick="collaborate(${i})">
                    <div class="card-body">
                        <h5 class="card-title">${ele.username}</h5>
                        <p>Email: ${ele.surname}</p>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Date: ${ele.date} </h6>
                        <p href="#" class="username">Idea: ${ele.idea}</p>
                    </div>
                </div>
                `
        }else{  
            container2 += `
                
                <div class="card card-2" style="width: 18rem; margin-bottom: 10px;" onclick="collaborate(${i})">
                <div class="card-body">
                <h6 class="card-subtitle mb-2 text-body-secondary">Date: ${ele.date}</h6>
                <p class="card-text"> ${ele.idea}</p>
                <p class="">Collaborators: ${ele.collaborators}</p>
                <p  class="">Name: ${ele.username} </p>
                <p>${ele.surname}</p>
                </div>
            </div>
               `
        }
    });

    document.querySelector(".card-wrapper").innerHTML = container
    document.querySelector(".selected").innerHTML = container2
}

read_idea()

let item = {}
function create() {
    let input1 = document.getElementById('name').value;
    let input2 = document.getElementById('email').value;
    let input3 = document.getElementById('enter_idea').value;
    let d = new Date();

    if (input1 && input2 && input3) {
        
        item.username = input1;
        item.surname = input2;
        item.idea = input3;
        item.selected = false;
        item.collaborators = -1;
        item.date = `${d.getFullYear()}-${d.getDate()}-${d.getMonth() + 1}`;
        store_cards.push(item)
        console.log(store_cards)

        sessionStorage.setItem("checking", JSON.stringify(store_cards))
    } else {
        return formValidation();
    }

    window.location.reload();

}


function collaborate(index){
    let uptaded_item = store_cards[index];
    uptaded_item.selected = true;
    uptaded_item.collaborators += 1;

    store_cards.splice(index,1,uptaded_item);
    sessionStorage.setItem("checking", JSON.stringify(store_cards))
    console.log(store_cards);
    read_idea()
}

// let text = "Do you wanna collaborate in this project?"

// if(confirm(text) == true){
    
// }

function formValidation(){

    let username = document.getElementById("name").value;
    let contact_details = document.getElementById("email").value
    let idea = document.getElementById("enter_idea").value
    console.log(username)
    if(!username && !contact_details && !idea){
        document.querySelector(".show").innerHTML = "Please fill the required details";
    }
}

