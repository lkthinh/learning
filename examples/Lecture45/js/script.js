// Object creation

// var facebook = {
//   name: "Facebook",
//   ceo: {
//     firstName: "Mark",
//     favColor: "blue"
//   },
//   "stock of company": 110
// };

// var google ={
// 	name: "Google Inc.",
// 	investor: "Alphabet LLC.",
// 	founder: {
// 		firstFounder: "Larry",
// 		secondFounder: "Sergei"
// 	},
// 	motto: "Don't be evil"
// };

// var favRecipe = {
// 	title: "Pho",
// 	servings: 4,
// 	ingredients: ['noodle', 'salt', 'star anise', 'beef']
// };

// document.getElementById('screen').innerHTML = favRecipe.ingredients[1];

// document.write("<ul>")
// for (var i=0; i<favRecipe.ingredients.length; i++) {
// 	document.write("<li>" + favRecipe.ingredients[i] + "</li>");
// };
// document.write("</ul>")

var bookList = [
	{	title: "Lord of the Rings",
		author: "J.R.R Tolkien",
		read: true	},
	{	title: "Tis the season",
		author: "Unknown",
		read: false	},
];


function readYet() {
	if (bookList[i].read) {
		document.getElementById('screen1').innerHTML = "You have already read " + bookList[i].title;
	}
	else {
		document.getElementById('screen2').innerHTML = "You still need to read " + bookList[i].title;
	}
};

for (var i=0; i < bookList.length; i++) {
	readYet();
};


