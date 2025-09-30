import React from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {
    return (
        <div>
                <h3>This is product management page.</h3>
                <ProductForm></ProductForm>
                <ProductTable></ProductTable>
        </div>
    );
};

export default ProductManagement;