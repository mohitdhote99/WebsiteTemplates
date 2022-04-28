(function($){

sliderinit(true);

// window all animation front page
    var scroll_ = $(window).scrollTop();
    if (scroll_ == 0 || scroll_ > 0) {
    	$('.ht_slider_wraper').addClass('active');
    }
// window all animation front page on scroll
  $(window).scroll(function(){
    let scroll_win = $(window).scrollTop();
    console.log(scroll_win);
    if (scroll_win > 0) { $('.ht_slider_wraper').addClass('active'); }
    if (scroll_win > 400) {$('.categeory-and-products').addClass('active');}
    if (scroll_win > 700) {$('.all_products_catelog').addClass('active');}
    if (scroll_win > 1600) {$('.shorting-products').addClass('active');}
    if (scroll_win > 2000) {$('.ht-partners-logos').addClass('active');}
    if (scroll_win > 2100) {$('.ht-footer').addClass('active');}
  });

	// for next and previous
	$(document).on('click','.next',function(){
		let parentW		= '100';
		let wraper			= $('.ht_slider_slides_wraper');
		let wraperW		= wraper.outerWidth();
		let noOfSlide 		= wraper.children();
		let slideActive 	= wraper.children('div.active');
		let indexofactive   = slideActive.index()+1;
		let lastindex 		= $('.ht_slider_slides_wraper>div:last-child').index();
		$('.ht_slider_slides_wraper').children('div.active').removeClass('active');
			if (indexofactive < lastindex) {
				$(noOfSlide[indexofactive]).addClass('active');
				$(wraper).css({'margin-left':'-'+(parentW*indexofactive)+'%','transition':'1s all ease'});
			}else{
				$(wraper).css({'margin-left':'0%','transition':'unset'});
				$(noOfSlide[0]).addClass('active');
			}

	});

	$(document).on('click','.prev',function(){
		let parentW			= '100';
		let wraper			= $('.ht_slider_slides_wraper');
		let noOfSlide 		= wraper.children();
		let slideActive 	= wraper.children('div.active');
		let indexofactive   = slideActive.index();
		let firstindex 		= $('.ht_slider_slides_wraper>div:first-child').index();
		let lastindex 		= $('.ht_slider_slides_wraper>div:last-child').index()-1;

		$('.ht_slider_slides_wraper').children('div.active').removeClass('active');
			if (indexofactive > firstindex) {
				$(noOfSlide[indexofactive-1]).addClass('active');
				$(wraper).css({'margin-left':(parentW-parentW*indexofactive)+'%','transition':'1s all ease'});
			}else{
				$(wraper).css({'margin-left':'-'+(parentW*lastindex)+'%','transition':'unset'});
				$(noOfSlide[lastindex]).addClass('active');
			}

	});


	function sliderinit(autoslide){
		let parentW		= '100';
		let slideWpaper = $('.ht_slider_slides_wraper');
		let totalSlide 	= slideWpaper.children();
		let html 		= $(totalSlide[0].outerHTML).removeClass('active');
		slideWpaper.append(html);
		// index getting after appen new index
		let afterIndex = $('.ht_slider_slides_wraper').children();
		// setting width of main container
		$(slideWpaper).css({'width':afterIndex.length*parentW+'%'});
			function slider(){
				let main_child_wrap = $('.ht_slider_slides_wraper');
				let nowLength 		= main_child_wrap.children();
				let wraperOuter	 	= slideWpaper.outerWidth();
				let slideActive 	= main_child_wrap.children('div.active');
				let activeIndex 	= slideActive.index();
				let index_ 			= activeIndex+1;
				if(index_ == nowLength.length-1){
			      	$(main_child_wrap).css({'margin-left':'-'+(parentW * index_)+'%','transition':'0.25s all ease'});
		      		setTimeout(()=>{
		      			$(main_child_wrap).css({'margin-left':'0%','transition':'unset'});
						$(slideActive).removeClass('active');
		                $(main_child_wrap.children()[0]).addClass('active');
		      		},100);
				}else{
					$(slideActive).removeClass('active');
					$(slideWpaper.children()[index_]).addClass('active');
			      	$(main_child_wrap).css({'margin-left':'-'+(parentW * index_)+'%','transition':'1s all ease'});
         		}
			}

		if (autoslide) {setInterval(slider,4000);}
	}

})(jQuery);