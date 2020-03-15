$(function () {
    var height = $(".header").height();
    $("main_content").css("margin-top" , height);
});

$(function () {
    $(".h_n_img4").click(function() {
        $(".nav_cont_box").slideToggle();
        $(".nav_cont_box").toggleclass("active");
    });
});
