class MD_handler {
    constructor(link, oL, oU, w, h) {
        root = createElement("div")
        mark = createElement("zero-md")
        mark.setAttribute("src", link)
        root.appendChild(mark)
        root.style.position = "absolute"
        root.style.left = oL + "px"
        root.style.top = oU + "px"
        document.getElementById("body")[0].appendChild(root)
    }
}