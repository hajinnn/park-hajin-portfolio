$(document).ready(function(){


    //AOS
    AOS.init();

    // 햄버거버튼 script
  $('.hamberger').click(function () {
    $(this).find('span').toggleClass('active');
       if ($(this).find('span').hasClass('active')) {
          $('.hbg-box').addClass('active')
           $('.hbg-wrap').fadeIn('active')
       } else{
        $('.hbg-box').removeClass('active')
        $('.hbg-wrap').fadeOut('active')
       }
   });
   $('.hbg-wrap').click(function(){
    $(this).fadeOut('active')
    $('.hbg-box').removeClass('active');
    $('.hamberger').find('span').removeClass('active')
   });

    // 스크롤 영역 생성바
      const progressTag = document.querySelector('.progress')
      const bodyTag = document.querySelector('body')

      document.addEventListener('scroll', () => {
      const pixels = window.pageYOffset
      const pageHeight = bodyTag.getBoundingClientRect().height
      const totalHeight = pageHeight - window.innerHeight
      const percentage = pixels / totalHeight
      
      progressTag.style.width = `${100 * percentage}%`
      
    })


    // 헤더 스크롤 이벤트
    $(window).scroll(function(){
      const sct = $(window).scrollTop();
      if(sct >= 200){
          $('.main-wrap nav').addClass('active');
      }else{
          $('.main-wrap nav').removeClass('active');
      }
  });

    const $text = document.querySelector(".typing .text");
    // 글자 모음
    const letters = [
    "Park Ha Jin",
    "Web Publisher",
    "web designer", 
    "UI/UX Publisher"
    ];

    // 글자 입력 속도
    const speed = 100;
    let i = 0;

    // 타이핑 효과
    const typing = async () => {  
    const letter = letters[i].split("");
    
    while (letter.length) {
        await wait(speed);
        $text.innerHTML += letter.shift(); 
    }
    
    // 잠시 대기
    await wait(800);
    
    // 지우는 효과
    remove();
    }

    // 글자 지우는 효과
    const remove = async () => {
    const letter = letters[i].split("");
    
    while (letter.length) {
        await wait(speed);
        
        letter.pop();
        $text.innerHTML = letter.join(""); 
    }
    
    // 다음 순서의 글자로 지정, 타이핑 함수 다시 실행
    i = !letters[i+1] ? 0 : i + 1;
    typing();
    }

    // 딜레이 기능 ( 마이크로초 )
    function wait(ms) {
    return new Promise(res => setTimeout(res, ms))
    }
    // 초기 실행
    setTimeout(typing, 1500);




    // sec6 animate-slider box1 클릭시 복사 script
    function copyText() {
      const temp = document.createElement("textarea");
      document.body.appendChild(temp);
    
      temp.value = "lms5318@naver.com";
      temp.select();
    
      document.execCommand("copy");
      document.body.removeChild(temp);
    
      window.alert("클립보드에 복사되었습니다.");
    }

    const button = document.querySelector(".animate-slider");
    
    button.addEventListener("click", copyText);

    // animate-slider box2 클릭시 복사 script
    function copyText() {
      const temp = document.createElement("textarea");
    
      document.body.appendChild(temp);
    
      temp.value = "lms5318@naver.com";
      temp.select();
    
      document.execCommand("copy");
      document.body.removeChild(temp);
    
      window.alert("클립보드에 복사되었습니다.");
    }
    
    const buttont = document.querySelector(".animate-slider.box2");
    
    buttont.addEventListener("click", copyText);

    
    // animate-slider box3 클릭시 복사 script
    function copyText() {
      const temp = document.createElement("textarea");
    
      document.body.appendChild(temp);
    
      temp.value = "lms5318@naver.com";
      temp.select();
    
      document.execCommand("copy");
      document.body.removeChild(temp);
    
      window.alert("클립보드에 복사되었습니다.");
    }
    
    const buttontt = document.querySelector(".animate-slider.box3");
    
    buttontt.addEventListener("click", copyText);
      

      
    // .about .description p 영역
    var descriptionP = gsap.timeline({onComplete: () => {SplitGreat.revert()}}), 
        SplitGreat = new SplitText(".about-me", {type:"words,chars"}), 
        chars = SplitGreat.chars;


    descriptionP.from(chars, {
      duration: 0.8,
      opacity:0,
      y:10,
      ease:"circ.out",
      stagger: 0.02,
    }, "+=0");



    /* ------Burrowing Owl Sequence------  */
    // gsap.set(".rotateImg", { yPercent: 25, rotation: -60});

    // gsap.to(".rotateImg", {
    //   yPercent: -5,
    //   rotation: 540,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".titleBurrowing",
    //     scrub: 1
    //   }, 
    // });
  


    /* --- Split the text, Burrowing Owl --- */
    function setupSplits() {
      
    var tlSplitBurrowing = gsap.timeline(), 
        SplitBurrowing = new SplitText(".titleBurrowing", {type:"words,chars"}), 
        chars = SplitBurrowing.chars; //an array of all the divs that wrap each character


    tlSplitBurrowing.from(chars, {
      duration: 0.8,
      opacity:0,
      y:10,
      ease:"circ.out",
      stagger: 0.02,
    scrollTrigger: {
        trigger: ".titleBurrowing",
    //markers:true,
        start: "top 75%",
      end: "bottom center",
        scrub:1
      }
    //,   onComplete: () => {SplitBurrowing.revert()}
    }, "+=0");
    };

    ScrollTrigger.addEventListener("refresh", setupSplits);
    //ScrollTrigger.addEventListener("scrollEnd", () => SplitBurrowing.revert());
    setupSplits();




    //안에 sec3 원형그래프 속성 담기
    function skillScroll() {

    // ninety
    var perNum = 90;
    $('.second.ninety').circleProgress({
      value: perNum/100,
      startAngle:300,
      // size:100,
      fill:{
        color:["#fff"],
        gradientAngle: Math.PI / 2
      },
      animation:{
        duration:1000,
        easing:"swing"
      },
      lineCap : "butt",
      reverse:false,
    
          
    }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(Math.round(perNum * progress) + '<i>%</i>');
    });

    // eighty
    var perNumm = 80;
  $('.second.eighty').circleProgress({
    value: perNumm/100,
    startAngle:300,
    // size:100,
    fill:{
      gradient:["#fff"],
      gradientAngle: Math.PI / 2
    },
    animation:{
      duration:1000,
      easing:"swing"
    },
    lineCap : "butt",
    reverse:false
          
    }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(Math.round(perNumm * progress) + '<i>%</i>');
    });

    // sixty
    var perNummm = 60;
  $('.second.sixty').circleProgress({
    value: perNummm/100,
    startAngle:300,
    // size:100,
    fill:{
      gradient:["#fff"],
      gradientAngle: Math.PI / 2
    },
    animation:{
      duration:1000,
      easing:"swing"
    },
    lineCap : "butt",
    reverse:false
          
    }).on('circle-animation-progress', function(event, progress) {
          $(this).find('strong').html(Math.round(perNummm * progress) + '<i>%</i>');
    });

    
  }



  $('.skill-card').mouseenter(function(){
    skillScroll();
    $(this).children('.skill-bar').addClass('active');
  });
  $('.skill-card').mouseleave(function(){
    $(this).children('.skill-bar').removeClass('active');
  });


  
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    centeredSlides: false,
    // spaceBetween: 30,
    slidesPerGroupSkip: 1,
    grabCursor: true,
    keyboard: {
      enabled: true,
    },
    breakpoints: {
      769: {
        slidesPerView: 2,
        slidesPerGroup: 2,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


   // petmood 마우스 커스텀
   var petmoodcursor = document.querySelector('.petmood-cursor');
   // 마우스 이동
   document.addEventListener('mousemove', function(e){
       petmoodcursor.style.left = e.pageX + 'px';
       petmoodcursor.style.top = e.pageY + 'px';
   });
   // 마우스 클릭 효과
   document.addEventListener('mousedown', function(e){ petmoodcursor.classList.add('clicked'); });
   document.addEventListener('mouseup', function(e){ petmoodcursor.classList.remove('clicked'); });
   // 마우스 위치가 브라우저 밖으로 벗어날시
   var wrap = document.querySelector('.uxui-wrap.petmood .swiper');
   wrap.addEventListener('mouseover', function(){ petmoodcursor.style.display = 'block'; });
   wrap.addEventListener('mouseout', function(){ petmoodcursor.style.display = 'none'; });


  // jabala 마우스 커스텀
   var jabalacursor = document.querySelector('.jabala-cursor');
   // 마우스 이동
   document.addEventListener('mousemove', function(e){
       jabalacursor.style.left = e.pageX + 'px';
       jabalacursor.style.top = e.pageY + 'px';
   });
   // 마우스 클릭 효과
   document.addEventListener('mousedown', function(e){ jabalacursor.classList.add('clicked'); });
   document.addEventListener('mouseup', function(e){ jabalacursor.classList.remove('clicked'); });
   // 마우스 위치가 브라우저 밖으로 벗어날시
   var wrap = document.querySelector('.uxui-wrap.jabala .swiper');
   wrap.addEventListener('mouseover', function(){ jabalacursor.style.display = 'block'; });
   wrap.addEventListener('mouseout', function(){ jabalacursor.style.display = 'none'; });


    // healing 마우스 커스텀
    var healingcursor = document.querySelector('.healing-cursor');
    // 마우스 이동
    document.addEventListener('mousemove', function(e){
        healingcursor.style.left = e.pageX + 'px';
        healingcursor.style.top = e.pageY + 'px';
    });
    // 마우스 클릭 효과
    document.addEventListener('mousedown', function(e){ healingcursor.classList.add('clicked'); });
    document.addEventListener('mouseup', function(e){ healingcursor.classList.remove('clicked'); });
    // 마우스 위치가 브라우저 밖으로 벗어날시
    var wrap = document.querySelector('.uxui-wrap.healing .swiper');
    wrap.addEventListener('mouseover', function(){ healingcursor.style.display = 'block'; });
    wrap.addEventListener('mouseout', function(){ healingcursor.style.display = 'none'; });

  


  //  about horizontal-scroll 영역
    const scrollSection = document.querySelector('.horizontal-scroll__section');
    const scrollContent = document.querySelector('.horizontal-scroll__content');

    const scrollHeight = scrollSection.clientHeight;
    const contentWidth = scrollContent.clientWidth;

    document.addEventListener('scroll', e => {
      const scrolled = window.pageYOffset;
      const sectionOffset = Math.abs(scrollSection.offsetTop - scrolled);
      const notReachedBottom = parseInt(Math.max(0, scrollSection.getBoundingClientRect().bottom - window.innerHeight));

      if (scrollSection.offsetTop <= scrolled && notReachedBottom) {

        gsap.to(scrollContent, {
          x: -sectionOffset });

      }
    });


    // const container = document.querySelector(".menu-section-wrap .container");

    // document.body.addEventListener("mousemove", e => {
    //   const x = e.clientX;
    //   const y = e.clientY - 430;
    //   gsap.to(container, {
    //     y: y
    //   });
    //   gsap.to(".menu-section-wrap .menu-mask", {
    //     y: -y
    //   });
    // });

    // lettering-wrap 스크롤
  $(window).scroll(function(){
    var scrollMain = $(window).scrollTop();
    var lineMove = $(window).scrollTop();
    // console.log('windowScrollTop is '+scrollMain)

    var mainBox = -1/10 * scrollMain + -9/50;
    $('.lettering-wrap').css('right', mainBox+'%');

    var mainBox = -1/10 * scrollMain + -9/50;
    $('.lettering-wrap.two').css('left', mainBox+'%');
  });
    




    // hide-text
    $(".hide-text-move").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $(this);

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          start: "-100% top",
          end: "30% top",
          scrub: 0.8
        }
      });
      tl.to(targetElement, {
        y: "100%",
        duration: 1
      });
    });





    // horizontal-scroll영역
    gsap.registerPlugin(ScrollTrigger);
    // gsap.registerPlugin(ScrollToPlugin);

    ScrollTrigger.defaults({
      markers: false
    });

    // 백그라운드컬러 변경
    $(".horizontal-scroll__section").each(function (index) {
      let triggerElement = $(this);
      let targetElement = $("body");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: triggerElement,
          // trigger element - viewport
          // can also use "20px 80%"
          start: "top top",
          end: "bottom bottom",
          scrub: 1
        }
      });
      tl.fromTo(
        targetElement,
        {
          backgroundColor: "#34353b",
          color: "#E3DDDD",
          duration: 1
        },
        {
          backgroundColor: "#E3DDDD",
          color: "#34353b",
          duration: 1
        }
      );
    });

    // tab영역
    $('.btn li').click(function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    
      const clik = $(this).attr('data-alt');
    
      $('.tabs div').removeClass('active');
      $(`#${clik}`).addClass('active');
    });

     //moblide tab영역
     $('.btn li').click(function(){
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    
      const cliks = $(this).attr('data-alt');
    
      $('.tabs div').removeClass('active');
      $(`#${cliks}`).addClass('active');
    });
      
    // accordion영역
    $('.about__item .content .accordion .item').mouseenter(function(){
      $(this).addClass('active');
      $(this).siblings().removeClass('active');
    });



  // pointline 스크롤 효과
  // pointbox 스크롤 효과
  function myLine() {
    // console.log('af')
    setTimeout(function(){
        $('.pointline__line').css({
            height: '60vh'
        })
        $('.pointbox__line').css({
          height: '8vh'
      })
    }, 400)

  }


















});