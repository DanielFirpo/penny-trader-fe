import React, {useState, useEffect} from 'react';
import { setToast } from "../../../actions/actions"
import { connect } from "react-redux";
import axios from "axios";

function AddProduct(props) {

    const [error, setError] = useState("");
    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [year, setYear] = useState(19);
    const [price, setPrice] = useState();
    const [description, setDescription] = useState("");

    const [imageRef, setImageRef] = useState();

    let imageInput = React.createRef();

    useEffect(() => {
        setImageRef(imageInput.current)
    }, [imageInput.current])

    //req.body.data format:
    // {
    //     name: "name",
    //     image_name: "image name",
    //     year: 1990,
    //     price: 10000,
    //     description: "desc"
    // }

    function clearForm () {
        setName("")
        setYear(19)
        setPrice("")
        setDescription("")
        imageRef.value = "";
    }

    return (
        <div id="login">

            <h1 className="page-title">Add Coin</h1>

            <form id="login-form" name="login" method="POST" enctype="multipart/form-data">
                {/* <input type="file" name="imageName" placeholder="Coin Image" className="add-coin-form-input" id="add-coin-form-image" onChange={(e) => { setImageName(e.target.value) }}></input> */}
                <input type="file" ref={imageInput} name="coinImage" onChange={(e) => { setImage(e.target.files[0]);}}/>
                <input type="text" value={name} name="name" placeholder="Coin Name" className="add-coin-form-input" id="add-coin-form-name" onChange={(e) => { setName(e.target.value) }}></input>
                <input type="number" value={year} defaultValue={19} name="year" placeholder="Year of coin" className="add-coin-form-input" id="add-coin-form-year" onChange={(e) => { setYear(e.target.value) }}></input>
                <input type="number" value={price} name="price" placeholder="Price of coin in dollars (e.g. 3.25)" className="add-coin-form-input" id="add-coin-form-price" onChange={(e) => { setPrice(e.target.value) }}></input>
                <input type="text" value={description} name="description" placeholder="Description of coin" className="add-coin-form-input" id="add-coin-form-description" onChange={(e) => { setDescription(e.target.value) }}></input>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    let formData = new FormData();
                    formData.append('coinImage', image);
                    formData.append('name', name);
                    formData.append('year', year);
                    formData.append('price', price);
                    formData.append('description', description);

                    const config = {
                        headers: {
                            'content-type': 'multipart/form-data',
                            'x-access-token': localStorage.getItem("token")
                        }
                    };

                    axios.post(`${process.env.REACT_APP_API_URL}admin/add`, formData, config)
                    .then(function (response) {
                        // console.log(response);
                        props.setToast("Added product")
                        clearForm();
                        // history.push("/");
                    })
                    .catch(function (error) {
                        // console.log(error.response)
                        setError(error.response.data.message)
                    })
                }} id="login-form-submit-button">Submit</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(AddProduct);