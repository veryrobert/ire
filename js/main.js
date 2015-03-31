var l = function(m) { console.log(m); };

var proc = function(){
	var p = "IRISHMEN AND IRISHWOMEN: In the name of God and of the dead generations from which she receives her old tradition of nationhood, Ireland, through us, summons her children to her flag and strikes for her freedom. Having organised and trained her manhood through her secret revolutionary organisation, the Irish Republican Brotherhood, and through her open military organisations, the Irish Volunteers and the Irish Citizen Army, having patiently perfected her discipline, having resolutely waited for the right moment to reveal itself, she now seizes that moment, and, supported by her exiled children in America and by gallant allies in Europe, but relying in the first on her own strength, she strikes in full confidence of victory. We declare the right of the people of Ireland to the ownership of Ireland, and to the unfettered control of Irish destinies, to be sovereign and indefeasible. The long usurpation of that right by a foreign people and government has not extinguished the right, nor can it ever be extinguished except by the destruction of the Irish people. In every generation the Irish people have asserted their right to national freedom and sovereignty; six times during the last three hundred years they have asserted it to arms. Standing on that fundamental right and again asserting it in arms in the face of the world, we hereby proclaim the Irish Republic as a Sovereign Independent State, and we pledge our lives and the lives of our comrades-in-arms to the cause of its freedom, of its welfare, and of its exaltation among the nations. The Irish Republic is entitled to, and hereby claims, the allegiance of every Irishman and Irishwoman. The Republic guarantees religious and civil liberty, equal rights and equal opportunities to all its citizens, and declares its resolve to pursue the happiness and prosperity of the whole nation and all of its parts, cherishing all of the children of the nation equally and oblivious of the differences carefully fostered by an alien government, which have divided a minority from the majority in the past. Until our arms have brought the opportune moment for the establishment of a permanent National, representative of the whole people of Ireland and elected by the suffrages of all her men and women, the Provisional Government, hereby constituted, will administer the civil and military affairs of the Republic in trust for the people. We place the cause of the Irish Republic under the protection of the Most High God. Whose blessing we invoke upon our arms, and we pray that no one who serves that cause will dishonour it by cowardice, in humanity, or rapine. In this supreme hour the Irish nation must, by its valour and discipline and by the readiness of its children to sacrifice themselves for the common good, prove itself worthy of the august destiny to which it is called. Signed on Behalf of the Provisional Government. Thomas J. Clarke, Sean Mac Diarmada, Thomas MacDonagh, P. H. Pearse, Eamonn Ceannt, James Connolly, Joseph Plunkett";
	l(p);
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
}

window.isMobile = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

// Site yo
var honk = {
	eventIndex : 0,

	// strands
	state : "https://spreadsheets.google.com/feeds/list/15vI4t00kqeyjd-EQRT3gcv6nriwqaoC39kENV815_wo/od6/public/values?alt=json",
	reminders : "https://spreadsheets.google.com/feeds/list/15Q4Ex7dxmiBUkdYnZzZrtKGJMVChjh2GcJt1vAZvZwA/od6/public/values?alt=json",
	historical : "https://spreadsheets.google.com/feeds/list/1yCUiKHq80REuYx0ypeUIpGRumi-Te43Lv4Ggkb18JmE/od6/public/values?alt=json",
	language : "https://spreadsheets.google.com/feeds/list/14-j-qa1Ya8Tc3v4dZjVmMWkEBADn9nbKfW3R-_Dvq9M/od6/public/values?alt=json",
	youth : "https://spreadsheets.google.com/feeds/list/1zDj3joACh9b0grC3ANWAK9fBdi6_td6rjpWsoE-VIWA/od6/public/values?alt=json",
	community : "https://spreadsheets.google.com/feeds/list/1x_zMdc_XnWuzLuG_DMEuVgLu2mnZNPGwBedZbUoxvNI/od6/public/values?alt=json",
	cultural : "https://spreadsheets.google.com/feeds/list/1KUMHxdayLa6550UkHNTydKMLo6d5kZHwN9uHJn0otTQ/od6/public/values?alt=json",
	global : "https://spreadsheets.google.com/feeds/list/1TR_jwbc73NiWLnmDXxJl8mRttjCaT9ChRLK_meCIRkE/od6/public/values?alt=json",
	signatories : "https://spreadsheets.google.com/feeds/list/1sA8eMhFWpfWLdU1gXgXzvDy9mZPy8T7nMNeYOolIdnU/od6/public/values?alt=json",

	// selectors
	$single: $('#single'),
	$body: $('body'),
	$ghost: $('#ghost'),
	$info: $('.info'),
	$pageTitle: $('header h1'),
	$events: $('.events'),
	$header: $('header'),
	$more: $('.more'),
	$secondary: $('.secondary'),
	$logo: $('h1.logo'),
	$signatories: $('.signatories'),
	$top: $('.top'),
	$homeSignatories: $('#signatories .wrapper'),

	// document
	$window: $(window)
}

honk.closeClick =  function(){
	self = this;
	this.$ghost.on('click', function(){
		self.closeEventOverlay();
	});

	this.$body.on('click', ' .close', function(){
		self.closeEventOverlay();
	});
}

honk.openEventOverlay = function () { 
	this.$body.addClass('noscroll');
	this.$single.addClass('active');
	this.$ghost.addClass('active');
	setTimeout(function(){
		honk.$info.removeClass('hidden');
	}, 100);
}

honk.closeEventOverlay = function () {
	this.$body.removeClass('noscroll');
	this.$single.removeClass('active');
	this.$ghost.removeClass('active');
}

honk.getAllEvents = function (strand) {
	self = this;
	$.getJSON(strand, function(data) {
		for (var i = 0; i < data.feed.entry.length; i++) {

			var title 			= 	data.feed.entry[i]['gsx$title']['$t'],
				irishTitle 		= 	data.feed.entry[i]['gsx$irishtitle']['$t'],
				summary 		= 	data.feed.entry[i]['gsx$summary']['$t'],
				irishSummary 	= 	data.feed.entry[i]['gsx$irishsummary']['$t'],
				text 			= 	data.feed.entry[i]['gsx$fulltext']['$t'],
				irishText 		= 	data.feed.entry[i]['gsx$irishfulltext']['$t'],
				size 			= 	data.feed.entry[i]['gsx$size']['$t'],
				image 			= 	data.feed.entry[i]['gsx$image']['$t'];

			if (!image) {
				self.$events.append( '<div class="event ' + size + '" data-id="' + i + '">' + '<h3>' + title + '<span class="ire">' + irishTitle + '</h3>' +'<p>' + summary + '</p><p class="ire">' + irishSummary + '</p>' + '<span class="grad"></span></div>');
			} else {
				self.$events.append( '<div class="event ' + size + '" data-id="' + i + '">' +  '<span class="img"><img src="' + image + '" /></span>' + '<h3>' + title + '<span class="ire">' + irishTitle + '</h3>' + '<p>' + summary + '</p><p class="ire">' + irishSummary + '</p>' +  '<span class="grad"></span></div>');
			}
		};
	});

	this.getSingleEvent(strand);
	this.closeClick();
}

honk.getSignatories = function (strand) {
	self = this;
	// self.$homeSignatories.append('

	// ')
	$.getJSON(strand, function(data) {
		for (var i = 0; i < data.feed.entry.length; i++) {

			var name 			= 	data.feed.entry[i]['gsx$name']['$t'],
				bio 		= 	data.feed.entry[i]['gsx$bio']['$t'],
				bioIrish 		= 	data.feed.entry[i]['gsx$bioirish']['$t'],
				bornDied 	= 	data.feed.entry[i]['gsx$borndied']['$t'],
				image 			= 	data.feed.entry[i]['gsx$image']['$t'];

			
			self.$homeSignatories.append(
				'<div class="col-6 single-event flush-img signatory">' + 
				'<div class="pull-left img">' + 
					'<h3 class="name">' + name + '</h2>' + 
					'<img src="http://placehold.it/520x300" alt="">' +
					//'<h4>' + bornDied + '</h4>' +
				'</div>' + 
				'<div class="content">' + 
					'<p class="eng">' + bio + '</p>' + 
					'<p class="ire">' + bioIrish + '</p>' + 
				'</div>' +
			'</div>');

		};
	});

	this.getSingleEvent(strand);
	this.closeClick();
}


honk.getSingleEvent = function(strand){
	self = this;
	
	this.$body.on('click', '.event', function(){

		self.eventIndex = $(this).attr('data-id');
	
		self.$info.addClass('hidden');
		
		$.getJSON(strand, function(data) {

			var title 			= 	data.feed.entry[self.eventIndex]['gsx$title']['$t'],
				irishTitle 		= 	data.feed.entry[self.eventIndex]['gsx$irishtitle']['$t'],
				text 			= 	data.feed.entry[self.eventIndex]['gsx$fulltext']['$t'],
				irishText 		= 	data.feed.entry[self.eventIndex]['gsx$irishfulltext']['$t'],
				image 			= 	data.feed.entry[self.eventIndex]['gsx$image']['$t'];

			if (!image) {
				self.$info.empty().append( '<a class="close"></a>' + '<h3>' + title + '<span class="ire">' + irishTitle + '</span></h3>' + '<p>' + text + '</p>' + '<p class="ire">' + irishText + '</p>');
			} else {
				self.$info.empty().append( '<a class="close"></a>' + '<h3>' + title + '<span class="ire">' + irishTitle + '</span></h3>' + '<img src="' + image + '" />' + '<p>' + text + '</p>' + '<p class="ire">' + irishText + '</p>');
			}

			self.openEventOverlay();
			// $('h3').balanceText();
		});

	});
}

honk.hashCheck =function(){

	l(window.location.hash);
	if(window.location.hash == '') {
		this.getAllEvents(honk.historical);
	} else {
		var page = window.location.hash.split('#')[1],
			title = page.capitalize(),
			strand = this[page];

		this.getAllEvents(strand);
		
		this.$pageTitle.empty().append(title);		
	}
}


honk.pageCheck =function(){
	self = this;
	if(window.location.pathname == '/build/' || window.location.pathname == '/ire/' || window.location.pathname == '/') {
		// is homepage so load signatories
		
		this.$body.addClass('home');
		this.$header.addClass('on');

		this.getSignatories(this.signatories)

		self.$window.on('scroll', function(){ 

			var scrollPos = self.$window.scrollTop();
			if (scrollPos >= 150) {

				self.$logo.addClass('on');

			} else {

				self.$logo.removeClass('on');

			}

		});
			
		self.$more.on('click', function(e){
			e.preventDefault();

			if ($(window).width() < 960) {
			   e.preventDefault();
			   // $('nav.strands ul, .prog').toggleClass('show');
			   console.log('clicked');
			}
			else {
				$('html, body').animate({
					scrollTop: $("#programme").offset().top - 90
				}, 600, 'easeInOutCubic');
			}

		});

		self.$signatories.on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $("#signatories").offset().top - 90
			}, 600, 'easeInOutCubic');
		});

		self.$top.on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: 0
			}, 600, 'easeInOutCubic');
		});


	} else {

		// load relevant strand
		var strand = window.location.pathname.split('/')[2];
		var parseStrand = this[strand];
	
		this.getAllEvents(this[strand]);
		this.$body.addClass(strand);
			
		self.$more.on('click', function(e){
			e.preventDefault();
			$('html, body').animate({
				scrollTop: $("#events").offset().top - 60
			}, 600, 'easeInOutCubic');
		});

		if (isMobile()) {		
			var menuHeight = this.$header.outerHeight();
		} else {
			var menuHeight = this.$header.outerHeight() - this.$secondary.outerHeight();
		}

		self.$window.on('scroll', function(e){

			var scrollPos = self.$window.scrollTop();
			if (scrollPos >= menuHeight) {
				//l(e.currentTarget.pageYOffset);
				l(menuHeight);
				honk.$header.addClass('on');

			} else {

				honk.$header.removeClass('on');

			}

		});

	}
}

// Get This Party Started
$(document).ready(function(){
	l('JS LOADED');
	// honk.hashCheck();
	honk.pageCheck();

	FastClick.attach(document.body);

});


// rob shit js here

var menuButton 	= $('.menu'),
	nav			= $('.main'),
	body		= $('body'),
	strandsNav	= $('nav.strands'),
	progBtn		= $('.prog a')
	moreText	= $('.moreText'),
	toggleText	= $('.toggleText');

menuButton.on('click', function(){
	honk.$body.toggleClass('open');
	menuButton.toggleClass('open');

	// nav.addClass('on');
	nav.toggleClass('open');
	
});

toggleText.on('click', function(e){
	e.preventDefault(e);
	
	$(this).siblings('.moreText').slideToggle();

});

progBtn.on('click', function(){
	$('nav.strands ul, .prog').toggleClass('show');
});

setTimeout(function() {
	$('.loading').addClass('hidden');
}, 500);


$('footer .harp').on('click', function(){
	$('html, body').animate({
		scrollTop: 0
	}, 600, 'easeInOutCubic');
});


$(function() {

	console.log(location.pathname.split("/")[1);

  $('nav a[href^="/' + location.pathname.split("/")[1] + '"]').addClass('active');
});