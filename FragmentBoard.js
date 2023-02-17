class FragmentBoard{
    parentElement
    id

    constructor(element, id) {
        this.parentElement = element;
        this.id = id;
        const block = document.createElement('div');
        this.element = block;
        block.classList.add('col-sm');
        block.classList.add('block-xo');
        block.textContent = '';
        block.id = id;
        block.addEventListener('click', ()=>{
            console.log((block.classList.contains('x')||block.classList.contains('o')));
            if(!(block.classList.contains('x')||block.classList.contains('o')))
                socket.send(block.id);
        });
        this.parentElement.appendChild(block);
        }
    // add_content(new_content){
    //     this.element.textContent = new_content;
    // }

    addClass(nameClass) {
        this.element.classList.add(nameClass);
    }
    deleteClass(nameClass){
        this.element.classList.remove(nameClass);
    }
}