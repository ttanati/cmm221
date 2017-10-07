// exports.index = function(req, res){
// 	let content = {
// 		banner: [
// 		{
// 			id: 1,
// 			url: '//image/img-1.jpg'
// 		},
// 		{
// 			id: 2,
// 			url: '//image/img-1.jpg'
// 		}
// 		]
// 	}

// 	res.json(content)
// }

exports.index = function(req, res){
	let content = {
		highlight: {
			url: '/assets/images/home/banner/highlight.jpg',
			title: 'Hello'
		},
		thumbnail: [
			{
				url: '/assets/images/home/banner/thumbnail-1.jpg',
				title: 'thumbnail1'
			},
			{
				url: '/assets/images/home/banner/thumbnail-2.jpg',
				title: 'thumbnail2'
			},
			{
				url: '/assets/images/home/banner/thumbnail-3.jpg',
				title: 'thumbnail3'
			},
			{
				url: '/assets/images/home/banner/thumbnail-4.jpg',
				title: 'thumbnail4'
			}
		]
	}
	res.render('home.twig', content)
}
