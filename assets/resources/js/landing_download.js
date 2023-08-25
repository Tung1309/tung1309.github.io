$(document).ready(function() {
    $('.btn_right_nav_c').click(function(event) {
        var sticky_sau = $('.active_right_nav').next();
        console.log(sticky_sau)
        if (sticky_sau.length != 1) {
            $('.btn_right_nav_c').addClass('btn_right_nav_o');
            $('.right_nav').addClass('active_right_nav');
        } else {
            $('.btn_right_nav_o').removeClass('btn_right_nav_o');
            $('.right_nav').removeClass('active_right_nav');
        }
    });

    $(".mp_hp ul li").click(function(event) {
        var vi_tri_hien_tai = $('.hp_active').index() + 1;
        var vi_tri_click = $(this).index() + 1;
        $('.mp_hp ul li').removeClass('hp_active');
        $(this).addClass('hp_active');
        if (vi_tri_click > vi_tri_hien_tai) {
            $('.char_active').addClass('fadedown').removeClass('char_active').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.char ul:nth-child(' + vi_tri_click + ')').addClass('fadeup').addClass('char_active').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
        }
        if (vi_tri_click < vi_tri_hien_tai) {
            $('.char_active').addClass('fadedown').removeClass('char_active').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.char ul:nth-child(' + vi_tri_click + ')').addClass('fadeup').addClass('char_active').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
        }
    });

    // $(".feature_content ul li .spine_card").on("click", function () {
    //     var d = $(this).parent("li");
    //     var boxWidth = $(".card_content").width();
    //     console.log(boxWidth)
    //     if (d.hasClass("open")) {
    //         d.removeClass("open");
    //         d.find("li").removeClass("open");
    //     }
    //     else {            
    //         d.addClass("open")
    //         d.siblings("li").removeClass("open");
    //         d.siblings("li").find("li").removeClass("open");
    //     }
    // });

    $('.btn_trailer').fancybox();

    $('.btn_play_feature').fancybox();

    var autoLoad = setInterval(function() {
        $('.sc2_btn_next').trigger('click');
    }, 3000);

    $(".new_feature_pag li").click(function(event) {
        clearInterval(autoLoad);
        var vi_tri_hien_tai = $('.active_feature_pag').index() + 1;
        var vi_tri_click = $(this).index() + 1;
        $('.new_feature_pag li').removeClass('active_feature_pag');
        $(this).addClass('active_feature_pag');
        if (vi_tri_click > vi_tri_hien_tai) {
            $('.active_feature_slide').addClass('fadedown').removeClass('active_feature_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.new_feature_slide li:nth-child(' + vi_tri_click + ')').addClass('fadeup').addClass('active_feature_slide').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.active_feature_text').removeClass('active_feature_text');
            $('.new_feature_text li:nth-child(' + vi_tri_click + ')').addClass('active_feature_text');
        }
        if (vi_tri_click < vi_tri_hien_tai) {
            $('.active_feature_slide').addClass('fadedown').removeClass('active_feature_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.new_feature_slide li:nth-child(' + vi_tri_click + ')').addClass('fadeup').addClass('active_feature_slide').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.active_feature_text').removeClass('active_feature_text');
            $('.new_feature_text li:nth-child(' + vi_tri_click + ')').addClass('active_feature_text');
        }
    });

    $('.sc2_btn_next').click(function(event) {
        var slide_sau = $('.active_feature_slide').next();
        var vi_tri_sc2_text = $('.active_feature_text').index() + 1;
        var vi_tri_sc2_feature_tag = $('.active_feature_pag').index() + 1;
        if (slide_sau.length != 0) {
            $('.active_feature_slide').addClass('fadedown').removeClass('active_feature_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            slide_sau.addClass('active_feature_slide').addClass('fadeup').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.new_feature_text li').removeClass('active_feature_text');
            $('.new_feature_text li:nth-child(' + (vi_tri_sc2_text + 1) + ')').addClass('active_feature_text');
            $('.new_feature_pag li').removeClass('active_feature_pag');
            $('.new_feature_pag li:nth-child(' + (vi_tri_sc2_feature_tag + 1) + ')').addClass('active_feature_pag');
        } else {
            $('.active_feature_slide').addClass('fadedown').removeClass('active_feature_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.new_feature_slide li:first-child').addClass('active_feature_slide').addClass('fadeup').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.new_feature_text li').removeClass('active_feature_text');
            $('.new_feature_text li:nth-child(1)').addClass('active_feature_text');
            $('.new_feature_pag li').removeClass('active_feature_pag');
            $('.new_feature_pag li:nth-child(1)').addClass('active_feature_pag');
        }
    });

    var autoLoad2 = setInterval(function() {
        $('.sc3_btn_next').trigger('click');
    }, 3500);

    $(".newbie_present_pag li").click(function(event) {
        clearInterval(autoLoad2);
        var vi_tri_hien_tai = $('.active_present_pag').index() + 1;
        var vi_tri_click = $(this).index() + 1;
        $('.newbie_present_pag li').removeClass('active_present_pag');
        $(this).addClass('active_present_pag');
        if (vi_tri_click > vi_tri_hien_tai) {
            $('.active_present_slide').addClass('fadedown').removeClass('active_present_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.newbie_present_slide li:nth-child(' + vi_tri_click + ')').addClass('fadeup').addClass('active_present_slide').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.active_present_text').removeClass('active_present_text');
            $('.newbie_present_text li:nth-child(' + vi_tri_click + ')').addClass('active_present_text');
        }
        if (vi_tri_click < vi_tri_hien_tai) {
            $('.active_present_slide').addClass('fadedown').removeClass('active_present_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.newbie_present_slide li:nth-child(' + vi_tri_click + ')').addClass('fadeup').addClass('active_present_slide').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.active_present_text').removeClass('active_present_text');
            $('.newbie_present_text li:nth-child(' + vi_tri_click + ')').addClass('active_present_text');
        }
    });

    $('.sc3_btn_next').click(function(event) {
        var slide_sau_2 = $('.active_present_slide').next();
        var vi_tri_sc3_text = $('.active_present_text').index() + 1;
        var vi_tri_sc3_feature_tag = $('.active_present_pag').index() + 1;
        if (slide_sau_2.length != 0) {
            $('.active_present_slide').addClass('fadedown').removeClass('active_present_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            slide_sau_2.addClass('active_present_slide').addClass('fadeup').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.newbie_present_text li').removeClass('active_present_text');
            $('.newbie_present_text li:nth-child(' + (vi_tri_sc3_text + 1) + ')').addClass('active_present_text');
            $('.newbie_present_pag li').removeClass('active_present_pag');
            $('.newbie_present_pag li:nth-child(' + (vi_tri_sc3_feature_tag + 1) + ')').addClass('active_present_pag');
        } else {
            $('.active_present_slide').addClass('fadedown').removeClass('active_present_slide').one('webkitAnimationEnd', function(event) {
                $('.fadedown').removeClass('fadedown');
            });
            $('.newbie_present_slide li:first-child').addClass('active_present_slide').addClass('fadeup').one('webkitAnimationEnd', function(event) {
                $('.fadeup').removeClass('fadeup');
            });
            $('.newbie_present_text li').removeClass('active_present_text');
            $('.newbie_present_text li:nth-child(1)').addClass('active_present_text');
            $('.newbie_present_pag li').removeClass('active_present_pag');
            $('.newbie_present_pag li:nth-child(1)').addClass('active_present_pag');
        }
    });

});


$(function() {
    $('a[href*=\\#]:not([href=\\#])').on('click', function() {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.substr(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    });
});

function modalComing() {
    $("#downloadModal").modal('show');
    event.preventDefault();
}