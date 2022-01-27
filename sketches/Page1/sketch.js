var words = [{ "name": "temp", "html_url": "reule","callback":function(){},"parameters":[]}] // Github repositories object
var repositories // repositories menu object
var nav_menu // navigation menu object
var left_menu // left menu
var prevword // previous repositories status (to check for changes)
var prevWwidth // previous Window width (to check for changes)
var prevWheight // previous window height (to check for changes)
var nav_height = 100 // height of the navigation menu
var repowidth = 200 // width of the repository list
var prevtime
var reloadCount
var expasionCoeff = 1
var wcopy = words


var nav_json = [{
    "name": "Home",
    "html_url": "https://daedalus-furnace.herokuapp.com",
    "callback": page_refer,
    "parameters": this.html_url
},
{
    "name": "Github-main",
    "html_url": "https://matt98x.github.io",
    "callback": page_refer,
    "parameters": this.html_url
}
]

// Preload function to get any stored data
function preload() {
    var state = history.state || {}
    reloadCount = state.reloadCount || 0
    if (performance.navigation.type == 1) {
        state.reloadCount = ++reloadCount
        history.replaceState(state, null, document.URL)
    } else if (reloadCount) {
        delete state.reloadCount
        reloadCount = 0
        history.replaceState(state, null, document.URL)
    }

    goWiki()
    prevwords = words
}

// Function to get the list of github repositories
function goWiki() {
    path = 'https://api.github.com/users/Matt98x/repos'
    loadJSON(path, got_data, 'jsonp')
}

// Callback to store the list of repositories
function got_data(data) {
    header = data.header
    words = data.data
    let len = Object.keys(words).length
    for (let i = 0; i < len; i++) {
        words[i].callback = page_refer
        words[i].parameters = words[i].html_url
    }
}

// Main script of the page
function mainscript(ww, wh) {
    while (true) {
        if (nav_json && words) {
            left_menu = new block_menu(wcopy, ww - repowidth, nav_height, repowidth, wh - nav_height, 5, 1, "vertical", 0)
            nav_menu = new block_menu(nav_json, 0, 0, ww, nav_height, 5, 1, "horizontal", 0)
            repositories = new block_menu(words, 0, nav_height, repowidth, wh, 5, 1, "vertical", 0)
            break
        }
    }
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
    temp = new callback_list()
    temp.add_callback(callback_nav, 1, 3)
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

function callback_repo_list() {
    console.log(this.field)
    // if (repositories) {
    //     for (var i = 0; i < repositories.list.length; i++) {

    //         if (repositories.list[i].x == this.x && repositories.list[i].y == this.y) {
    //             window.open(repositories.list[i].html_url, '_self')
    //         }
    //     }
    // }
}
