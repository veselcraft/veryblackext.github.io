// запрет мыши

  document.oncontextmenu=RightMouseDown;
  document.onmousedown = mouseDown; 

  function mouseDown(e) {
      if (e.which==3) {//righClick
	  console.log("Запрещено использовать исходный код!");
   }
}
function RightMouseDown() { return false;}

// запрет мыши


// запрет Ctrl+Shift+C, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U

document.onkeydown = function(e)
{
var e = e || window.event;
if(e.keyCode == 67 && e.shiftKey && e.ctrlKey) return false;
if(e.keyCode == 74 && e.shiftKey && e.ctrlKey) return false;
if(e.keyCode == 73 && e.shiftKey && e.ctrlKey) return false;
if(e.keyCode == 85 && e.ctrlKey) return false;
if(e.keyCode == 83 && e.ctrlKey) return false;
if(e.keyCode == 123) return false;
 }

// запрет Ctrl+Shift+C, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U