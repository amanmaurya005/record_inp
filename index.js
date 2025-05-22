
    let button=document.querySelector('#btn1')
    button.addEventListener('click',()=> {
        let parent = document.querySelector('#head');
        let clone = parent.cloneNode(true);

        let result = document.getElementById('result');
        result.append(clone);
    });
   