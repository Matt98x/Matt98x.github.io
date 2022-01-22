var words
var distancing = 25
var list = []
i = 0
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
}

function setup(){    
    for(i=0;i<Object.keys(words).length;i++){
        temp = new Button_to_repo(words[i].name,words[i].html_url,0,distancing*i)
        list.push(temp)
        list[i].button.mousePressed(list[i].callback)
        
        console.log(list[i].button)
    }
    console.log(list)                                                                    
}

function draw(){

}

class Button_to_repo{
    constructor(name,link,x,y){
        this.name = name
        this.html_url = link
        this.x = x
        this.y = y

        //console.log('"'+str(this.html_url)+'"')     
        this.button=createButton(this.name)
        this.button.position(x,y)
        this.button.size(200,this.y)
        this.callback()
        
    }
    
    callback(){
        console.log(this.y)
        for(i=0;i<list.length;i++){
            
            if(list[i].x == this.x && list[i].y == this.y){
                console.log(list[i])
                window.open(list[i].html_url,'_self')
            }
        }
    }
}

//
