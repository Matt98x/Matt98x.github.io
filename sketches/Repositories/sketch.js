var border_rad = "0px"
var back_col = "#000000"
var text_col = "#ffffff"
var border = "0px"

var repo // variable to store the current repository


var temp = "https://api.github.com/repos/Matt98x/Traversability_module/git/trees/main" // link to see all the elements in the repository Traversability module
// code to remove just the div element
// var k = document.getElementsByTagName("div")
// k.parentNode.removeChild(k)

var words = [{
    "name": "", "html_url": "", "callback": function () { }, "parameters": [], "side": 0,
    "border-radius": border_rad,
    "col_back": back_col,
    "col_text": text_col,
    "border": border
}] // Github repositories object
var repositories // repositories menu object
var nav_menu // navigation menu object
var left_menu // left menu
var prevword // previous repositories status (to check for changes)
var prevWwidth // previous Window width (to check for changes)
var prevWheight // previous window height (to check for changes)
var repowidth = 200 // width of the repository list
var prevtime
var reloadCount // how many times the page has been reloaded
var last_reset // the last polling reset obtained
var remaining // how many pollings I have left
var wcopy = words
var n_menu
var current_time
var Exception = false // If no more refresh are available
var error_string
var k 
var readme = [] // readme window 



// Preload function to get any stored data
function preload() {

    loadJSON("https://api.github.com/rate_limit",got_data1)
    //loadStrings("https://raw.githubusercontent.com/Matt98x/traversability_module/main/README.md",gottext)
}


// Callback to store the list of repositories
function got_data1(data) {
    current_time = new Date()
    current_time = current_time.getTime() / 1000
    console.log(data.rate)
    if (data.rate.remaining > 0) {
        path = 'https://api.github.com/users/Matt98x/repos'
        loadJSON(path, got_data, 'jsonp')
    }else{
        Exception=true
    }
    if(Exception){
        v=new Date(data.rate.reset*1000)
        error_string="Error: the refreshes for this page have run out, try refresh the page after "+v
    }
    
    
}

// Callback to store the list of repositories
function got_data(data) {
    header = data.meta
    words = data.data
    let len = Object.keys(words).length
    for (let i = 0; i < len; i++) {
        words[i].callback = change_repo
        words[i].parameters = words[i].html_url
        words[i].side = 0
        words[i].border_radius = border_rad
        words[i].col_back = back_col
        words[i].col_text = text_col
        words[i].border = border
    }

    for(let i=0;i<5*len;i++){
        words.push(words[0])
    }
    prevwords = words
}

// Main script of the page
function mainscript(ww, wh) {
    n_menu = new Navigation_m(ww, 100)
    //left_menu = new block_menu(wcopy, ww - repowidth, n_menu.nav_height, repowidth, wh - n_menu.nav_height, 5, 1, "vertical", 0)
    //n_menu.nav_height
    repositories = new block_menu(words, 0, n_menu.nav_height, repowidth, wh-n_menu.nav_height, 5, 1, "vertical", 0)
     
    
}

// Function to delete every html elements
function cleanup() {
    removeElements() // remove all html elements
    counter=0
    if(Exception){
        k = document.getElementsByTagName("H1")
        document.body.removeChild(k[0])
    }
    

}

// Setup function of the script
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    //background(255)
    window.addEventListener('resize', reportWindowSize)
    
    prevtime = millis()
    prevWheight = windowHeight
    prevWwidth = windowWidth
    if(! Exception){
        mainscript(prevWwidth, prevWheight)
    }else{
        var h = document.createElement("H1")
        var t = document.createTextNode(error_string)
        h.append(t)
        document.body.appendChild(h)
    }
    
    
}

// Function to report if the window size has changed and update the sketch
function reportWindowSize() {
    cleanup() // Function to clean up the page
    prevWheight = windowHeight // store the current value as the previous
    prevWwidth = windowWidth // store the current value as the previous
    resizeCanvas(windowWidth, windowHeight)
    //background(255) // refresh the canvas
    if(! Exception){
        mainscript(windowWidth, windowHeight) // reset the view
    }else{
        var h = document.createElement("H1")
        var t = document.createTextNode(error_string)
        h.append(t)
        document.body.appendChild(h)
    }
}

// Function in loop to handle any page modifications
function draw() {

}

// Callback to be activated when a button in the repository list is pressed to change the element visualized in the center
function change_repo(){
   
    if(readme.root){
        document.body.removeChild(readme.root.elt)
        readme=[]
    }
            
    loadJSON("https://api.github.com/repos/Matt98x/Traversability_module/git/trees/main",gotRepoData,"jsonp")
}

async function gotRepoData(data){
    console.log(data)
    list=data.data
    let len = Object.keys(list).length
    for (let i = 0; i < len; i++) {
        list[i].name = list[i].path
        list[i].html_url=this.parameters
        list[i].callback = change_repo
        list[i].parameters = list[i].name
        list[i].side = 0
        list[i].border_radius = border_rad
        list[i].col_back = back_col
        list[i].col_text = text_col
        list[i].border = border
    }
    readme = new MD_handler("https://raw.githubusercontent.com/Matt98x/traversability_module/main/README.md",repowidth,n_menu.nav_height,windowWidth - 2*repowidth,windowHeight - n_menu.nav_height)

}