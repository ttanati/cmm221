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
	res.render('home.twig')
}
