<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
	<meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"  >
	<link rel="stylesheet" type="text/css" href="./css/result_boy1.css">
	<script src="./js/main.js"></script>
	<title>【性别测试】</title>
	<script src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    <script src="http://sandbox-api.soundtooth.cn/game/jssdk_demo.php"></script>
	<script  type="text/javascript">
	
        wx.ready(function () {
        	//分享到朋友圈
     	     var shareTimelineData = {
                title: '【性别测试】经鉴定，我的性别指数为：0%纯爷们，100%小婊砸！', // 分享标题
                link: 'http://fenxiao.soundtooth.cn/html5/sextest/share_result_boy0.php', // 分享链接
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
                title: '【性别测试】经鉴定，我的性别指数为：0%纯爷们，100%小婊砸！', // 分享标题
                link: 'http://fenxiao.soundtooth.cn/html5/sextest/share_result_boy0.php', // 分享链接
                imgUrl: 'http://fenxiao.soundtooth.cn/html5/sextest/images/1-content@2x.png', // 分享图标
                desc: '经鉴定，我的性别指数为：0%纯爷们，100%小婊砸！', // 分享描述
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

</script>

</head>
<body>
	<div class="backg">
	<div class="result_title">
	</div>
		<div class="per_pic1">
		</div>
		<div class="content">
			<div class="cont_pic" ></div>
			<div class="cont_text1"> 
				
			</div>
			<div class="res_word1">
		</div>
		</div>
		<div class="button" onclick="show_share();">
			
			<img  id="button_share"src="./images/btn_share_nor.png" width="174.6px" height="44.7px">
			
			<p>分享并领奖</p>
		</div>
	</div>
	<!-- 遮罩层 -->
			
			<div id="bg" ontouchstart="document.getElementById('bg').style.display='none';document.getElementById('share_logo').style.display='none';document.getElementById('share_title').style.display='none';"></div>	
			<div class="share_logo" id="share_logo" ></div>
			<div class="share_title" >
				<p id="share_title" >人生很艰难 为何不分享</p>
			</div>
		
</body>
</html>