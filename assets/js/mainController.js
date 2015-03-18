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
		sold: false
	},
	{
		name: 'Sempak Semut',
		price: 50500,
		description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti reprehenderit assumenda eaque accusantium, nihil facere iusto aperiam voluptates optio suscipit similique est veritatis sapiente, fugiat quia molestiae maiores? Sit sed, dignissimos maxime, quidem velit ea corporis molestias eius voluptatem a, et odio magni recusandae molestiae porro nulla voluptates vitae ab.',
		purchasable: true,
		sold: false
	}
	];

})();
