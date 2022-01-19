var button1;
var button2;

var fabio;
var giuseppe;
var matteo;
var riccardo;


var titolo;
var r=1;
var campagna=[];
var k=0;
var test;
var data;

var canvas;
var dim=20;
var lun=0;
var lol;

function setup() { 

  canvas=createCanvas(500,500);
  background(51);
  canvas.position(0,140);
  drawData();
 

 
  //Inizializzo la schermata
  titolo=createElement("h1","Campagne D&D!");
  button1= createButton("CREA NUOVA CAMPAGNA"); 
  button1.mousePressed(submitWord);
  
  titolo.position(10,0);
    button1.position(10,80);
    test=createInput();
  test.position(10,110);
  button2=createButton("Apri");
  button2.position(200,110);
  
  // Some changes
  
  button2.mousePressed(printvalue);
  
  function printvalue() {
    print(test.value());
    k++;
  }
  //Creo una nuova campagna
  } 
  
  
  
  function gotData(data){
     console.log(data);
  var keys=Object.keys(data);
  
  r=keys.length;
  background(255);
  for(var i=0;i<keys.length;i++){
    var word=keys[i];
    var score=data[word];
    //var test=createP(word);
    //test.position(10,120+i*20);
    fill(0);
    textSize(dim);
    text(word,0,dim+(dim+5)*i);
  }
  //console.log(word);
  }
  
  
  
  function submitWord(){
    
      
    
  }
  
  function drawData(){

  }

  function draw(){ 
 
    
    
   
  }
