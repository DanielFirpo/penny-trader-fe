import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from "../../../auth/AxiosWithAuth"
import { Link } from "react-router-dom"
import { connect } from "react-redux"
import { setToast } from "../../../actions/actions"

function Products(props) {

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
            .get("/admin/products?pageNumber=" + pageNumber)
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
            .get("/admin/search?pageNumber=" + pageNumber + "&searchTerm=" + searchTerm)
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
            <h1 className="page-title">Products</h1>
            <form>
                <input type="text" name="search" placeholder="Search..." value={searchTerm} onChange={(e) => {
                    setSearchTerm(e.target.value)
                }}></input>

                <button type="submit" onClick={(e) => {
                    e.preventDefault();
                    setPageNumber(0);
                    fetchProductSearch();
                }}>Search</button>
            </form>
            {
                products.map((item) => {
                    console.log("item: " + item);
                    return (
                        <div>
                            <img src={process.env.REACT_APP_API_URL + "images/products/" + item.image_name}></img>
                            <p>{item.name}</p>
                            <p>{item.year}</p>
                            <p>{item.price}</p>
                            <p>{item.description}</p>
                            <Link to={{ pathname: '/editproduct', search: `?id=${item.id}&name=${item.name}&year=${item.year}&price=${item.price}&description=${item.description}` }}>
                                <div id="edit-product">Edit</div>
                            </Link>
                            <div id="edit-product" onClick={() => {
                                axiosWithAuth()
                                    .delete(`${process.env.REACT_APP_API_URL}admin/delete?id=${item.id}`)
                                    .then(function (response) {
                                        props.setToast("Successfully Deleted Product")
                                        setSearchTerm("8127018237102391823128371293712893712983712837123871923871238719387123712837192837198237918237918273198237918731928731283718237192837");
                                        setSearchTerm(searchTerm);//fetch products again now that we deleted that one
                                    })
                                    .catch(function (error) {
                                        console.log(error.response)
                                    })
                            }}>Delete</div>
                        </div>
                    )
                })
            }
            <div id="page-controls">
                <div id="previous-page" onClick={() => { pageNumber == 0 ? setPageNumber(0) : setPageNumber(pageNumber - 1) }}>Prev</div>
                <div id="page-number">{pageNumber + 1}</div>
                <div id="next-page" onClick={() => { setPageNumber(pageNumber + 1) }}>Next</div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
});

export default connect(mapStateToProps, { setToast })(Products);