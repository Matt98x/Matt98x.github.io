var words

function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
    console.log(words)
}

function setup(){
    console.log(Object.keys(words).length)
    for(i=0;i<Object.keys(words).length;i++){
        console.log(words[i].html_url)
        createA(words[i].html_url,words[i].name);
    }
}

function draw(){

}