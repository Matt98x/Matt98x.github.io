var words
var distancing = 20
function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
    console.log(words)
}

function setup(){
    console.log(Object.keys(words).length)
    for(i=0;i<Object.keys(words).length;i++){
        console.log(words[i].html_url)
        link = createA(words[i].html_url,words[i].name);
        link.position(0,distancing*i)
    }
}

function draw(){

}