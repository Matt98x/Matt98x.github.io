var words
var distancing = 20
var list = []
i = 0
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
}

function setup(){    
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
        //console.log('"'+str(this.html_url)+'"')     
        this.button=createButton(this.name)
        this.button.position(x,y)
        this.button.mousePressed(this.callback(link))
        // this.callback=function(){
        //     console.log('"'+str(this.html_url)+'"')
        //     window.open('"'+str(this.html_url)+'"')
        // }
        this.func()=function(){
            console.log('"'+str(link)+'"')
        }
    }
    callback(link){
        console.log('"'+str(link)+'"')
        window.open('"'+str(link)+'"')
    }
    
}