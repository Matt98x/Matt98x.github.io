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
        
    // }
    repositories=new block_for_repos(words,0,0,200,windowHeight,5,1,"vertical",0)                                                                
}

function draw(){

}


class block_for_repos{
    constructor(Jsonclass,ULCx,ULCy,width,height,border,interspace,orientation, initind){
        var len = Object.keys(Jsonclass).length
        this.list = []
        canvas=createCanvas(width,height);
        background(51);
        canvas.position(ULCx,ULCy);
        var encumbrance=0
        var limit = 0
        for(j=initind; j<len;i++){
            if(orientation=="vertical"){
                encumbrance+=12 + 2*interspace// this is the default
                if(encumbrance>height-2*border){
                    limit=j-1
                    break
                }
            }else{
                encumbrance+=textWidth(Jsonclass[i].name)+2*interspace
                if(encumbrance>width-2*border){
                    limit=j-1
                    break
                }
            }
        }
        for(i=initind;i<limit;i++){
            
            var twidth = textWidth(Jsonclass[i].name)+2*interspace
            var theight = 12 + 2*interspace// this is the default
            condole.log(str(twidth)+" "+str(theight))
            band=limit-initind
            if(orientation=="vertical"){
                if(limit==len){
                    var bheight = theight
                }else{
                    var bheight=(height-len*interspace-2*border)/band
                }
                var bwidth=width-2*border
                var spaceL=border
                var spaceU=border+interspace+i*(height-2*border)/band
            }else{
                if(limit==len){
                    var bwidth = twidth
                }else{
                    var bwidth=(width-len*interspace-2*border)/band
                }
                var bheight=height-2^border
                var spaceL=border+interspace+i*(width-2*border)/band
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
