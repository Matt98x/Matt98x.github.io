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
        list.push(temp)
        list[i].button.mousePressed(list[i].callback)
        
        console.log(list[i].button)
    }
    console.log(list)                                                                    
}

function draw(){

}

class Button_to_link{
    constructor(name,link,x,y){
        this.name = name
        this.html_url = link
        this.x = x
        this.y = y
        //console.log('"'+str(this.html_url)+'"')     
        this.button=createButton(this.name)
        this.button.position(x,y)
        
        this.callback()
        
    }
    
    callback(){
        console.log(this.y)
        // for(i in list){
        //     if(i.x == this.position.x && i.y == this.position.y){
        //         window.open('"'+str(i.html_url)+'"')
        //     }
        // }
    }
}

//
