
var canvas;
var dim=20;
var lun=0;
var lol;

function setup() { 
 canvas=createCanvas(windowWidth,windowHeight)
 mainscript()
 window.addEventListener('resize', this.reportWindowSize)

}
  
  
function mainscript(){
  n_menu = new Navigation_m(windowWidth,100)

}

  // Function to report if the window size has changed and update the sketch
function reportWindowSize() {
  cleanup() // Function to clean up the page
  prevWheight = windowHeight // store the current value as the previous
  prevWwidth = windowWidth // store the current value as the previous
  resizeCanvas(windowWidth, windowHeight)
  background(255) // refresh the canvas
  mainscript(windowWidth, windowHeight) // reset the view
}


  function draw(){ 
 
    
    
   
  }

// Function to delete every html elements
function cleanup() {
  removeElements() // remove all html elements
}


  // //Creo una nuova campagna
  // } 
  
  
  
  // function gotData(data){
  //    console.log(data);
  //     var keys=Object.keys(data);
  
  //   r=keys.length;
  //   background(255);
  //   for(var i=0;i<keys.length;i++){
  //     var word=keys[i];
  //     var score=data[word];
  //     //var test=createP(word);
  //     //test.position(10,120+i*20);
  //     fill(0);
  //     textSize(dim);
  //     text(word,0,dim+(dim+5)*i);
  //   }
//canvas=createCanvas(500,500);
  // background(51);
  // canvas.position(0,140);
  // drawData();
 

 
  // //Inizializzo la schermata
  // titolo=createElement("h1","Sito WEB");
  // titolo.position(10,0);

  // button1= createButton("Tasto di prova");
  // button1.mousePressed(submitWord);
  // button1.position(10,80);

  // test=createInput();
  // test.position(10,110);
  
  // button2=createButton("Apri");
  // button2.position(200,110);
  
  // // Some changes
  
  // button2.mousePressed(printvalue);
  
  // function printvalue() {
  //   print(test.value());
  //   k++;
  // }