// Class to display a button menu
class block_menu {
    constructor(Jsonclass, ULCx, ULCy, width, height, border, interspace, orientation, initind) {
        this.len = Object.keys(Jsonclass).length
        this.list = []
        this.graphics = createGraphics(width, height)
        this.graphics.background(51)
        image(this.graphics, ULCx, ULCy)
        this.encumbrance = 2 * border
        this.limit = 0
        
        // Loop to get the encumbrance of the menu
        for (var j = initind; j < this.len; j++) {
            if (orientation == "vertical") {
                this.encumbrance += 12 + 2 * border// this is the default
                if (this.encumbrance > height - 2 * border) {
                    this.encumbrance -= 12 + 2 * border// this is the default
                    this.limit = j
                    break
                }
            } else if ("horizontal") {
                this.encumbrance += textWidth(Jsonclass[j].name) + 2 * border
                if (this.encumbrance > width - 2 * border) {
                    this.encumbrance -= textWidth(Jsonclass[j].name) + 2 * border
                    this.limit = j
                    break
                }
            } else {
                console.log("Invalid orientation: default to horizontal")
                this.encumbrance += textWidth(Jsonclass[j].name) + 2 * border
                if (this.encumbrance > width - 2 * border) {
                    this.encumbrance -= textWidth(Jsonclass[j].name) + 2 * border
                    this.limit = j
                    break
                }
            }
            this.limit = j + 1
        }

        this.cumulative = 0

        for (var i = initind; i < this.limit; i++) {

            this.twidth = textWidth(Jsonclass[i].name) + 3 * border
            this.theight = 12 + 2 * border// this 12 is the default textSize
            if (orientation == "vertical") {

                if (this.limit == this.len) {
                    this.bheight = this.theight
                } else {
                    this.bheight = this.theight * (height - 2 * border) / this.encumbrance
                }
                this.bwidth = width - 2 * border
                this.spaceL = border
                this.spaceU = border + this.cumulative
                this.cumulative += interspace + this.bheight
                this.multiplier = (height - 2 * border) / this.encumbrance
            } else if (orientation == "horizontal") {
                if (this.limit == this.len) {
                    this.bwidth = this.twidth
                } else {
                    this.bwidth = this.twidth * (width - 2 * border) / this.encumbrance
                }
                this.bheight = height - 2 * border
                this.spaceL = border + this.cumulative
                this.spaceU = border
                this.cumulative += interspace + this.bwidth
                this.multiplier = (width - 2 * border) / this.encumbrance
            } else {
                if (this.limit == this.len) {
                    this.bwidth = this.twidth
                } else {
                    this.bwidth = this.twidth * (width - 2 * border) / this.encumbrance
                }
                this.bheight = height - 2 * border
                this.spaceL = border + this.cumulative
                this.spaceU = border
                this.cumulative += interspace + this.bwidth
                this.multiplier = (width - 2 * border) / this.encumbrance
            }
            this.temp = new Button_of_menu(Jsonclass[i], ULCx + this.spaceL, ULCy + this.spaceU, this.bwidth, this.bheight)
            this.list.push(this.temp)

        }
    }



}


// Function to create a button in the menu
class Button_of_menu {
    constructor(obj, x, y, width, height, cl) {
        this.name = obj.name
        this.x = x
        this.y = y
        this.width = width
        this.height = height

        this.button = createButton(this.name)
        this.button.position(x, y)
        this.button.size(width, height)
        this.button.mousePressed(this.callback)
        this.button.func = obj.callback
        this.button.parameters = obj.parameters
    }
    callback() {
        this.func()
    }
}



// Class to handle the callback
class callback_list{
    constructor(){
        this.callback_list=[]
    }
    add_callback(callback,index,parameters){
        temp={
            "callback":callback,
            "parameters": parameters
        }
        this.callback_list.push(temp)

    }
}

// function to redirect to another page
function page_refer() {
    window.open(this.parameters, '_self')
}