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
    stringComm="new Button_to_repo(func)(Jsonclass[i].name,Jsonclass[i].html_url,ULCx+this.spaceL,ULCy+this.spaceU,this.bwidth,this.bheight)"
    nav_menu=new block_menu(words,0,0,windowWidth,nav_height,5,1,"horizontal",0,stringComm)
    stringComm="new Button_to_repo(func)(Jsonclass[i].name,Jsonclass[i].html_url,ULCx+this.spaceL,ULCy+this.spaceU,this.bwidth,this.bheight)"
    repositories=new block_menu(words,0,nav_height,200,windowHeight,5,1,"vertical",0,stringComm)                                                                
}

function draw(){

}


class block_menu{
    constructor(Jsonclass,ULCx,ULCy,width,height,border,interspace,orientation, initind,func){
        this.len = Object.keys(Jsonclass).length
        console.log(this.len)
        this.list = []
        this.graphics = createGraphics(width,height)
        this.graphics.background(51)
        image(this.graphics,ULCx,ULCy)
        this.encumbrance= 2*border
        this.limit = 0
        
        for(var j=initind; j<this.len;j++){
            if(orientation=="vertical"){
                this.encumbrance+=12 + 2*border// this is the default
                console.log(this.encumbrance)
                if(this.encumbrance>height-2*border){
                    this.encumbrance-=12 + 2*border// this is the default
                    this.limit=j
                    break
                }
            }else if("horizontal"){
                this.encumbrance+=textWidth(Jsonclass[j].name)+2*border
                if(this.encumbrance>width-2*border){
                    this.encumbrance-=textWidth(Jsonclass[j].name)+2*border
                    this.limit=j
                    break
                }
            }else{
                console.log("Invalid orientation: default to horizontal")
                this.encumbrance+=textWidth(Jsonclass[j].name)+2*border
                if(this.encumbrance>width-2*border){
                    this.encumbrance-=textWidth(Jsonclass[j].name)+2*border
                    this.limit=j
                    break
                }
            }
            this.limit=j+1
            console.log(j)
        }
        console.log(str(this.encumbrance)+" "+str(height-2*border)+" "+this.limit)
        this.cumulative = 0
        for(var i=initind;i<this.limit;i++){
            
            this.twidth = textWidth(Jsonclass[i].name)+2*border
            this.theight = 12 + 2*border// this is the default
            if(orientation=="vertical"){
                if(this.limit==this.len){
                    this.bheight = this.theight
                }else{
                    this.bheight=this.theight*(height-2*border)/this.encumbrance
                }
                this.bwidth=width-2*border
                this.spaceL=border
                this.spaceU=border+this.cumulative
                this.cumulative+=interspace+this.bheight
            }else if(orientation=="horizontal"){
                if(this.limit==this.len){
                    this.bwidth = this.twidth
                }else{
                    this.bwidth=this.twidth*(width-2*border)/this.encumbrance
                }
                this.bheight=height-2*border
                this.spaceL=border+this.cumulative
                this.spaceU=border
                this.cumulative+=interspace+this.bwidth
            }else{
                if(this.limit==this.len){
                    this.bwidth = this.twidth
                }else{
                    this.bwidth=this.twidth*(width-2*border)/this.encumbrance
                }
                this.bheight=height-2*border
                this.spaceL=border+this.cumulative
                this.spaceU=border
                this.cumulative+=interspace+this.bwidth
            }
            this.temp = eval(func)
            this.list.push(this.temp)
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
            for(var i=0;i<repositories.list.length;i++){
                
                if(repositories.list[i].x == this.x && repositories.list[i].y == this.y){
                    window.open(repositories.list[i].html_url,'_self')
                }
            }
        }
    }
}

//
class Button_to_nav{
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
        if(nav_menu){
            for(var i=0;i<nav_menu.list.length;i++){
                
                if(nav_menu.list[i].x == this.x && nav_menu.list[i].y == this.y){
                    window.open(nav_menu.list[i].html_url,'_self')
                }
            }
        }
    }
}