var words
var distancing = 25
var list = []
var repo_list = []

i = 0
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
    repo_list=Repos_list(words,10,40,200,1300)
}

function setup(){    
    
    console.log(list)                                                                    
}

function draw(){

}

class Repos_list{
    constructor(ReposList,ULcornerx,ULcornery,width,height){
        for(i=0;i<Object.keys(ReposList).length;i++){
            temp = new Button_to_repo(ReposList[i].name,ReposList[i].html_url,ULcornerx,ULcornery+i*distancing,width,height/Object.keys(ReposList).length)
            list.push(temp)
            list[i].button.mousePressed(list[i].callback)
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
        console.log(this.y)
        for(i=0;i<repo_list.list.length;i++){
            
            if(repo_list.list[i].x == this.x && repo_list.list[i].y == this.y){
                console.log(repo_list.list[i])
                window.open(repo_list.list[i].html_url,'_self')
            }
        }
    }
}

