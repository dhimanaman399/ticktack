class ButtonCont {
  constructor(id,value){
this.id= id;
this.value= value;
}
} 

const buttonOperations = {
  btnarr: [],
  toggleId(){},

	add() {
		this.btnarr = [];
		var demo = document.querySelector("#demo");
		for (let i = 0; i < 9; i++) {
			var btn = document.createElement('button');
			btn.setAttribute("id", i);
		var btnValue =	btn.innerText = i;
			//btn.innerText='';
			btn.addEventListener('click', click);
			if (i == 3 || i == 6) {
				var br = document.createElement('br');
				demo.appendChild(br);
			}
      // let count = new ButtonOp(i,btnValue);
      demo.appendChild(btn);  
      // this.btnarr.push(count);
		}
	}
}
window.addEventListener('load', init);

function init() {
	var loadS = buttonOperations.add();
  click();
return loadS;
}

// function pushVal(val) {
//   let btnId = document.querySelectorAll('button');
//   let btnVal = document.querySelectorAll('button').value;
//   let getId = btnId.get
//   btnarr.push();
// }

function click() {
var getId= this.getAttribute("id");
var btnVal = document.querySelectorAll('button').value;
 let pushValue = new ButtonCont(getId,btnVal);
btnarr.push(pushValue);
}