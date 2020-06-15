import React ,{Component} from 'react';
import {signup} from '../auth';


class Signup extends Component{

 constructor(){
    super()
    this.state = {

       name: "",
       email: "",
       password: "",
       error: "",
       open: false

    }
 }  

  handleChange = name => event => {

     this.setState({error: ""});
     this.setState({[name]: event.target.value});

  }


  clickSubmit = event => {

  	event.preventDefault();
  	const {name,email,password} = this.state;
  	const user={

  		 name,
       email,
       password


  	};
  	//console.log(user);
   
    signup(user)
    .then(data => {
    	if(data.error) this.setState({error: data.error})
    		else this.setState({
    			error: "",
    			name: "",
    			email: "",
    			password: "",
    			open: true
    		});
    })


    };



signupForm = (name,email,password) => (

       		<form>
					<div className="form-group">
					<label className="text-muted">Name</label>
					

					<input  
					onChange={this.handleChange("name")}  
					type="text"
					 className="form-control"
					  value={name}
					  required="" />
					</div>
                    

					<div className="form-group">
                    <label className="text-muted">Email</label>
	                <input 
	                onChange={this.handleChange("email")}  
	                type="email" name="email"  
	                className="form-control" 
	                value={email}
	                required="" />
					</div>

                    
                    <div className="form-group">
                    <label className="text-muted">Password</label>
	                <input onChange={this.handleChange("password")}  
	                type="password"  
	                className="form-control"  
	                 value={password}
	                  required="" />
					</div>
                    
                     <label className="anim">
							<input type="checkbox" className="checkbox" required="" />
							<span>I Agree To The Terms & Conditions</span>
					 </label>

					<div>
					<button onClick={this.clickSubmit} className="btn.btn-raised btn-primary">Submit
                    </button>
                    </div>

				</form>


	);

  render() {
  	const {name,email,password,error,open}=this.state
  return (

         <div className="container">
           <h2 className="mt-5 mb-5"> Signup </h2>

            <div className="alert alert-danger"
               style={{display: error? "":"none"}}>
                 {error}
            </div>


             <div className="alert alert-info"
               style={{display: open? "":"none"}}>
                 New Account is successfully Created.You can SignIn now !
               </div>

                {this.signupForm(name,email,password)}


				</div>
     
  	);
  }
}

export default Signup;




		