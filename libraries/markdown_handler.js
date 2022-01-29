class MD_handler {
    constructor(link, oL, oU, w, h) {
        this.root = createElement("div")
        let mark = createElement("zero-md")
        console.log(mark)
        mark.elt.setAttribute("src", link)
        this.root.elt.appendChild(mark.elt)
        this.root.elt.style.position = "absolute"
        this.root.elt.style.left = oL + "px"
        this.root.elt.style.top = oU + "px"
        this.root.elt.style.width = w + "px"
        this.root.elt.style.height = h + "px"
        document.getElementsByTagName("body")[0].appendChild(this.root.elt)
    }
}