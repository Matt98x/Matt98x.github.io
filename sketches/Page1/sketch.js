var words

function preload(){
    path = '../../repos.json'
    words = loadJSON(path)
    console.log(words)
}

function setup(){
    for(i=0;i<length(words);i++){
        createA(words[i].html_url,words[i].name);
    }
}

function draw(){

}