$(function(){
	// url 前缀
	var prefix = "http://testwuhan.ybgplatform.com"; 
	
	avalon.ready(function() {
		// 产品模型
		var productModel = avalon.define({
			$id:'productCtrl',
			products:[],
			brands:[],
			delCount:function(product) {
				console.log("删除product");
				if (product.count === 0) return;
				product.count--;
				productModel.$fire("down!modifyCart", product);
				console.log(product.count);
			},
			addCount:function(product) {
				product.count++;
				
				productModel.$fire("down!modifyCart", product);
			}
		});
		
		// 购物车模型
		var cartModel = avalon.define({
			$id:'cartCtrl',
			products:[]
		});
		
		// 监听购物车增改事件
		cartModel.$watch('modifyCart', function(product){
			var products = cartModel.products;
			var _idx = -1;
			var flag = true;  // 是否可以添加
			for (var i = 0; i < products.length; i++) {
				// 如果数量不为0则 且id相同替换
				if (products[i].id == product.id && product.count !== 0) {
					products[i] = product;
					flag = false; 
					
				} else if (products[i].id == product.id && product.count === 0) {
					// 记录下标 删除记录
					_idx = i;
					flag = false;
				}
			}
		
			if (_idx !== -1) cartModel.products.splice(_idx, 1);
		
			if (flag) cartModel.products.push(product);
		})
		
		// 扫描页面
		avalon.scan();
	
		// 请求产品数据
		$.ajax({
			 url: prefix + '/product/ajaxGetProducts/',
	         type: 'POST',
	         dataType: "json",
	         data:{'from':1,name:'水泥'},
	            error: function(xhr) {
	              console.log('请求失败..' + xhr);
	            },
	            success: function(response) {
	            	 	productModel.brands = response.brands;
	            	 	
	            	 	// 给每个产品加入一个count 字段 方便计算
	            	 	for (key in response.products) {
	            	 		var product = response.products[key];
	            	 		product.count = 0;
	            	 		productModel.products.push(product);
	            	 	}
	            	 	
	            }
		});
		
	});
});
