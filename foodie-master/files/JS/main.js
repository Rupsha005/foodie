

var foodie = angular.module('foodie',['ngRoute']); //setting up abgular app


foodie.config(function ($routeProvider) { //setting route path for site
	$routeProvider
	.when('/',{       //show login.html inside ng-view tag in index.html
		templateUrl: 'pages/login.html',
		controller: 'loginController' //give control to loginController
	})
	.when('/home',{    //show main.html inside ng-view tag in index.html
		templateUrl: 'pages/main.html',
		controller: 'RestrauntController'   //give control to RestrauntController
	})
  .when('/restraunt/:id',{    //:id is used to generate unique adderss for $routeParams
		templateUrl: 'pages/restaurant.html',
		controller: 'showRestraunt'
	})
})


foodie.controller('RestrauntController',function($scope) {  //defining RestrauntController
  var index = 0;
  var show="image1";
  carousel();
  function carousel(){                                 //slider stuff
          $('.slide').removeClass(show);//chaining
          $(".slide").addClass("hidden");
          index++;
          if (index > 2) {
          index = 1;
      }
      show="image"+index;
      console.log(show);
      $('.slide').removeClass("hidden");//chaining
      $(".slide").addClass(show);
      setTimeout(carousel, 10000);
  }

  $scope.restaurants = [{
  	name: 'Farzi Cafe',
  	address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  	location: 'Connaught Place',
  	category: 'Casual Dining, Bar',
  	vote: '4.2',
    id:'1',
  	cuisines: 'Modern Indian',
  	cost: '2200',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
  	name: ' The Garden Restaurant',
  	address: 'M-73, M Block Market, Greater Kailash (GK) 1, New Delhi',
  	location: 'Greater Kailash (GK) 1',
  	category: 'Fast Food, Beverages',
  	vote: '3.8',
    id:'2',
  	cuisines: 'Restaurant',
  	cost: '600',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'data:image/jpeg;base64,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'
  },
  {
  	name: 'Indian Accent',
  	address: 'E-556, Greater Kailash (GK) 2, New Delhi',
  	location: 'Greater Kailash (GK) 2',
  	category: 'BAKERY,DESSERT PARLOR',
  	vote: '4.0',
    id:'3',
  	cuisines: 'Bakery, Desserts',
  	cost: '500',
  	hours: '12 Noon to 1 AM (Mon-Sun)',
  	image: 'data:image/jpeg;base64,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'
  },
	{
  	name: 'Olive Bar and Kitchen Restaurant',
  	address: 'B-202 & 203, Supermart 1, DLF Phase 4, Gurgaon',
  	location: 'Supermart 1, DLF Phase 4',
  	category: 'CASUAL DINING',
  	vote: '4.7',
    id:'4',
  	cuisines: 'Biryani, Hyderabadi',
  	cost: '1000',
  	hours: '12 Noon to 12 Midnight(Mon-Sun)',
  	image: 'data:image/jpeg;base64,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'
  },

]
})





foodie.controller('loginController',function($scope,$location) {     //defining loginController
	$scope.goTohome = function() {
		$location.url('home')
	}
})




foodie.controller('showRestraunt',function($scope,$routeParams,$http) {   //defining showRestraunt controller
  console.log($routeParams.id);
var restraunt=[{
  name: 'Farzi Cafe',
  address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
  location: 'Connaught Place',
  category: 'Casual Dining, Bar',
  vote: '4.2',
  id:'1',
  cuisines: 'Modern Indian',
  cost: '2200',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'C:\Users\hp\Desktop\foodie-master\images\download.jpeg',
  backimage:'https://b.zmtcdn.com/data/res_imagery/18233593_RESTAURANT_00272acd0235af309a0bbe4843e53499.jpg?output-format=webp',
  bestDish: {
	name: 'cheese dip cookie',
	image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
},
},
{
  name: 'The Garden Restaurant',
  address: 'M-73, M Block Market, Greater Kailash (GK) 1, New Delhi',
  location: 'Greater Kailash (GK) 1',
  category: 'Fast Food, Beverages',
  vote: '3.8',
  id:'2',
  cuisines: 'CAFÉ',
  cost: '600',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'https://b.zmtcdn.com/data/pictures/chains/5/1395/b9904d3c19534d029ca3a3f0643b2849_featured_v2.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A',
  backimage:"https://b.zmtcdn.com/data/res_imagery/1395_CHAIN_d65b48669fa4bfcda9bb2a8c49413be2.jpg?output-format=webp",
  bestDish: {
	name: 'Brown Rolls',
	image: 'https://b.zmtcdn.com/data/reviews_photos/5d4/6833bccf5e509ae1bd8b3f1e9c4145d4_1499413777.jpg'
},
},
{
  name: 'Indian Accent',
  address: 'E-556, Greater Kailash (GK) 2, New Delhi',
  location: 'Greater Kailash (GK) 2',
  category: 'BAKERY,DESSERT PARLOR',
  vote: '4.0',
  id:'3',
  cuisines: 'Bakery, Desserts',
  cost: '500',
  hours: '12 Noon to 1 AM (Mon-Sun)',
  image: 'https://www.google.co.in/maps/uv?hl=en&pb=!1s0x390cfd309eebed77:0xfd133b52e7612c26!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://picasaweb.google.com/lh/sredir?uname%3D115076861954284504726%26id%3D6241340969081228706%26target%3DPHOTO!5s+-+Google+Search&imagekey=!1e3!2s-hO5RWhVs9GA/Vp2yixgtzaI/AAAAAAAAJIU/hNptgITzAQ4MRJ1flICrHRCPcYDgRGWmwCJkC',
  backimage:"https://b.zmtcdn.com/data/res_imagery/2649_RESTAURANT_7576f3e8622589e1dd3ef23896c305f3.jpg?output-format=webp",
  bestDish: {
	name: 'chocolate cake',
	image: 'https://b.zmtcdn.com/data/pictures/chains/9/2649/e202ef113e6cad530754f2f42737e86b.jpg'
},
},
{
	name: 'Olive Bar and Kitchen Restaurant',
	address: 'B-202 & 203, Supermart 1, DLF Phase 4, Gurgaon',
	location: 'Supermart 1, DLF Phase 4',
	category: 'CASUAL DINING',
	vote: '4.7',
	id:'4',
	cuisines: 'Biryani, Hyderabadi',
	cost: '1000',
	hours: '12 Noon to 12 Midnight(Mon-Sun)',
	image: 'https://www.google.co.in/maps/uv?hl=en&pb=!1s0x390ce2f15b20d0fd:0xaaa8607911b1bdf!2m22!2m2!1i80!2i80!3m1!2i20!16m16!1b1!2m2!1m1!1e1!2m2!1m1!1e3!2m2!1m1!1e5!2m2!1m1!1e4!2m2!1m1!1e6!3m1!7e115!4shttps://picasaweb.google.com/lh/sredir?uname%3D115994511729479075009%26id%3D6109607166946262034%26target%3DPHOTO!5s+-+Google+Search&imagekey=!1e3!2s-whtKYjgschw/VMmvWScDPBI/AAAAAAAAAAU/FvLrl3yFiAIskTcypDCJ7KslWyPR_76NgCLIB',
	backimage: 'https://b.zmtcdn.com/data/res_imagery/301718_CHAIN_dbe8d86f4def6c08427ef1c210444566.jpg',
  bestDish: {
	name: 'Chicken 65',
	image: 'https://b.zmtcdn.com/data/pictures/chains/8/301718/7ced5cf0e3dd161e752187a0c4c70b10.jpg'
},
},
];
$scope.restraunt=restraunt[$routeParams.id-1];  //taking out value of :id from link will be used to show unique restraunt in restraunt.html page

$scope.getIngredients = function(url) {
	console.log(url)
	var data = '{"inputs":[{"data":{"image":{"url":"' + url + '"}}}]}'
	$http({
		'method': 'POST',
		'url': 'https://api.clarifai.com/v2/models/bd367be194cf45149e75f01d59f77ba7/outputs',
		'headers': {
			'Authorization': 'Key b7f174c5e0e042979e576bd2ce176d59',
			'Content-Type': 'application/json'
		},
		'data': data
	}).then(function (response) {
			var ingredients = response.data.outputs[0].data.concepts;
			$scope.ingredientss=[];
				for (var i =0;i < ingredients.length;i++) {
	$scope.ingredientss.push(ingredients[i].name);
	}


				console.log($scope.ingredientss);
				var Dia_dis = document.querySelector('#displays');
				Dia_dis.show();
				$('.mains').addClass('blur');

var harmful_ingredients=['Chocolate' ,'cake', 'cupcake', 'ice cream' ,'candy', 'sugar']; //an array of harmful_ingredients
var inform=0;
for(var j=0;j<$scope.ingredientss.length;j++){    //checking for harmful_ingredients in $scope.ingredientss
	for(var k=0;k<harmful_ingredients.length;k++){
	if(harmful_ingredients[k]==$scope.ingredientss[j]){
		inform=1;
		break;
	}
}
}
if(inform==1){
	$scope.values="Item is not safe for diabetic person.";
}
else{
	$scope.values="Item safe for diabetic person.";
}

$scope.closedig = function(url){
	Dia_dis.close();
	$('.mains').removeClass('blur');
}


        }, function (xhr) {
        	console.log(xhr);
        })
	}


})
