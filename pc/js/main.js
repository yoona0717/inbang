var hospitalUI={
	navigation: function(){
		$("#navi > ul > li").hover(
			function(){
				$("#navi").addClass("active");
				$(this).addClass("active");
			},
			function(){
				$("#navi").removeClass("active");
				$(this).removeClass("active");
			}
		);
		$("#navi > ul > li > a").focusin(function(){
			if($(this).parent().index() == 0){
				$("#navi").addClass("active");
			}
			$(this).parent().addClass("active");
		});
		$("#navi li li:last-child").focusout(function(){
			$(this).parent().parent().removeClass("active");
		});
		$("#navi li:last-child li:last-child").focusout(function(){
			$("#navi").removeClass("active");
		});
	},
	slider: function(){
		$('.owl-carousel').owlCarousel({
			loop:true,
			margin:0, 
			nav:true,
			responsive:{ 
				0:{ 
					items:1 
				}
			}
		})
		   
		$(".owl-carousel").trigger("refresh.owl.carousel");
	}
}