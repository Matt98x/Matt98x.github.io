var words
var distancing = 25
var list = []
var repositories
i = 0
nav_height=100
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
}

function setup(){    
    nav_menu=new block_menu(words,0,0,windowWidth,nav_height,5,1,"horizontal",0)
    repositories=new block_menu(words,0,nav_height,200,windowHeight,5,1,"vartical",0)                                                                
}

function draw(){

}


class block_menu{
    constructor(Jsonclass,ULCx,ULCy,width,height,border,interspace,orientation, initind){
        var len = Object.keys(Jsonclass).length
        this.list = []
        canvas=createCanvas(width,height);
        background(51);
        canvas.position(ULCx,ULCy);
        var encumbrance= 2*border
        var limit = 0
        for(var j=initind; j<len;j++){
            if(orientation=="vertical"){
                encumbrance+=12 + 2*border// this is the default
                if(encumbrance>height-2*border){
                    encumbrance-=12 + 2*border// this is the default
                    limit=j
                    break
                }
            }else{
                encumbrance+=textWidth(Jsonclass[j].name)+2*border
                if(encumbrance>width-2*border){
                    encumbrance-=textWidth(Jsonclass[j].name)+2*border
                    limit=j
                    break
                }
            }
            limit=j+1
        }
        console.log(str(encumbrance)+" "+str(width-2*border)+" "+limit)
        var cumulative = 0
        for(var i=initind;i<limit;i++){
            
            var twidth = textWidth(Jsonclass[i].name)+2*border
            var theight = 12 + 2*border// this is the default
            console.log(str(twidth)+" "+str(theight))
            var band=limit-initind
            if(orientation=="vertical"){
                if(limit==len){
                    var bheight = theight
                }else{
                    var bheight=theight*(height-2*border)/encumbrance
                }
                var bwidth=width-2*border
                var spaceL=border
                var spaceU=border+cumulative
                cumulative+=interspace+bheight
            }else{
                if(limit==len){
                    var bwidth = twidth
                }else{
                    var bwidth=twidth*(width-2*border)/encumbrance
                }
                var bheight=height-2*border
                var spaceL=border+cumulative
                var spaceU=border
                cumulative+=interspace+bwidth
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

        this.button=createButton(this.name)
        this.button.position(x,y)
        this.button.size(width,height)
        this.callback()
        
    }
    
    callback(){
        if(repositories){
            for(i=0;i<repositories.list.length;i++){
                
                if(repositories.list[i].x == this.x && repositories.list[i].y == this.y){
                    window.open(repositories.list[i].html_url,'_self')
                }
            }
        }
    }
}

//
