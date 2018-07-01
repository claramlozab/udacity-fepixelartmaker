//An event listener that calls function makegrid when submit button is clicked.
$("#sizePicker").submit(function(event) {
    event.preventDefault();
    makeGrid();
});

const c = document.getElementById('pixelCanvas'); //get table element

function makeGrid() {
    c.innerHTML = ''; //remove all html from table element
    
    // Select color input
    let color = $("#colorPicker");
    
    //change colour when cell is clicked
    let addEvent = function(cell) {
        cell.addEventListener('click', function() {
            cell.style.backgroundColor = color.val();
        });
    }

    // Select size input
    let rows = $("#inputHeight").val();
    let cols = $("#inputWeight").val();

    //display grid canvas.
    for (let i = 0; i < rows; i++) {
        let row = c.insertRow(i);
        for (let j = 0; j < cols; j++) {
            let cell = row.insertCell(j);
            cell.addEventListener('click', addEvent(cell));
        }
    }
}
