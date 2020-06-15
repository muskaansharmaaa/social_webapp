exports.createPostValidator = (req,res,next) => {

  
  //title

  req.check("title","Write a title").notEmpty();
  req.check("title","Tittle must be b/e 4 to 150 chars").isLength({

  min:4,
   max:150

});

  // check for body
  req.check("body","Write a body").notEmpty();
  req.check("body","body must be b/e 4 to 2000 chars").isLength({

  min:4,
  max:2000

});

//check errors
const errors = req.validationErrors()

// if first error shows up
if(errors){

	const firstError = errors.map((error) => error.msg)[0];

	return res.status(400).json({error: firstError});
}
  
// proceed to next middle ware
 next();

};


exports.userSignupValidator = (req,res,next) => {


  //name not null and between 4-15 chars

  req.check("name","Name is required").notEmpty();


  //email is not null , valid and normalized
req.check("email", "Email is required and  b/w 3 to 32 chars").notEmpty();
req.check("email")
.matches(/.+\@.+\..+/)
.withMessage("Email must contain @")
.isLength({
  min: 4,
  max: 2000
})

  // check for password 
  req.check("password","Password is required").notEmpty();
  req.check('password')
   .isLength({min: 6})
   .withMessage("Password must contain atleast 6 characters")
   .matches(/\d/)
   .withMessage("Password must contain a number")


   //check for errors
const errors = req.validationErrors()

// if first error shows up
if(errors){

  const firstError = errors.map((error) => error.msg)[0];

  return res.status(400).json({error: firstError});
}
// proceed to next middle ware
 next();


}
