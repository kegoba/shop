import React, {Component} from "react";
import axios from "axios"

class Addproduct extends Component{
    constructor(){
        super()
        this.onchangeImage = this.onchangeImage.bind(this)
        this.onchangeCatergory = this.onchangeCatergory.bind(this)
        this.onchangePrice = this.onchangePrice.bind(this)
        this.onchangeDescription = this.onchangeDescription.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
        this.state={
            image : '',
            catergory : "",
            price: "",
            description:""


        }
    }
    onchangeImage = (e) => {
        var file = e.target.files[0]

       // console.log("state", file )
       // var image = Object.assign(file, this.state.image)
        this.setState({
            image:  file

        })
        
      
    }
    onchangeCatergory = (e) => {
        
        this.setState({
            catergory: e.target.value.toUpperCase()
        })
    }
    onchangePrice = (e) => {
        this.setState({
            price: e.target.value.toUpperCase()
        })
    }
    onchangeDescription = (e) => {
        this.setState({
            description: e.target.value.toUpperCase()
        })
    }
    
    handleSubmit = (e) =>{
        e.preventDefault()
        var {price, description,catergory, image} = this.state
        if( (image.length!=="") && (price.length > 2) && (description.length > 2) && (catergory.length > 2)) {
            let form_data = new FormData();
            form_data.append('image', image, image.name);
            form_data.append('product_price', price);
            form_data.append('product_desc', description);
            form_data.append('product_category', catergory);
            let url = "http://localhost:8000/saveproduct/"
            let header = {
                headers: {'content-type': 'multipart/form_data'}
            }
            axios.post(url, form_data , header
                )
            .then((resp)=>{
                console.log(resp)
            })
            console.log(form_data)
            this.setState({
                price :"",
                image: "",
                description: "",
                catergory : ""

            })
        } else{
            alert("field must not be empty")
           // console.log(formdata)
        }



    }

    render(){
        return(
            <div className="container">
                <form onSubmit={this.handleSubmit} >
                        
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="text" placeholder="Produt Catergory" className="text-center" onChange={this.onchangeCatergory} value={this.state.catergory} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="text" placeholder="Produt price" className="text-center" onChange={this.onchangePrice} value={this.state.price} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <input type="text" placeholder="Produt description" className="text-center" onChange={this.onchangeDescription} value={this.state.description} />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col" >
                                <input type="file" placeholder="Image" accept="image/*" className="text-center" onChange={this.onchangeImage}  />
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col" >
                                <button  className="btn btn-success"  > Submit </button>
                            </div>
                        </div>
                    </div>
                    
                </form>

            </div>
        )
    }

}


export default Addproduct;