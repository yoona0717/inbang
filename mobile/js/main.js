var m_hospitalUI={
	video: function(){
		var video=document.getElementById("start_video");
		video.muted=true; 
		video.play(); 

		var winw, winh; 
		var videow, videoh;
		
			$(window).resize(function(){ // resize : 방향을 바꿀 때 코드가 나옴
			$("#start_video").removeAttr("style"); 
			winw=$(window).width();
			winh=$(window).height();
			
			if(winw > winh){ // 가로 방향
				videow=winw;
				$("#start_video").css({"width":videow});
				videoh=videoRatio("landscape");
				$("#start_video").css({"height":videoh});
				$("#start_video").css({"margin-left":(-1)*winw/2});
				$("#start_video").css({"margin-top":-5});
				//console.log(winw+" : "+winh+" : "+videow+" : "+videoh);
			}
			else{ // 세로 방향
				videoh=winh;
				$("#start_video").css({"height" : videoh});
				videow=videoRatio("portrait");
				$("#start_video").css({"width":videow});
				$("#start_video").css({"margin-left" : (-1)*((videow/2)+70)});
				//console.log(winw+" : "+winh+" : "+videow+" : "+videoh);
			}
		});
		$(window).trigger("resize");

		function videoRatio(dir){
			// 1280 : 720=videow : videoh
			if(dir == "landscape"){
				videoh=720*videow/1280;
				return videoh;
			}
			else{
				videow=1280*videoh/720;
				return videow;
			}
		}
	},
	navigation: function(){
		$(".tab").click(function(e){
			e.preventDefault();
			$(".menu").addClass("active");
		});
		$(".close").click(function(e){
			e.preventDefault();
			$(".menu").removeClass("active");

			$("#gnb > ul > li").each(function(){
				if($(this).hasClass("active") == true){
					$(this).removeClass("active");
					$(this).find("ul").slideUp(300);
				}
			});
		});
		$("#gnb > ul > li").click(function(e){
			e.preventDefault();

			if($(this).hasClass("active") == false){
				$("#gnb > ul > li").removeClass("active");
				$(this).addClass("active");
				$("#gnb ul ul").slideUp(300);
				$(this).find("ul").slideDown(300);
			}
			else{
				$(this).removeClass("active");
				$(this).find("ul").slideUp(300);
			}
		});
	},
	subjects: function(){
		$("#subjects .title ul li a").click(function(e){
			e.preventDefault();
			if($(this).parent().hasClass("active")==false){
				$("#subjects .title ul li").removeClass("active");
				$(this).parent().addClass("active");
			}

			if($(this).hasClass("medical_subjects")==true){
				$(".medical_cont").show();
				$(".vaccination_cont").hide();
			}else{
				$(".medical_cont").hide();
				$(".vaccination_cont").show();
			}
		});

		$("#subjects .medical_cont ul li a").click(function(e){
			e.preventDefault();
			$("#subjects .medical_cont ul li").removeClass("active");
			$(this).parent().addClass("active");
		});
		$("#subjects .vaccination_cont ul li a").click(function(e){
			e.preventDefault();
			$("#subjects .vaccination_cont ul li").removeClass("active");
			$(this).parent().addClass("active");
		});
	},
	gallery: function(){
		var index, pos;

		var slider = $("#controll_bar");
		slider.on('input', function() {
			index = $(this).val();
			pos=(-1)*index*230;
			$(".photo ul").animate({marginLeft:pos}, 100);
		});
	}
}