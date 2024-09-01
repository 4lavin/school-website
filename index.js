$(document).ready(function () {
    let seeMore = $(".see-more");
    let seeLess = $(".see-less");
    let hide = $(".hide");
    seeMore.click(function (e) {
        e.preventDefault()
        $(hide).addClass("active")
        seeLess.show()
        $(this).hide()
    })
    seeLess.click(function (e) {
        e.preventDefault()
        $(hide).removeClass("active")
        seeMore.show()
        $(this).hide()
    })
    let menuIcon = $(".menu-icon");
    let close = $(".close");
    let navbar = $(".navbar");
    menuIcon.click(function() {
        navbar.addClass("nav-active")
    })
    close.click(function() {
        navbar.removeClass("nav-active")
    })
})