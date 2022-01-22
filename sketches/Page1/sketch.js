var words
var distancing = 25
var repositories
var nav_menu

nav_height=100
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
}

function setup(){  
    canvas=createCanvas(windowWidth,windowHeight);
    canvas.position(0,0)
    stringComm= "Button_to_nav"
    nav_menu=new block_menu(words,0,0,windowWidth,nav_height,5,1,"horizontal",0,stringComm)
    stringComm= "Button_to_repo"
    repositories=new block_menu(words,0,nav_height,200,windowHeight,5,1,"vertical",0,stringComm)                                                                
}

function draw(){

}


