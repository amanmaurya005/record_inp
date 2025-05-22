
    let button=document.querySelector('#btn1');
    let inp=document.querySelectorAll(".inp");
    button.addEventListener('click',()=> {
        let parent = document.querySelector('#head');
        let clone = parent.cloneNode(true);
 let newinp = clone.querySelectorAll("input, select");
    newinp.forEach(input => {
        if (input.tagName === "SELECT") {
            input.selectedIndex = 0;
        } else {
            input.value = "";
        }
    });

        document.getElementById("result").appendChild(clone)
        
    });