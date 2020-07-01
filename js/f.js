 function checkMobile(url){
		 var isMobile = function () {var flag = navigator.userAgent.match( 
			        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
			    );
			    return flag;
	 	}
	 
		 if (isMobile()) {
			    location.replace(url)
		 } else {
			 var ss = '<h3>手机打开, 或右击新标签打开你懂的</h3><div class="pure-g"><iframe scrolling="no" marginheight=0 marginwidth=0  frameborder="0" width="40%" height="40" src="'+url+'"></iframe></div>';
			 eval("document.write('" + ss + "');");
		 }

	}

