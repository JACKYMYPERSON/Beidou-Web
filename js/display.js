window.onload = function () {
	// 导航栏动效
	$(window).scroll(function () {
		var scroll = $(window).scrollTop();
		var head_hight = $(".show").outerHeight();
		if (scroll >= head_hight) {
			$(".header").addClass("on");
		} else {
			$(".header").removeClass("on");
		}
	});


	// 轮播图动效
	slideW = 300;//一张图300px, 每面四张角度22.5（PI/8），中心角度PI/16	             
	radius = slideW * 0.5 / Math.sin(Math.PI / 16);//半径。圆心并不是视点中心，视点在1200px

	carouselSwiper = new Swiper('#carousel .swiper', {
		watchSlidesProgress: true,
		slidesPerView: 'auto',
		centeredSlides: false,
		speed: 200,
		loop: true,
		loopedSlides: 4,
		grabCursor: true,
		autoplay: {
			delay: 800,
			disableOnInteraction: false,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			//clickable :true,
		},
		on: {
			progress: function (swiper, progress) {
				for (i = 0; i < this.slides.length; i++) {
					let slide = this.slides.eq(i);
					let slideProgress = this.slides[i].progress;
					translateX = (slideProgress + 1.5) * (slideW / 3 - Math.cos((slideProgress + 1.5) * 0.125 * Math.PI) * slideW * 1.1 / 3) + 'px';//调整图片间距，根据图片宽度改变数值实现自适应
					rotateY = (slideProgress + 1.5) * 22.5;//图片角度
					translateZ = (radius - Math.cos((slideProgress + 1.5) * 0.125 * Math.PI) * radius - 150) + 'px';//调整图片远近，刚好4个在画框内
					slide.transform('translateX(' + translateX + ') translateZ(' + translateZ + ') rotateY(' + rotateY + 'deg)');

				}
			},
			setTransition: function (swiper, transition) {
				for (let i = 0; i < this.slides.length; i++) {
					let slide = this.slides.eq(i)
					slide.transition(transition);
				}

			}
		}

	})

		

	// 项目成果栏动画
	$(window).on('scroll', function () {
		let scrollTop = $(this).scrollTop();
		let itemTop = $(".items").outerHeight();

		if (scrollTop > itemTop / 2) {
			$(".slideInUp").each(function (i) {
				$(this)
					.delay(i * 200)
					.queue(function () {
						$(this).addClass("animate__animated animate__fadeInUp");
					});
			});
		}
	});

	(function () {
		// 点击地区导航栏动态显示国家
		var navs = document.querySelectorAll('.jump-list li a')
		var banners = document.querySelectorAll('.pagechange .page')
		for (let i = 0; i < navs.length; i++) {
			navs[i].onclick = function () {
				for (let j = 0; j < banners.length; j++) {
					banners[j].style.display = 'none'
				}
				let navid = '#' + this.getAttribute('data-id')
				document.querySelector(navid).style.display = 'block'
			}
		}
	})();
}