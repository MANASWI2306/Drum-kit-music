function soundcrash()
{
    var a1=new Audio("sounds/crash.mp3");
    a1.play();
}
function soundkick()
{
    var a2=new Audio("sounds/kick-bass.mp3");
    a2.play();
}
function soundtom1()
{
    
    var a3=new Audio("sounds/tom-1.mp3");
    a3.play();
}
function soundtom2()
{
    var a4=new Audio("sounds/tom-2.mp3");
    a4.play();
}
function soundtom3()
{
    var a5=new Audio("sounds/tom-3.mp3");
    a5.play();
}
function soundtom4()
{
    var a6=new Audio("sounds/tom-4.mp3");
    a6.play();
}
function soundsnare()
{
    var a7=new Audio("sounds/snare.mp3");
    a7.play();
}

//plays the corresponding sound when the button is click
var buttons=document.querySelectorAll("button");
buttons[0].addEventListener("click",soundtom1);
buttons[1].addEventListener("click",soundtom2);
buttons[2].addEventListener("click",soundtom3);
buttons[3].addEventListener("click",soundtom4);
buttons[4].addEventListener("click",soundsnare);
buttons[5].addEventListener("click",soundcrash);
buttons[6].addEventListener("click",soundkick);


//plays the corresponding sound when the key is pressed
document.addEventListener("keypress",function(event)
{
    if (event.key=='w')
        soundtom1();
    else if(event.key=='a')
        soundtom2();
    else if(event.key=='s')
        soundtom3();
    else if(event.key=='d')
        soundtom4();
    else if(event.key=='j')
        soundsnare();
    else if(event.key=='k')
        soundcrash();
    else if(event.key=='l')
        soundkick();

});
