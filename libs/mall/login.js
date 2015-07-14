$(function(){
	var prefix = 'http://testwuhan.ybgplatform.com';
	$("#loginBtn").on('click', function() {
		var username = $("#txtUser").val();
		var password = $("#txtPwd").val();
		
		if (!username || !password) {
			$("#errMsg").css('display', 'block');
			$("#errMsg").html("用户名密码不能为空");
			return;
		}
		$("#errMsg").css('display', 'none');
		console.log('url:'+ prefix);
		
		$.ajax({
	            url: prefix + '/customer/ajaxCustomerLogin/',
	            type: 'POST',
	            dataType: "json",
	            data:{'username':username,'password':password},
	            error: function(xhr) {
	               $("#errMsg").css('display', 'block');
				   $("#errMsg").html('请求失败，请稍后重试.');
	            },
	            success: function(response) {
	            	  // 成功
	            	  if (response.status === 1) {
	            	  	location.href = "/mall/mall-index.html";
	            	  // 失败
	            	  } else {
	            	  	$("#errMsg").css('display', 'block');
					$("#errMsg").html(response.msg);
	            	  }
	            }
	        });
	});
});
