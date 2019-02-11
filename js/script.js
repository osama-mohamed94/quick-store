$(function(){
    var windowPage = $(window);
    /*Start Navbar*/
    
    $(".navbar-section .icon-small-menu").click(function(){
        var button = $(this);
        if(button.hasClass("anim-nav-button")){
            button.removeClass("anim-nav-button");
        } else {
            button.addClass("anim-nav-button");
        }
    });
    var topEle = $(".top-header"),
        navEle = $(".navbar-section");
    $(windowPage).scroll(function(){
        if(windowPage.scrollTop() > 0/*navEle.innerHeight() + navEle.outerHeight()*/){
            $(navEle).addClass("fixed-top");
            //$(navEle).next().next().css("margin-top", navEle.outerHeight());
        } else {
            $(navEle).removeClass("fixed-top");
            //$(navEle).next().next().css("margin-top", 0);
        }
    });
    
    /*End Navbar*/
    /*Start Side Menu*/
    
    var buttonMenu = $(".navbar .icon-small-menu"),
        sideMenu = $(".side-menu.overlay"),
        closeSideMenu = $(".side-menu.overlay .menu .top .close-icon"),
        dropDownElement = $(".side-menu.overlay .menu .item li .drop");
    $(".navbar .icon-small-menu, .side-menu.overlay .menu .top .close-icon, .side-menu.overlay, .side-menu.overlay .menu .item li .drop").click(function(e){
        if(e.currentTarget == $(buttonMenu)[0]){
            buttonMenu.addClass("anim-nav-button");
            sideMenu.fadeIn(1000 * 0.4).find(".menu").animate({
                "right": 0
            }, 1000 * 0.4);
        } else if(e.currentTarget == $(closeSideMenu)[0]){
            buttonMenu.removeClass("anim-nav-button");
            $(this).parents(".menu").animate({
                "right": "-250px"
            }, 1000 * 0.4);
            setTimeout(function(){
                sideMenu.fadeOut(1000 * 0.4);
            }, 1000 * 0.4);
        } else if(e.target == $(sideMenu)[0]){
            buttonMenu.removeClass("anim-nav-button");
            $(this).find(".menu").animate({
                "right": "-250px"
            }, 1000 * 0.4);
            setTimeout(function(){
                sideMenu.fadeOut(1000 * 0.4);
            }, 1000 * 0.4);
        } else if(e.currentTarget == $(dropDownElement)[0]){
            e.preventDefault();
            $(this).next().slideToggle(1000 * 0.4);
        }
    });
    
    /*End Side Menu*/
    /*Start Basket*/
    
    $(".basket .num span").click(function(e){
        var inputNumNext = $(this).next(),
            inputNumPrev = $(this).prev();
        if($(e.currentTarget).hasClass("up")){
            inputNumNext.val(Number(inputNumNext.val()) + 1);
        } else if($(e.currentTarget).hasClass("down")){
            if(inputNumPrev.val() == 0){
                inputNumPrev.val(0);
            } else {
                inputNumPrev.val(Number(inputNumPrev.val()) - 1);
            }
        }
    });
    $(".basket .num input").keyup(function(){
        var thisInput = $(this);
        if(isNaN(thisInput.val())){
            thisInput.val("");
        }
    });
    $(".basket .remove").click(function(){
        $(this).parents(".row").detach();
    });
    
    /*End Basket*/
    /*Start Bank*/
    
    $(".bank .banks #info-1").click(function(){//EDIT NEW
        $(".bank .banks #info-1 .info").not($(this).find(".info")).animate({
            "opacity": 0
        }).css("height", 0).find(".ok").animate({
            "opacity": 0
        });
        $(this).find(".info").animate({
            "opacity": 1
        }).css("height", "auto").find(".ok").animate({
            "opacity": 1
        });
        
    });
    
    //NEW
    $(".bank .banks #info-2").hover(function(){
        var info2 = $(this);
        info2.find(".bn .image").stop(false, false).animate({
            "opacity": 0.1
        }, 1000 * 0.3).addClass("position-absolute").end()
        .find(".info").css("height", "auto").stop(false, false).animate({
            "opacity": 1
        }, 1000 * 0.3);
    },
    function(){
        var info2 = $(this);
        $(".bank .banks #info-2").find(".bn .image").stop(false, false).animate({
            "opacity": 1
        }, 1000 * 0).removeClass("position-absolute").end()
        .find(".info").css("height", 0).stop(false, false).animate({
            "opacity": 0
        }, 1000 * 0);
    });
    
    /*End Bank*/
    /*Start My Account*/
    
    $(".my-account .info .edit").click(function(e){
        var edit = $(this);
        if(edit.hasClass("edit-1")){
            edit.removeClass("edit-1").addClass("edit-2").text("حفظ");
            edit.parent("form").find("> p input").removeAttr("disabled").end()
            .find("> p:first-of-type input").focus().select();
        } else {
            edit.removeClass("edit-2").addClass("edit-1").text("تعديل البيانات");
            edit.parent("form").find("> p input").attr("disabled", "disabled")
        }
    });
    
    /*End My Account*/
    /*Card*//*NEW*/
    var numberProduct = $(".navbar-section .cart .con .products .prod").length,
        productSelectElem = $("#number-product-select");
    productSelectElem.text(numberProduct);
    $(".navbar-section .cart").hover(function(){
        $(this).find(".con").stop(false, false).slideDown(1000 * 0.3);
    },
    function(){
        $(this).find(".con").stop(false, false).slideUp(1000 * 0.3);
    });
});
// Start Info Account (Name Image)
$(".info-account #uploade").change(function () {
    var pathImage = $(this).val(),
        nameImage = "";
    for(var i = pathImage.length - 1; i >= 0; i--){
        if(pathImage.charAt(i) == "\\"){
            break;
        } else {
            nameImage += pathImage.charAt(i);
        }
    }
    $(".name-image").text(nameImage.split("").reverse().join(""));
    // Uploade File Done
    var su = $(".info-account .su");
    su.fadeToggle(1000 * 0.3);
    setTimeout(function () {
        su.fadeToggle(1000 * 0.3);
    }, 1000 * 2);
});





