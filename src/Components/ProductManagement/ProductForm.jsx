import React from 'react';

const ProductForm = () => {
    const handleProductSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value
        const price = e.target.price.value
        const quantity = e.target.quantity.value
        // console.log("name:",name, 'Price:',price , 'Quantity:',quantity)
        const newProduct = {
            name, price, quantity
        }
        console.log(newProduct)
    }
    return (
        <div>
            <h3>Add a Product.</h3>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" id="1" placeholder='Product name' /><br />
                <input type="text" name="price" id="1" placeholder='Product Price' /><br />
                <input type="text" name="quantity" id="1" placeholder='Product Quantity' /><br />
                <input type="submit" value="Submit" />

            </form>
        </div>
    );
};

export default ProductForm;