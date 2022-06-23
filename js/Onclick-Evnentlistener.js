 // step number 1
function makeRes() {
    document.body.style.backgroundColor ='red'
}
// step number 2
const blueBtn = document.getElementById('makeBlue');
      blueBtn.onclick = makeBlue;

function makeBlue() {
    alert("if you want change this color plz click this button")
     document.body.style.backgroundColor = 'blue';
}

// step Number 3 
const greenBtn = document.getElementById('makeGreen');
    greenBtn.onclick = function(){
    document.body.style.backgroundColor = 'green';
    }
// step number 4 with addEventListener 
const GoldenRodBtn = document.getElementById('makeGoldenRod');
    GoldenRodBtn.addEventListener('click', makeGoldenRod);
    function makeGoldenRod() {
    document.body.style.backgroundColor = 'goldenrod'
}
// step Number 5 
const hotPink = document.getElementById('makeHotPink');
    hotPink.addEventListener('click',function () {
        document.body.style.backgroundColor = '#ff007f',padding = '10px'
    });
// step number with paknami 
document.getElementById('makeLightBlue').addEventListener('click',function(){
    document.body.style.backgroundColor = 'lightblue'
})

document.getElementById('makeHudai').addEventListener('click', function() {
    alert("kire masud tui ki asolai valo hobi na tui ki hudai color khaki te cng korte chas ");
    document.body.style.backgroundColor = 'khaki'
})
