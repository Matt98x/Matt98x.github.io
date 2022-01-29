class MD_handler {
    constructor(link, oL, oU, w, h) {
        this.root = createElement("div")
        let mark = createElement("zero-md")
        console.log(mark)
        mark.elt.attr("src", link)
        this.root.appendChild(mark)
        this.root.style.position = "absolute"
        this.root.style.left = oL + "px"
        this.root.style.top = oU + "px"
        document.getElementById("body")[0].appendChild(root)
    }
}