let show_onscreen = document.getElementById("col")


let store_cards;
if (sessionStorage.getItem("checking")) {
    store_cards = JSON.parse(sessionStorage.getItem("checking"))
} else {
    store_cards = []
}

function read_idea(){
    let container = '<h2> Selected </h2><br><hr>';
    let container2 = '<br><h2> Not selected </h2><br><hr>';
    store_cards.forEach((ele, i) => {
        if( !ele.selected ){
            container += `
                
                <div class="card" style="width: 18rem;" onclick="collaborate(${i})">
                    <div class="card-body">
                        <h5 class="card-title">${ele.idea}</h5>
                        <h6 class="card-subtitle mb-2 text-body-secondary">Date: </h6>
                        <p class="card-text">${ele.idea}</p>
                        <a href="#" class="card-link">Collaborators: 0</a>
                        <a href="#" class="card-link">Name: ${ele.username} ${ele.surname}</a>
                    </div>
                </div>
                `
        }else{
            container2 += `
                
                <div class="card" style="width: 18rem;" onclick="collaborate(${i})">
                <div class="card-body">
                <h5 class="card-title">${ele.idea}</h5>
                <h6 class="card-subtitle mb-2 text-body-secondary">Date: </h6>
                <p class="card-text">${ele.idea}</p>
                <a href="#" class="card-link">Collaborators: 0</a>
                <a href="#" class="card-link">Name: ${ele.username} ${ele.surname}</a>
                </div>
            </div>
                `
        }
        

    });
    document.querySelector(".one").innerHTML = container
    document.querySelector(".selected").innerHTML = container2
}

read_idea()

let item = {}
function create() {
    let input1 = document.getElementById('name').value;
    let input2 = document.getElementById('surname').value;
    let input3 = document.getElementById('enter_idea').value;

    if (input1 && input2 && input3) {
        
        item.username = input1;
        item.surname = input2;
        item.idea = input3;
        item.selected = false;
        item.collaborators = -1;
        store_cards.push(item)
        console.log(store_cards)

        sessionStorage.setItem("checking", JSON.stringify(store_cards))
    }
    read_idea()
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