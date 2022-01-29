class MD_handler {
    constructor(link, oL, oU, w, h) {
        this.root = createElement("div")
        let mark = createElement("zero-md")
        mark.setAttribute("src", link)
        this.root.appendChild(mark)
        this.root.style.position = "absolute"
        this.root.style.left = oL + "px"
        this.root.style.top = oU + "px"
        document.getElementById("body")[0].appendChild(root)
    }
}