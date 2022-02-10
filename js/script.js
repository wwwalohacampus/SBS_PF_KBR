$(function(){

    //사이드 로그인 클릭하면 꺼내거나 넣기
    let sideLogin = 0
    $('.loginToggleS').on('click', function(){
        sideLogin++
        if( sideLogin%2 == 1){
        $('#sideLogin').css({'left':'0px'})
        $('.loginToggleS img').css({'transform':'translateX(-50%) rotateZ(-180deg)'})
        $('.loginToggleS').css({'opacity':'1'})
        }else{
        $('#sideLogin').css({'left':'-300px'})
        $('.loginToggleS img').css({'transform':'translateX(-50%)'})
        $('.loginToggleS').css({'opacity':'0.5'})
        };
    })
    




    //네비게이션
    let sldTitle = $('.sldTitle')
    let sldTitleCount = sldTitle.length
    for(let i = 0 ; i < sldTitleCount ; i++){
        let dot = "<a href='#' class='dot'></a>"
        $(".dots-box").append(dot)



    }

    // 첫번째 이미지에 액티브 클레스 넣고 시작하기
    $(function(){$('.slideImg:first-child').addClass('active')})
    //같은 위치의 dot에 엑티브 넣기
    $(function(){$('.dot:first-child').addClass('active')})

    //슬라이드 타이틀 위치 조정 (맨 뒤의 요소와 맨 뒤에서 두번째 요소가 언제나 타이틀 슬라이드 순서상 1, 2번 위치에 와있도록)
    let sldTitlelength = sldTitle.length
    let slideList = $('.slideList')
    $(function(){
        $('.sldTitle').last().prependTo(slideList)
        $('.sldTitle').eq(sldTitlelength-1).prependTo(slideList)
    })
    
    // 슬라이드: 5초마다 첫번째타이틀이 맨 뒤로 이동하는 것을 반복. 그러나 슬라이드에 호버하면 멈춤
    const intervalTime = 5000
    let slideArea = $('.slideArea')
    let index = 0
    let dotMax = $(".dots-box .dot").length;
    //5초마다 첫번째 슬라이드 이미지가 맨 뒤로 이동하게 끔.
    function move( ){
        index++
        slide()
        // 타이틀 다음
        $('.sldTitle').eq(0).appendTo(slideList)
    }

    function slide() {
        // 다음 끝 -> 처음
        if( index == dotMax )
            index = 0
       
        // 이전 끝 -> 마지막
        if( index == -1 )
            index = dotMax-1

        // 슬라이드 이미지
        $('.slideImg').removeClass('active')
        $('.slideImg').eq(index).addClass('active')

        // 닷츠
        $(".dots-box .dot").removeClass('active')
        $(".dots-box .dot").eq(index).addClass('active')
    }

    // function moveTitle( i ) {
    //     $('.sldTitle').eq(0).appendTo(slideList)
    // }

    $(".sldBtn .prev").on('click', function(){
        index--
        slide()
        prevTitle(1)
    })
    $(".sldBtn .next").on('click', function(){
        index++
        slide()
        nextTitle(1)
    })

    function prevTitle( n ) {
        // 타이틀 이전
        for( var i = 0; i < n ; i++ ){
            $('.sldTitle').eq(5).prependTo(slideList)
        }
    }

    function nextTitle( n ) {
        // 타이틀 다음
        for( var i = 0; i < n ; i++ ){
            $('.sldTitle').eq(0).appendTo(slideList)
        }
    }

    $('.dot').on('click', function() {
        let n = $(this).index()
        let gap = n - index
        let absGap = Math.abs(gap)

        if( gap > 0 ) {
            nextTitle(absGap)
        } else {
            prevTitle(absGap)
        }
        index = n
        slide()
    })
    

    $('.sldTitle').on('click', function() {
        let n = $(this).attr('data')
        let gap = n - index
        let absGap = Math.abs(gap)

        if( gap > 0 ) {
            nextTitle(absGap)
        } else {
            prevTitle(absGap)
        }
        index = n
        slide()
    })
    
    
    //그 움직임을 함수  startSlide() 라고 정해줌. 그리고 그 움직임의 이름은 slideMove임.
    let slideMove
    // 슬라이드 시작하는 함수
    function startSlide(){slideMove = setInterval(move, intervalTime)}
    //슬라이드 멈추는 함수
    function stopSlide(){clearInterval(slideMove);}
    //마우스 호버,리브 했을때 멈추고 시작하는걸 설정해줌.
        $('.slide').hover(stopSlide,startSlide)
    //창 켜졌을때 바로 시작할 수 있도록 하게 해줌.
    startSlide()

    
    
    //신규게임 자세히 보기 열고 닫기
    $('.newGame1 .goToHomepage').click(function(){
        $('.newGameMore').css({'z-index': '250'})
        $('.ng1More').css({'display': 'block'})
        $('.bg').css({'display': 'block'})
    })

    $('.ng1_closeBtn').click(function(){
        $('.newGameMore').css({'z-index': ''})
        $('.ng1More').css({'display': 'none'})
        $('.bg').css({'display': 'none'})
    })

    $('.newGame2 .goToHomepage').click(function(){
        $('.newGameMore').css({'z-index': '250'})
        $('.ng2More').css({'display': 'block'})
        $('.bg').css({'display': 'block'})
    })

    $('.ng2_closeBtn').click(function(){
        $('.newGameMore').css({'z-index': ''})
        $('.ng2More').css({'display': 'none'})
        $('.bg').css({'display': 'none'})
    })

    //전체게임 한눈에 보기 on/off
    function allGameToggle(){
        $('.section3 > p:nth-child(2)').on('click', function(){
            $('.allGames-menu').toggle(500)
        })
    }
    allGameToggle()



    //전체게임 슬라이드
    let rpgGameSlide = $('.rpgGameSlide')
    let fpsGameSlide = $('.fpsGameSlide')
    let stageGameSlide = $('.stageGameSlide')
    let rpgGameText = $('.rpgGameText')
    let fpsGameText = $('.fpsGameText')
    let stageGameText = $('.stageGameText')
    let gameRpgLogo = $('.gameRpgLogo')
    let gameFpsLogo = $('.gameFpsLogo')
    let gameStageLogo = $('.gameStageLogo')

    function leftbtn(){
    $('.rpgGame-prev').on('click', function(){
        $('.rpgGameList').last().prependTo(rpgGameSlide)
        $('.rpgText').last().prependTo(rpgGameText)
        $('.rpgLogo').last().prependTo(gameRpgLogo)
    })
    $('.fpsGame-prev').on('click', function(){
        $('.fpsGameList').last().prependTo(fpsGameSlide)
        $('.fpsText').last().prependTo(fpsGameText)
        $('.fpsLogo').last().prependTo(gameFpsLogo)
    })
    $('.stageGame-prev').on('click', function(){
        $('.stageGameList').last().prependTo(stageGameSlide)
        $('.stageText').last().prependTo(stageGameText)
        $('.stageLogo').last().prependTo(gameStageLogo)
    })
    }

    function rightbtn(){
    $('.rpgGame-next').on('click', function(){
        $('.rpgGameList').eq(0).appendTo(rpgGameSlide)
        $('.rpgText').eq(0).appendTo(rpgGameText)
        $('.rpgLogo').eq(0).appendTo(gameRpgLogo)
    })
    $('.fpsGame-next').on('click', function(){
        $('.fpsGameList').eq(0).appendTo(fpsGameSlide)
        $('.fpsText').eq(0).appendTo(fpsGameText)
        $('.fpsLogo').eq(0).appendTo(gameFpsLogo)
    })
    $('.stageGame-next').on('click', function(){
        $('.stageGameList').eq(0).appendTo(stageGameSlide)
        $('.stageText').eq(0).appendTo(stageGameText)
        $('.stageLogo').eq(0).appendTo(gameStageLogo)
    })
    }
    
    leftbtn()
    rightbtn()



    //푸터 언어 바꾸기
    function langToggle(){
        $('.lang div:first-child').on('click', function(){
            $('.lang div:nth-child(2)').toggle()
        })
    }
    langToggle()
})
