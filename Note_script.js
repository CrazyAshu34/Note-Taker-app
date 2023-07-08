let myform = document.querySelector('#myform')
let myinput = document.querySelector('#inp')
let output = document.querySelector('#last_block')
let one = 1;

myform.addEventListener('submit', e => {
    e.preventDefault(); // such a pain in the ass
    if (myinput.value.trim() === '') {
        console.log('working empty')
        return;
    }
    else {
        //creating and assinging value 
        let noteContainer = document.createElement('div')
        noteContainer.className = 'note-container'

        let heading = document.createElement('h3')
        heading.className = 'heading';
        heading.textContent = 'Note' + one;// incremantation is imp...
        one++;
        //store value;
        let store_value = document.createElement('p') //assignning input value to p
        store_value.className = 'paragraph'
        store_value.innerHTML = "<b> 📓 : </b>" + myinput.value;

        // appending the value 
        noteContainer.append(heading, store_value)
        output.appendChild(noteContainer)

        // clearing the input 
        myinput.value = '';

        //checking some Mother fucking error 
        console.log('Appending is also working ')
    }
})

