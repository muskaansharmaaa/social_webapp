import React ,{Component} from 'react';
import {isAuthenticated} from '../auth';
import {Redirect} from 'react-router-dom';


class Profile extends Component{


 constructor(){
    super()
    this.state = {

        user: "",
        created: "",
        redirectToSignin: false

    }

}

read = (userId,token) => {

return fetch(`${process.env.REACT_APP_API_URL}/user/${userId}`, {

     	method: "GET",
     	headers: {

     		 Accept: "application/json",
     		 "Content-Type": "application/json",
     		 Authorization: `Bearer ${token}`

     	}
     })
     .then (response => {
         
          return response.json();

     })
     .catch(err => console.log(err));
};



 init = userId => {
     
     const token=isAuthenticated().token
     this.read(userId,token).then(data => {
       
         if(data.error){

         	this.setState({redirectToSignin: true});
         }
         else
         {
         	this.setState({user: data});
         }

     });

 };


componentDidMount(){


     const userId=this.props.match.params.userId;
     this.init(userId);


};


   render(){

    const redirectToSignin = this.state.redirectToSignin
    if(redirectToSignin) return <Redirect to="/signin" />;





   return (

   	 <div className="container">
     <h2 className="mt-5 mb-5"> Profile </h2>
     <p>Hello {isAuthenticated().user.name} </p>
     <p>Email: {isAuthenticated().user.email} </p>
 

   	</div>


   	);

   }

}

export default Profile;
