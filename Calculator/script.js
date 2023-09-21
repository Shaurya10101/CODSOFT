string = ""
let keys = document.querySelectorAll('.button')

Array.from(keys).forEach((keys) => {
    keys.addEventListener('click', (event) => {

        if (event.target.innerHTML == "=") {
            try {
                string = eval(string);
                document.querySelector('input').value = string;
              } catch (error) {
                document.querySelector('input').value = 'Error';
                string = ''; // Reset the input string in case of an error
              }
        }
        else if (event.target.innerHTML == "AC") {
            string=''
            document.querySelector('input').value = string
            
        }
        else if (event.target.innerHTML == "DEL") {
            string = string.slice(0, -1); // Remove the last character
            document.querySelector('input').value = string;
        }
        else {
            console.log(event.target)
            string += event.target.innerHTML
            document.querySelector('input').value = string
        }
    })
})