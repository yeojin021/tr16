$(function () {

    const tl = gsap.timeline();
    tl
        .from({}, {})
        .from('.intro h2', { y: 100, opacity: 0 })
        .from('.intro p', { y: 100, opacity: 0 })
        .from('.intro span', { y: 100, opacity: 0 })
        .from('.intro em', { opacity: 0 })



    $('.wrapper').fullpage({
        anchors: ['intro', 'portfolio01', 'portfolio02', 'portfolio03', 'portfolio04', 'portfolio05', 'training', 'profile'],
        easing: 'linear',
        fixedElements: '#header, #footer',

        afterLoad: function (_, idx) {
            $('#header .gnb>ul>li').removeClass('on');
            $('#header .gnb>ul>li').eq(idx - 1).addClass('on');


            $('.section').removeClass('on');
            $('.section').eq(idx - 1).addClass('on');

            if (idx == 1) {
                $('#footer .to_top').removeClass('on')
            } else {
                $('#footer .to_top').addClass('on')

            }

        },

        onLeave: function (_, idx, d) {
            // 첫화면에 왔을때 애니다시재생

            if (idx == 1) {
                tl.restart();
            }

        }
    });


    $('#header .cover_btn').on('click', function () {
        $(this).toggleClass('on');
        $('#header .cover').toggleClass('on');

    });
    // 메뉴에서 클릭하면 그 페이지로 이동시키는거 
    $('#header .cover ul>li>a').on('click', function () {
        $('#header .cover_btn').removeClass('on');
        $('#header .cover').removeClass('on');
    });

    //  메뉴에서 스크롤안먹히게하는거
    $('#header .cover').on('wheel', function (e) {
        e.preventDefault();
        return false;
    })
});