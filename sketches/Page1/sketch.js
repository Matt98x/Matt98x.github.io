var words
var distancing = 25
var list = []
var repositories
i = 0
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
}

function setup(){    
    // for(i=0;i<Object.keys(words).length;i++){
    //     temp = new Button_to_repo(words[i].name,words[i].html_url,0,i*distancing,200,distancing)
    //     list.push(temp)
    //     list[i].button.mousePressed(list[i].callback)
        
    //     console.log(list[i].button)
    // }
    // console.log(list)    
    repositories=new block_for_repos(words,0,0,200,windowHeight,5,1,"vertical")                                                                
}

function draw(){

}


class block_for_repos{
    constructor(Jsonclass,ULCx,ULCy,width,height,border,interspace,orientation){
        var len = Object.keys(Jsonclass).length
        this.list = []
        canvas=createCanvas(width,height);
        background(51);
        canvas.position(ULCx,ULCy);
        for(i=0;i<len;i++){
            width = width
            height = height 
            console.log(char("&#x2B07"))
            if(orientation=="vertical"){
                var bwidth=width-2*border
                var bheight=(height-len*interspace-2*border)/len
                var spaceL=border
                var spaceU=border+interspace+i*(height-2*border)/len
            }else{
                var bwidth=(width-len*interspace-2*border)/len
                var bheight=height-2^border
                var spaceL=border+interspace+i*(width-2*border)/len
                var spaceU=border
            }
            var temp = new Button_to_repo(Jsonclass[i].name,Jsonclass[i].html_url,ULCx+spaceL,
                ULCy+spaceU,bwidth,bheight)
            this.list.push(temp)
            this.list[i].button.mousePressed(this.list[i].callback)
        }
    }
}

class Button_to_repo{
    constructor(name,link,x,y,width,height){
        this.name = name
        this.html_url = link  
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        //console.log('"'+str(this.html_url)+'"')     
        this.button=createButton(this.name)
        this.button.position(x,y)
        this.button.size(width,height)
        this.callback()
        
    }
    
    callback(){
        if(repositories){
            console.log(this.y)
            for(i=0;i<repositories.list.length;i++){
                
                if(repositories.list[i].x == this.x && repositories.list[i].y == this.y){
                    console.log(repositories.list[i])
                    window.open(repositories.list[i].html_url,'_self')
                }
            }
        }
    }
}

//
