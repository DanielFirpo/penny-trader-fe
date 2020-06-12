import React, {useEffect, useState} from 'react';
import {axiosWithAuth} from "../../../auth/AxiosWithAuth"
import {connect} from "react-redux"
import {setToast} from "../../../actions/actions"

function Homepage(props) {

    const [pageNumber, setPageNumber] = useState(0);
    const [products, setProducts] = useState([]);

    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        if (searchTerm === "") {
            fetchProducts();
        } else {
            fetchProductSearch();
        }
    }, [pageNumber])

    useEffect(() => {
        if (searchTerm === "") {
            fetchProducts();
        } else {
            fetchProductSearch();
        }
    }, [searchTerm])

    function fetchProducts() {
        axiosWithAuth()
            .get("/products/products?pageNumber=" + pageNumber)
            .then(function (response) {
                console.log(response)
                setProducts(response.data.data)
            })
            .catch(function (error) {
                console.log("Error fetching products", error.response)
            })
    }

    function fetchProductSearch() {
        axiosWithAuth()
            .get("/products/search?pageNumber=" + pageNumber + "&searchTerm=" + searchTerm)
            .then(function (response) {
                console.log(response)
                setProducts(response.data.data)
            })
            .catch(function (error) {
                console.log("Error fetching products", error.response)
            })
    }

    return (
        <div id="products">
            <h1 className="page-title">For Sale</h1>
            <form id="products-search">
                <input type="text" name="search" placeholder="Search..." value={searchTerm} onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}></input>

                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    setPageNumber(0);
                    fetchProductSearch();
                }}>Search</button>
            </form>
            <div id="product-list">
                {
                    products.map((item) => {
                        console.log("item: " + item);
                        return (
                            <div id="product-container">
                                <img id="product-image" src={process.env.REACT_APP_API_URL + "images/products/" + item.image_name}></img>
                                <div id="product-info-list">
                                    <p className="product-info">Name: {item.name}</p>
                                    <p className="product-info">Year: {item.year}</p>
                                    <p className="product-info">Price: ${item.price/100}</p>
                                    <p className="product-info">Description: {item.description}</p>
                                    <div className="add-to-cart-button button" onClick={() => {
                                        let cartArray = JSON.parse(localStorage.getItem("cart"));
                                        if(!cartArray) {
                                            cartArray = [];
                                        }
                                        cartArray.push(item.id)
                                        localStorage.setItem("cart", JSON.stringify(cartArray))
                                        props.setToast("Item Added to Cart")
                                    }}>Add to Cart</div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div id="page-controls">
                <div className="page-control" id="previous-page" onClick={() => { pageNumber == 0 ? setPageNumber(0) : setPageNumber(pageNumber - 1) }}>Prev</div>
                <div id="page-number">{pageNumber + 1}</div>
                <div className="page-control" id="next-page" onClick={() => { setPageNumber(pageNumber + 1) }}>Next</div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(Homepage);