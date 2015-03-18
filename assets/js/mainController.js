(function() {
	var app = angular.module('store',[]);

	app.controller('storeController', function(){
		this.product = gems;	
	});

	var gems = [
	{
		name: 'Sempak Naga',
		price: 12500,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reprehenderit assumenda eaque accusantium, nihil facere iusto aperiam voluptates optio suscipit similique est veritatis sapiente, fugiat quia molestiae maiores? Sit sed, dignissimos maxime, quidem velit ea corporis molestias eius voluptatem a, et odio magni recusandae molestiae porro nulla voluptates vitae ab.',
		purchasable: true,
		sold: false,
		images: [
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-01.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-03.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-04.gif"
      	]
	},
	{
		name: 'Sempak Semut',
		price: 50500,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reprehenderit assumenda eaque accusantium, nihil facere iusto aperiam voluptates optio suscipit similique est veritatis sapiente, fugiat quia molestiae maiores? Sit sed, dignissimos maxime, quidem velit ea corporis molestias eius voluptatem a, et odio magni recusandae molestiae porro nulla voluptates vitae ab.',
		purchasable: true,
		sold: false,
		images: [
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-02.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-05.gif",
        "http://dhg7upb7j7jqa.cloudfront.net/shaping_up_with_angular_js/assets/demo/images/gem-06.gif"
      	]
	}
	];

})();
