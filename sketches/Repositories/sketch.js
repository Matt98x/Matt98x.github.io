var border_rad = "0px"
var back_col = "#000000"
var text_col = "#ffffff"
var border = "0px"

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
var expasionCoeff = 1
var wcopy = words
var n_menu
var header
var current_time
var datacache



// Preload function to get any stored data
function preload() {

    path = "test.json"
    loadJSON("https://api.github.com/rate_limit",got_data1,'jsonp')
}


// Callback to store the list of repositories
function got_data1(data) {
    current_time = new Date()
    current_time = current_time.getTime() / 1000
    console.log(data)
    if (data.remaining > 0 || current_time > data.last_reset) {
        console.log(current_time - data.last_reset)
        path = 'https://api.github.com/users/Matt98x/repos'
        loadJSON(path, got_data, 'jsonp')
    }
}

// Callback to store the list of repositories
function got_data(data) {
    header = data.meta
    words = data.data
    let len = Object.keys(words).length
    for (let i = 0; i < len; i++) {
        words[i].callback = page_refer
        words[i].parameters = words[i].html_url
        words[i].side = 0
        words[i].border_radius = border_rad
        words[i].col_back = back_col
        words[i].col_text = text_col
        words[i].border = border
    }
    toTextMessage = {
        "remaining": header["X-RateLimit-Reset"],
        "last_reset": header["X-RateLimit-Remaining"]
    }
    prevwords = words
    saveJSON(toTextMessage, "test.json")
}

// Main script of the page
function mainscript(ww, wh) {
    n_menu = new Navigation_m(ww, 100)
    left_menu = new block_menu(wcopy, ww - repowidth, n_menu.nav_height, repowidth, wh - n_menu.nav_height, 5, 1, "vertical", 0)
    repositories = new block_menu(words, 0, n_menu.nav_height, repowidth, wh, 5, 1, "vertical", 0)
}

// Function to delete every html elements
function cleanup() {
    removeElements() // remove all html elements
}

// Setup function of the script
function setup() {
    canvas = createCanvas(windowWidth, windowHeight);
    canvas.position(0, 0)
    background(255)
    prevtime = millis()
    prevWheight = windowHeight
    prevWwidth = windowWidth
    mainscript(prevWwidth, prevWheight)
    window.addEventListener('resize', reportWindowSize)
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

// Function in loop to handle any page modifications
function draw() {

}

