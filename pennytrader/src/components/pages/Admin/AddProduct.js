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
    const [status, setStatus] = useState(1);//0 = unlisted, 1 = listed, 2 = sold

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
        if(isNaN(parseInt(name)) ) {
            setName("")
        }else {
            setName(incrementName(name))
        }
        setYear(19)
        setPrice("")
        setDescription("")
        imageRef.value = "";
    }

    //add 1 to the name but preserve leading 0s: 000321 --> 000322
    function incrementName(str) {
        let zeros = ""
        let done = false
        for (let i = 0; i < str.length; i++) {
            if(str[i] == "0" && !done && i != str.length - 1) {
                zeros+="0"
            }
            else {
                done = true;
            }
        }
        return zeros + (parseInt(str.substring(zeros.length - 1)) + 1).toString();
    }

    return (
        <div id="add-product" className="page-height page-padding">

            <h1 className="page-title">Add Coin</h1>

            <form id="add-product-form" name="login" method="POST" encType="multipart/form-data">
                {/* <input type="file" name="imageName" placeholder="Coin Image" className="add-coin-form-input" id="add-coin-form-image" onChange={(e) => { setImageName(e.target.value) }}></input> */}
                <p className="coin-input-title">Image (optional)</p>
                <input type="file" ref={imageInput} name="file" onChange={(e) => { setImage(e.target.files[0]);}}/>
                <p className="coin-input-title">Name</p>
                <input type="text" value={name} name="name" placeholder="Coin Name" className="add-coin-form-input" id="add-coin-form-name" onChange={(e) => { setName(e.target.value) }}></input>
                <p className="coin-input-title">Year</p>
                <input type="number" value={year} name="year" placeholder="Year of coin" className="add-coin-form-input" id="add-coin-form-year" onChange={(e) => { setYear(e.target.value) }}></input>
                <p className="coin-input-title">Price</p>
                <input type="number" value={price} name="price" placeholder="Price of coin in dollars (e.g. 3.25)" className="add-coin-form-input" id="add-coin-form-price" onChange={(e) => { setPrice(e.target.value) }}></input>
                <p className="coin-input-title">Description (optional)</p>
                <input type="text" value={description} name="description" placeholder="Description of coin" className="add-coin-form-input" id="add-coin-form-description" onChange={(e) => { setDescription(e.target.value) }}></input>
                <label>
                    Listed
                    <input type="checkbox" name="listed" checked={status === 1} onChange={() => {setStatus(1)}}/>
                </label>
                <label>
                    Unlisted
                    <input type="checkbox" name="unlisted" checked={status === 0} onChange={() => {setStatus(0)}}/>
                </label>
                <label>
                    Sold
                    <input type="checkbox" name="sold" checked={status === 2} onChange={() => {setStatus(2)}}/>
                </label>
                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    let formData = new FormData();
                    formData.append('file', image);
                    formData.append('name', name);
                    formData.append('year', year);
                    formData.append('price', price);
                    formData.append('description', description);
                    formData.append('status', status);

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
                }} id="add-coin-form-submit-button">Submit</button>
            </form>
            <p>{error}</p>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(AddProduct);