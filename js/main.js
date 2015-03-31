var l = function(m) { console.log(m); };

var proc = function(){
	var p = "IRISHMEN AND IRISHWOMEN: In the name of God and of the dead generations from which she receives her old tradition of nationhood, Ireland, through us, summons her children to her flag and strikes for her freedom. Having organised and trained her manhood through her secret revolutionary organisation, the Irish Republican Brotherhood, and through her open military organisations, the Irish Volunteers and the Irish Citizen Army, having patiently perfected her discipline, having resolutely waited for the right moment to reveal itself, she now seizes that moment, and, supported by her exiled children in America and by gallant allies in Europe, but relying in the first on her own strength, she strikes in full confidence of victory. We declare the right of the people of Ireland to the ownership of Ireland, and to the unfettered control of Irish destinies, to be sovereign and indefeasible. The long usurpation of that right by a foreign people and government has not extinguished the right, nor can it ever be extinguished except by the destruction of the Irish people. In every generation the Irish people have asserted their right to national freedom and sovereignty; six times during the last three hundred years they have asserted it to arms. Standing on that fundamental right and again asserting it in arms in the face of the world, we hereby proclaim the Irish Republic as a Sovereign Independent State, and we pledge our lives and the lives of our comrades-in-arms to the cause of its freedom, of its welfare, and of its exaltation among the nations. The Irish Republic is entitled to, and hereby claims, the allegiance of every Irishman and Irishwoman. The Republic guarantees religious and civil liberty, equal rights and equal opportunities to all its citizens, and declares its resolve to pursue the happiness and prosperity of the whole nation and all of its parts, cherishing all of the children of the nation equally and oblivious of the differences carefully fostered by an alien government, which have divided a minority from the majority in the past. Until our arms have brought the opportune moment for the establishment of a permanent National, representative of the whole people of Ireland and elected by the suffrages of all her men and women, the Provisional Government, hereby constituted, will administer the civil and military affairs of the Republic in trust for the people. We place the cause of the Irish Republic under the protection of the Most High God. Whose blessing we invoke upon our arms, and we pray that no one who serves that cause will dishonour it by cowardice, in humanity, or rapine. In this supreme hour the Irish nation must, by its valour and discipline and by the readiness of its children to sacrifice themselves for the common good, prove itself worthy of the august destiny to which it is called. Signed on Behalf of the Provisional Government. Thomas J. Clarke, Sean Mac Diarmada, Thomas MacDonagh, P. H. Pearse, Eamonn Ceannt, James Connolly, Joseph Plunkett";
	l(p);
}

String.prototype.capitalize = function() {
	return this.charAt(0).toUpperCase() + this.slice(1);
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

console.log('hello');


honk.pageCheck =function(){
	self = this;
	if(window.location.pathname == '/build/' || window.location.pathname == '/ire/' || window.location.pathname == '/') {
		// is homepage so load signatories
		
		this.$body.addClass('home');
		this.$header.addClass('on');

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

		var menuHeight = this.$header.outerHeight() - this.$secondary.outerHeight();
		self.$window.on('scroll', function(){

			var scrollPos = self.$window.scrollTop();
			if (scrollPos >= menuHeight) {

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




