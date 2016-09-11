$(document).ready(function(){
	initTabs();
	$('input.check').iCheck({
		checkboxClass: 'check',
		radioClass: 'radio',
		increaseArea: '20%' // optional
	});

function initTabs(){
	 $('.tabset ul.tab-control li a').on('click', function(){
	  var thisHold = $(this).closest(".tabset");
	  var _ind = $(this).closest('li').index();
	  thisHold.children('.tab-body').children(".tab").removeClass('active');
	  thisHold.children('.tab-body').children("div.tab:eq("+_ind+")").addClass('active');
	  $(this).closest("ul").find(".active").removeClass("active");
	  $(this).parent().addClass("active");
	  return false;
 });
};

	$('.answers-list a').on('click  touchstart', function (e) {
		var self = $(this);
		var currentMenu = $(this).closest('li').find('.answer');
		$('li .answer').not(currentMenu).slideUp();
		currentMenu.slideToggle();
		 $(this).not( $(' a.active')).toggleClass('active');
		$('.answers-list a').not(self).removeClass('active');
		 return false;
 	});


 	$('.basket-table .close ,.drop .close').on('click', function (e) {
		$(this).closest('tr').find("td").slideUp(300);
		 return false;
 	});

 	$('.top_header__head_basket__block').on('click', function (e) {
		$('.drop').toggleClass('active');
		 return false;
 	});



 	$(document).click(function(event) {
		if ($(event.target).closest('.drop').length) return;
		$('.drop').removeClass('active');
		event.stopPropagation();
	})



 	quantitySwitch();
	function quantitySwitch(){
	  $(document).on('click','.amount .minus,.amount .plus',function(e){
	    var input=$(this).parent().find('input'),
	      val=parseInt(input.val());
	    if($(this).is('.plus')){
	      input.val((++val))
	    }else{
	      if(val-1<=1)
	        input.val("1")
	      else
	        input.val((--val)+"")
	    }
	    e.preventDefault();
	  });
	};



});


/*! device.js 0.1.58 */
(function(){var a,b,c,d,e,f,g,h,i,j;a=window.device,window.device={},c=window.document.documentElement,j=window.navigator.userAgent.toLowerCase(),device.ios=function(){return device.iphone()||device.ipod()||device.ipad()},device.iphone=function(){return d("iphone")},device.ipod=function(){return d("ipod")},device.ipad=function(){return d("ipad")},device.android=function(){return d("android")},device.androidPhone=function(){return device.android()&&d("mobile")},device.androidTablet=function(){return device.android()&&!d("mobile")},device.blackberry=function(){return d("blackberry")||d("bb10")||d("rim")},device.blackberryPhone=function(){return device.blackberry()&&!d("tablet")},device.blackberryTablet=function(){return device.blackberry()&&d("tablet")},device.windows=function(){return d("windows")},device.windowsPhone=function(){return device.windows()&&d("phone")},device.windowsTablet=function(){return device.windows()&&d("touch")},device.fxos=function(){return d("(mobile; rv:")||d("(tablet; rv:")},device.fxosPhone=function(){return device.fxos()&&d("mobile")},device.fxosTablet=function(){return device.fxos()&&d("tablet")},device.mobile=function(){return device.androidPhone()||device.iphone()||device.ipod()||device.windowsPhone()||device.blackberryPhone()||device.fxosPhone()},device.tablet=function(){return device.ipad()||device.androidTablet()||device.blackberryTablet()||device.windowsTablet()||device.fxosTablet()},device.portrait=function(){return 90!==Math.abs(window.orientation)},device.landscape=function(){return 90===Math.abs(window.orientation)},device.noConflict=function(){return window.device=a,this},d=function(a){return-1!==j.indexOf(a)},f=function(a){var b;return b=new RegExp(a,"i"),c.className.match(b)},b=function(a){return f(a)?void 0:c.className+=" "+a},h=function(a){return f(a)?c.className=c.className.replace(a,""):void 0},device.ios()?device.ipad()?b("ios ipad tablet"):device.iphone()?b("ios iphone mobile"):device.ipod()&&b("ios ipod mobile"):device.android()?device.androidTablet()?b("android tablet"):b("android mobile"):device.blackberry()?device.blackberryTablet()?b("blackberry tablet"):b("blackberry mobile"):device.windows()?device.windowsTablet()?b("windows tablet"):device.windowsPhone()?b("windows mobile"):b("desktop"):device.fxos()?device.fxosTablet()?b("fxos tablet"):b("fxos mobile"):b("desktop"),e=function(){return device.landscape()?(h("portrait"),b("landscape")):(h("landscape"),b("portrait"))},i="onorientationchange"in window,g=i?"orientationchange":"resize",window.addEventListener?window.addEventListener(g,e,!1):window.attachEvent?window.attachEvent(g,e):window[g]=e,e()}).call(this);