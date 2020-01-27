const mongoose = require ( 'mongoose' );
mongoose.connect ( 'mongodb://localhost/pets' , { useNewUrlParser : true } );
mongoose.set('useFindAndModify', false);
// var uniqueValidator = require('mongoose-unique-validator');

var PetSchema = new mongoose.Schema ( {
	petName : { 
		type : String, 
		// unique : [true, "This pet name already exists"],
		// uniqueCaseInsensitive: true,
        required : [ true , 'A name is required' ],
        minlength: [3, "Name must be 3 or more characters long"], 
	},
	petType : {
		type : String,
		required : [ true , 'Pet type is required' ],
		minlength : [3, "Pet type must be 3 or more characters long"],
	},
	desc : {
		type : String,
		required : [ true , 'Pet description is required' ],
		minlength : [3, "Pet description must be 3 or more characters long"],
	},
	skillOne : {
		type : String,
		default : "",
		min : 0,
		max : 3
	},
	skillTwo : {
		type : String,
		default : "",
		min : 0,
		max : 3
	},
	skillThree : {
		type : String,
		default : "",
		min : 0,
		max : 3
	},
	like : {
		type : Number,
		default : 0
	},
	isDisabled : {
		type : Boolean
	}
} , {timestamps : true} 
);

// PetSchema.plugin(uniqueValidator, { message: 'This pet name already exists' });
let Pet = mongoose.model( 'Pet' , PetSchema );
module.exports = Pet;