var mongoose = require('mongoose');
var Monkey = mongoose.model('Monkey')

module.exports = (app) => {
	// Index route displaying all monkeys  
	app.get('/', (req, res) => {
		Monkey.find({}, (err, monkeys) => {
			if(err){
				console.log(err);
			}else{
				res.render('index', {monkeys: monkeys})
			}
		});
	});
	// New route displaying form for creating a monkey
	app.get('/monkeys/new', (req, res) => res.render('new'));
	// Show route for idividual monkey
	app.get('/monkeys/:id', (req, res) => {
		Monkey.findOne({_id: req.params.id}, (err, monkey) => {
			if(err){
				console.log(err);
			}else{
				res.render('show', {monkey: monkey});
			}

		});
	});

	// Edit route for showing edit form
	app.get('/monkeys/:id/edit',  (req, res) => {
		Monkey.findOne({_id: req.params.id}, (err, monkey) => {
			if(err){
				console.log(err);
			}else{
				res.render('edit', {monkey: monkey});
			}
		})
	})


	// Post route for creating monkey
	app.post('/monkeys', (req, res) => {
		var monkey = new Monkey(req.body);
		monkey.save((err, monkey) => {
			if(err) {
				console.log(err);
			}else{
				res.redirect('/');
			}
		});
	});
	// Post route for updating the monkey
	app.post('/monkeys/:id', (req, res) => {
		Monkey.update({_id: req.params.id}, req.body, (err, data) => {
			if(err){
				console.log(err);
			}else{
				res.redirect('/monkeys/'+req.params.id);
			}
		});
	});

	//Post route for deleting the monkey 
	app.post('/monkeys/destroy/:id', (req, res) => {
		Monkey.remove({_id: req.params.id}, (err, data) => {
			if(err){
				console.log(err);
			}else{
				console.log(data);
				res.redirect('/')
			}
		});
	});


}












