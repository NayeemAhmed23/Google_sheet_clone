//we manage the option selection 

const activeCellElement = document.getElementById("active-cell");

//activeCell defines which cell is selected
let activeCell = null;

const initialOptionsState = {
    fontFamily: "",
    isBoldSelected: false,
    isItalicSelected: false,
    isUnderLineSelected: false,
    textAlign: "left", //it can have 'left' | 'center' | 'right'
    textColor: '#000',
    backgroundColor: "#fff",
    fontSize: 14,
};

//below function will be triggeredwhenever cell is focused.
function onCellFocus(e) {
    //whenever a cell is focused change the activeCell value to be the id of the cell.
    activeCell = e.target.id;
    activeCellElement.innerText = activeCell;
}