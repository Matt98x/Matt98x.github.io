class MD_handler {
    constructor(link, oL, oU, w, h) {
        this.root = createElement("div")
        this.mark = createElement("zero-md")
        this.mark.setAttribute("src", this.link)
        this.root.appendChild(this.mark)
        this.root.style.position = "absolute"
        this.root.style.left = oL + "px"
        this.root.style.top = oU + "px"
        document.getElementById("body")[0].appendChild(root)
    }
}