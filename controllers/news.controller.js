// exports.index = function(req, res){
// 	let content = {
// 		news: [
// 		{
// 			id: 1,
// 			url: '//image/img-1.jpg',
// 			title: 'news eiei1'
// 		},
// 		{
// 			id: 2,
// 			url: '//image/img-1.jpg',
// 			title: 'news eiei2'			
// 		}
// 		]
// 	}

// 	res.json(content)
// }

exports.index = function(req, res){
	res.render('news.twig')
}