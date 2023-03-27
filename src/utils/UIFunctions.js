const toggleMenuBar =()=>{
    var e = t(this).attr("data-class");
    t(".app-container").toggleClass(e);
    var i = t(this);
    i.hasClass("is-active") ? i.removeClass("is-active") : i.addClass("is-active")

}