var words
var distancing = 20
var list = []
i = 0
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
    console.log(words)
}

function setup(){
    console.log(Object.keys(words).length)
    
    for(i=0;i<Object.keys(words).length;i++){
        temp = new Button_to_link(words[i].name,words[i].html_url,0,distancing*i)
    }
}

function draw(){

}

class Button_to_link{
    constructor(name,link,x,y){
        this.name = name
        this.html_url = link
        this.button=createButton(this.name)
        this.button.position(x,y)
        this.button.mousePressed(this.callback)
    }

    callback(){
        window.open(this.html_url)
    }
}