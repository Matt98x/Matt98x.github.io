class Navigation_m{
    constructor(wwidth,navigation_height){
        this.nav_height = navigation_height // height of the navigation menu
        this.border_rad = "0px"
        this.back_col = "" //"#000000"
        this.text_col = "" //"#ffffff"
        this.border = "0px"
        this.nav_json = [{
            "name": "Home",
            "html_url": "https://daedalus-furnace.herokuapp.com",
            "callback": page_refer,
            "parameters": "https://daedalus-furnace.herokuapp.com",
            "side": 0,
            "border-radius": this.border_rad,
            "col_back": this.back_col,
            "col_text": this.text_col,
            "border":this.border
        },
        {
            "name": "Github-main",
            "html_url": "https://matt98x.github.io",
            "callback": page_refer,
            "parameters": "https://matt98x.github.io",
            "side": 0,
            "border_radius": this.border_rad,
            "col_back": this.back_col,
            "col_text": this.text_col,
            "border":this.border
        },
        {
            "name": "Repositories",
            "html_url": "https://matt98x.github.io/Repositories",
            "callback": page_refer,
            "parameters": "https://matt98x.github.io/Repositories",
            "side": 0,
            "border_radius": this.border_rad,
            "col_back": this.back_col,
            "col_text": this.text_col,
            "border":this.border
        }
        ]
        this.nav_menu = new block_menu(this.nav_json, 0, 0, wwidth, this.nav_height, 5, 1, "horizontal", 0)
    }
}