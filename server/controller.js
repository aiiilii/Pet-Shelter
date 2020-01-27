var Pet = require('./models');

module.exports = {
    
    index : (req, res) => {
        Pet.find ().sort({petType: 1})
        .then ( data => {
            console.log('displaying all pets:', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    readOne : (req, res) => {
        Pet.findById (req.params.id)
        .then ( data => {
            console.log('displaying one pet', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    create : (req, res) => {
        Pet.create (req.body)
        .then ( data => {
            console.log('successfully added', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    update : (req, res) => {
        Pet.findByIdAndUpdate (req.params.id, req.body, {runValidators: true, new: true})
        .then ( data => {
            console.log('successfully updated', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    delete : (req, res) => {
        Pet.findByIdAndDelete (req.params.id)
        .then ( data => {
            console.log('successfully deleted', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },

    likePet : (req, res) => {
        var num = req.params.num;
        Pet.findOneAndUpdate ({"_id": req.params.id}, {$set: {like: num}})
        .then ( data => {
            console.log('successfully liked ', data);
            res.json({message: 'success', data: data});
        })
        .catch ( err => {
            console.log('error', err);
            res.json({message: 'error', error: err});
        })
    },


    // addQuote: (req, res) => {
	// 	console.log(req.body)
	// 	Author.findByIdAndUpdate(req.params.authorid, {
    //         $push: {quotes: {content: req.body.content}}
    //     }, {runValidators: true, new: true})
	// 	.then ( data => {
    //         console.log('successfully added quote', data);
    //         res.json({message: 'success', data: data});
    //     })
    //     .catch( err => {
    //         console.log('error', err);
    //         res.json({message: 'error', error: err})
    //     })
	// },

	// updateQuote: (req, res) => {
	// 	if (req.body.value > 0) {
	// 		Author.findOneAndUpdate( {'quotes._id': req.params.quoteid}, {$inc: {'quotes.$.score': 1}})
	// 		.then ( data => {
    //             console.log('successfully upvoted', data);
    //             res.json({message: 'success', data: data});
    //         })
	// 		.catch( err => {
    //             console.log('error', err);
    //             res.json({message: 'error', error: err})
    //         })
	// 	} else {
	// 		Author.findOneAndUpdate( {'quotes._id': req.params.quoteid}, {$inc: {'quotes.$.score': -1}})
	// 		.then ( data => {
    //             console.log('successfully downvoted', data);
    //             res.json({message: 'success', data: data});
    //         })
	// 		.catch( err => {
    //             console.log('error', err);
    //             res.json({message: 'error', error: err})
    //         })
	// 	}
	// },

	// deleteQuote: (req, res) => {
    //     console.log(req.params.quoteid);
	// 	Author.findOneAndUpdate( {'quotes._id': req.params.quoteid}, {$pull: {quotes: {'_id': req.params.quoteid}}})
	// 	.then ( data => {
    //         console.log('successfully deleted', data);
    //         res.json({message: 'success', data: data});
    //     })
	// 	.catch( err => {
    //         console.log('error', err);
    //         res.json({message: 'error', error: err})
    //     })
	// }
}