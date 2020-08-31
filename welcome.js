
    window.alert("1. Choose your image\n2. Drag and Drop the Employee's photo to exact output\n3. Click fix button"+
    "\n4. If you want to adjust again click refix button\n5. Edit all texts in the right area & click submit\n6.Click Preview button\n7. Then download" );

/*Image conversion & download

    $(document).ready(function(){


var element = $("#container"); // global variable
var getCanvas; // global variable
var EmpName = document.getElementById('p2');

$("#btn-Preview-Image").on('click', function () {
     html2canvas(element, {
     onrendered: function (canvas) {
            $("#previewImage").append(canvas);
            getCanvas = canvas;
         }
     });
});

*/


var EmpName = document.getElementById('p2');
var action=1;

function convert() {
if (action==1){
    const original = document.querySelector('#container')
    const canvasContainer = document.querySelector('#previewImage')
  
  html2canvas(original, {
     scale: 2,
     useCORS: true,
   }).then(canvas => {
    canvasContainer.appendChild(canvas);
    canvas.setAttribute("id","canva");
    canva=document.querySelector("#canva");
  const a=document.createElement("a");
          document.body.appendChild(a);
          a.href=canva.toDataURL();
          a.download="Welcome" + "_" + EmpName.textContent +".png";
          a.click();
          document.body.removeChild(a);
          action=2;
          console.log(action);
  })
  }

if (action==2){
    var item = document.getElementById("canva");
    item.parentNode.removeChild(item);
    action=1;
}

}
  
  
  

//$("#btn-Convert-Html2Image").on('click', function () {
//var imgageData = getCanvas.toDataURL('image/png',1.0);
//var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
//$("#btn-Convert-Html2Image").attr("download", "Welcome" + "_" + EmpName.textContent +".png").attr("href", newData);
//});

//});



/*Get input*/


/*var action=1;
        function resize(){    
            window.drag = null;
        var bg = document.getElementsByClassName('bg-img')[0];

        if ( action == 1 ) {            
            
            bg.style.resize = "both";
            bg.style.overflow = "scroll";
            window.drag = null;
            $bg = $('.bg-img1');
            action = 2;
        } 
        else if ( action == 2 ) {

            $bg = $('.bg-img');
               bg.style.resize = "both";
            bg.style.overflow = "scroll";
            window.drag = dragFunc;
            dragFunc();
            action = 1;
        }
        
        console.log(action)
    }*/



function previewFile(fileInput) {
var file = fileInput.files[0];
var reader = new FileReader();

reader.addEventListener("load", function() {
setBackground(reader.result);
}, false);

if (file) {
reader.readAsDataURL(file);
}
}
function setBackground(imageURL){
document.getElementById("layer2").style.backgroundImage = "url(" + imageURL + ")";
/*document.body.style.backgroundSize = "100% auto";
document.body.style.backgroundRepeat = "no-repeat";
document.body.style.backgroundPosition = "center top";*/
}

/*Custom functions*/

function view(){
document.getElementById("layer1").style.zIndex = "1";
}
function refix(){
document.getElementById("layer1").style.zIndex = "";
}
function myFunction1() {
var para1 = document.getElementById("welcome").value;
    document.getElementById("p1").innerHTML = para1;
}
function myFunction2() {
var para2 = document.getElementById("name").value;
    document.getElementById("p2").innerHTML = para2;
}
function myFunction3() {
var para3 = document.getElementById("designation").value;
    document.getElementById("p3").innerHTML = para3;
}
function myFunction4() {
var para4 = document.getElementById("content").value;
    document.getElementById("p4").innerHTML = para4;
}
function myFunction5() {
var para5 = document.getElementById("mail").value;
    document.getElementById("p5").innerHTML = para5;
}
function myFunction6() {
var para6 = document.getElementById("mobile").value;
    document.getElementById("p6").innerHTML = para6;
}
function myFunction7() {
var para7 = document.getElementById("bottom").value;
    document.getElementById("p7").innerHTML = para7;
}




/* Remove class

$('.preview').click(
    function(){ $(this).addClass('preview1') },
    function(){ $(this).removeClass('preview') }
)

$('.preview').click(
    function(){ $(this).addClass('hover') },
    function(){ $(this).removeClass('hover') }
)
Romove class*/

/*var dragtip = document.getElementById('bg-img');

window.onmousemove = function (e) {
var x = e.clientX,
    y = e.clientY;
dragtip.style.top = (y + 20) + 'px';
dragtip.style.left = (x + 20) + 'px';
};

/*input*/

function setbg1(color)
{
document.getElementById("welcome").style.background=color
}

function setbg2(color)
{
    document.getElementById("name").style.background=color
}

function setbg3(color)
{
    document.getElementById("designation").style.background=color
}

function setbg4(color)
{
    document.getElementById("content").style.background=color
}

function setbg5(color)
{
    document.getElementById("mail").style.background=color
}

function setbg6(color)
{
    document.getElementById("mobile").style.background=color
}

function setbg7(color)
{
    document.getElementById("bottom").style.background=color
}
/*Custome functions*/






/*BG img drag jquery*/

$(document).ready(function(){
    var $bg = $('.bg-img'),
        data = $('#data')[0],
        elbounds = {
            w: parseInt($bg.width()), 
            h: parseInt($bg.height())
        },
        bounds = {w: 2350 - elbounds.w, h: 1750 - elbounds.h},
        origin = {x: 0, y: 0},
        start = {x: 0, y: 0},
        movecontinue = false;
    
    function move (e){
        var inbounds = {x: false, y: false},
            offset = {
                x: start.x - (origin.x - e.clientX), 
                y: start.y - (origin.y - e.clientY)
            };
        
        data.value = 'X: ' + offset.x + ', Y: ' + offset.y;
        
        inbounds.x = offset.x < 0 && (offset.x * -1) < bounds.w;
        inbounds.y = offset.y < 0 && (offset.y * -1) < bounds.h;
        
        if (movecontinue && inbounds.x && inbounds.y) {
            start.x = offset.x;
            start.y = offset.y;
            
            $(this).css('background-position', start.x + 'px ' + start.y + 'px');
        }
        
        origin.x = e.clientX;
        origin.y = e.clientY;
        
        e.stopPropagation();
        return false;
    }
    
    function handle (e){
        movecontinue = false;
        $bg.unbind('mousemove', move);
        
        if (e.type == 'mousedown') {
            origin.x = e.clientX;
            origin.y = e.clientY;
            movecontinue = true;
            $bg.bind('mousemove', move);
        } else {
            $(document.body).focus();
        }
        
        e.stopPropagation();
        return false;
    }
    
    function reset (){
        start = {x: 0, y: 0};
        $(this).css('backgroundPosition', '0 0');
    }
    
    $bg.bind('mousedown mouseup mouseleave', handle);
    $bg.bind('dblclick', reset);
});

/*Bg img drag jquery*/



/*<script>
   
document.getElementById("zoomin").onclick= function() {
/*
var layer = document.getElementById("layer2");
var style = window.getComputedStyle(layer);
var bSize = style.getPropertyValue("background-size");*/
/*var bgs=document.getElementById("layer2").style.backgroundSize;
document.getElementById("layer2").style.backgroundSize="bgs-100px"+ "bgs-100px";
console.log(layer2);
}
    
       
        var action=1;
        function zoom(){    
        
        
        
        var zoomin=document.getElementById("zoomin");
        var bg = document.getElementsByClassName('bg-img')[0];

        if ( action == 1 ) {            
            
            bg.style.backgroundSize = "contain";
            
            action = 2;
        } 
        else if ( action == 2 ) {
            
            bg.style.backgroundSize = "initial";
            
            action = 3;
        }
        else if (action == 3) {
            
            bg.style.width = "250px";
            
            action = 1;
        }
        console.log(action)
    }
    */