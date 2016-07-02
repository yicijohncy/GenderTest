$(document).ready(function () {
	var gender;
	var i=0;
	var dataArr=[];
	var count=0;
	var result_gril= [
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_10.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt0.png", 0,0],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_9.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt1.png", 10,1],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_8.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt2.png", 20,2],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_7.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt3.png", 30,3],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_6.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt4.png", 40,4],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_5.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt5.png", 50,5],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_4.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt6.png", 60,6],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_3.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt7.png", 70,7],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_2.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt8.png", 80,8],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_1.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt9.png", 90,9],
        ["http://7xp6o6.com1.z0.glb.clouddn.com/gender_test3_content_txt_0.png", "http://7xp6o6.com1.z0.glb.clouddn.com/gender_testgirl_txt10.png", 100,10]
    ]; 
    var result_boy=[
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt0.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt1.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt2.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt3.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt4.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt5.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt6.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt7.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt8.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt9.png",
    	"http://7xp6o6.com1.z0.glb.clouddn.com/gender_testboy_txt10.png"
    ];
    // 女生入口题目
    $('.index_cover').on('tap', '.index_to_girl', function() {
    	gender=0;
    	questionJson();
    	$('.index_cover').remove();
    	$('.title_bg').addClass('gril_bg');
    });
    // 男生入口题目
     $('.index_cover').on('tap', '.index_to_boy', function() {
     	gender=1;
     	questionJson();
    	$('.index_cover').remove();
    	$('.title_bg').addClass('boy_bg');
    });
    //button点击事件
	$('.toCheck').on('tap',"p",function (e) {
		if (i<9) {
			i++;
			var currentCount=$(this).attr("data-count");
			count=count+parseInt(currentCount, 10);
			loadQuestion(i);
			if (gender==0) {
				$(this).toggleClass('button_gril_normal').toggleClass('button_girl_tap');
			}
			else{
				$(this).toggleClass('button_boy_normal').toggleClass('button_boy_tap');
			}
		}
		else {
			console.log(count);
			$('.multiple_choices').remove();
			$('.result_bg').css('display', 'block');
			if(gender==0){
				if(count<=30){
					$('.reuslt_character').addClass('per_girl3');
				}
				else if(count>30&&count<=70){
					$('.reuslt_character').addClass('per_girl2');	
				}
				else if(count>70&&count<=100){
					$('.reuslt_character').addClass('per_girl1');
				}
				for (var j = 0; j < result_gril.length; j++) {
					if (count>result_gril[j][2]&&count<=result_gril[j+1][2]) {
						$('.result_dialog').append('<img id="dialog_text" src="'+result_gril[j][0]+'" width="100%" height="100%">')
						$('.result_word').append('<img src="'+result_gril[j][1]+'" width="100%" height="100%">')
						   wx.ready(function () {
						   	//分享到朋友圈
							     var shareTimelineData = {
						           title: '【性别测试】经鉴定，我的性别指数为：'+result_gril[j][2]+'%纯爷们，'+100-parseInt(result_gril[j][2])+'%小婊砸！', // 分享标题
						           link: 'http://fenxiao.soundtooth.cn/html5/gender_test/result/share_result_girl'+result_gril[j][3]+'.php', // 分享链接
						           imgUrl:'http://fenxiao.soundtooth.cn/html5/sextest/images/1-content@2x.png', // 分享图标
						           desc: '', // 分享描述
						           success: function () { 
						               window.location.href="welfare.php";// 用户确认分享后执行的回调函数
						           },
						           cancel: function () { 
						               // 用户取消分享后执行的回调函数
						           }
						       };
						       //分享给朋友
						       var shareData = {
						           title: '【性别测试】经鉴定，我的性别指数为：'+result_gril[j][2]+'%纯爷们，'+100-parseInt(result_gril[j][2])+'%小婊砸！', // 分享标题					       		
						           link: 'http://fenxiao.soundtooth.cn/html5/gender_test/result/share_result_girl'+result_gril[j][3]+'.php', // 分享链接
						           imgUrl: 'http://fenxiao.soundtooth.cn/html5/sextest/images/1-content@2x.png', // 分享图标
						           desc: '经鉴定，我的性别指数为：'+result_gril[j][2]+'%纯爷们，'+100-parseInt(result_gril[j][2])+'小婊砸！', // 分享描述
						           success: function () {
						           	window.location.href="welfare.php";
						           },
						           cancel: function () {}
						       };
						       wx.onMenuShareTimeline(shareTimelineData);
						       wx.onMenuShareAppMessage(shareData);
						       wx.onMenuShareQQ(shareData);
						       wx.onMenuShareWeibo(shareData);
						       wx.onMenuShareQZone(shareData);
						   });
						break;
					}
					else{
						continue;
					}
				};
			}
			else if(gender==1){
				if(count<=30){
					$('.reuslt_character').addClass('per_boy2');
				}
				else if(count>30&&count<=70){
					$('.reuslt_character').addClass('per_boy3');	
				}
				else if(count>70&&count<=100){
					$('.reuslt_character').addClass('per_boy1');
				}
				for (var j = 0; j < result_gril.length; j++) {
					if (count>result_gril[j][2]&&count<=result_gril[j+1][2]) {
						$('.result_dialog').append('<img id="dialog_text" src="'+result_gril[10-j+1][0]+'" width="100%" height="100%">')
						$('.result_word').append('<img src="'+result_boy[j]+'" width="100%" height="100%">')
						   wx.ready(function () {
						   	//分享到朋友圈
							     var shareTimelineData = {
						           title: '【性别测试】经鉴定，我的性别指数为：'+result_gril[j][2]+'%纯爷们，'+100-parseInt(result_gril[j][2])+'%小婊砸！', // 分享标题
						           link: 'http://fenxiao.soundtooth.cn/html5/gender_test/result/share_result_boy'+result_gril[j][3]+'.php', // 分享链接
						           imgUrl:'http://fenxiao.soundtooth.cn/html5/sextest/images/1-content@2x.png', // 分享图标
						           desc: '', // 分享描述
						           success: function () { 
						               window.location.href="./result/welfare.php";// 用户确认分享后执行的回调函数
						           },
						           cancel: function () { 
						               // 用户取消分享后执行的回调函数
						           }
						       };
						       //分享给朋友
						       var shareData = {
						           title: '【性别测试】经鉴定，我的性别指数为：'+result_gril[j][2]+'%纯爷们，'+100-parseInt(result_gril[j][2])+'%小婊砸！', // 分享标题					       		
						           link: 'http://fenxiao.soundtooth.cn/html5/gender_test/result/share_result_boy'+result_gril[j][3]+'.php', // 分享链接
						           imgUrl: 'http://fenxiao.soundtooth.cn/html5/sextest/images/1-content@2x.png', // 分享图标
						           desc: '经鉴定，我的性别指数为：'+result_gril[j][2]+'%纯爷们，'+100-parseInt(result_gril[j][2])+'小婊砸！', // 分享描述
						           success: function () {
						           	window.location.href="./result/welfare.php";
						           },
						           cancel: function () {}
						       };
						       wx.onMenuShareTimeline(shareTimelineData);
						       wx.onMenuShareAppMessage(shareData);
						       wx.onMenuShareQQ(shareData);
						       wx.onMenuShareWeibo(shareData);
						       wx.onMenuShareQZone(shareData);
						   });
						break;
					}
					else{
						continue;
					}
				};
			}

		}
 	}); 
	// 点击分享
	$('.result_bg').on('tap', '.button_share', function() {
		event.preventDefault();
		show_share();
		/* Act on the event */
	});
	function show_share(){
		document.getElementById("shadow_bg").style.display="block";
		document.getElementById("share_logo").style.display="block";
		document.getElementById('share_title').style.display="block";
	}
    function questionJson(){
		var len;
		$.ajax({
			url: './questions.json',
			type: 'GET',
			dataType: 'json',
			success: function(data) {
				dataArr.push(data);
				console.log(dataArr);
				loadQuestion(gender);
		  },
		  error: function(xhr, textStatus, errorThrown) {
		    console.log("error");
		  }
		});		
    } 
	function loadQuestion(i){
	 	$('.sequence').html("");
	 	$('.question').html("");
	 	$('.toCheck').html("");
	 	$('.sequence').html("("+dataArr[0][i].id+"/10)")
	 	$('.question').html(dataArr[0][i].question);
	 	for (var j = 0; j <3; j++) {
	 		$('.toCheck').append('<div class="ans_btn" >'+
	 		'<p id="ans_btn" data-count="'+dataArr[0][i].answer[j].score+'">'+dataArr[0][i].answer[j].choice+'</p>'+
	 		'</div>');
	 		buttonStyle(gender);
	 	};
	 }
	function buttonStyle(gender){
		if (gender===0) {
			$('.ans_btn').addClass('button_gril_normal');//button
		}
		else{
			$('.ans_btn').addClass('button_boy_normal');//button	
		}
	}
})
