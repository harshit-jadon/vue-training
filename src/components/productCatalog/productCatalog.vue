<template>
    <div>
        <div class='header'>
            <h1>PRODUCT CATALOGUE</h1>
            <div>
                <button class='addButton' type='button'>ADD PRODUCT</button>
                <button class='viewButton' type='button' > VIEW PRODUCTS </button>
            </div> 
        </div>
        <div class="main-block">
            <form>
                <h1>Product Catalog New User</h1>
                <div class="info">
                    <div class='containerDiv'>
                        <label for='pid'>Product ID</label>
                        <input type='number' placeholder='enter product Id...'>
                    </div>
                    <div class='containerDiv'>
                        <label for='pname'>Product Name</label>
                        <input type='text' placeholder='enter product name...'>
                    </div>
                    <div class='containerDiv'>
                        <label for='pprice'>Product Price</label>
                        <input type='number' placeholder='enter product price...'>
                    </div>  
                    <div class='containerDiv'>
                        <label for='pdescription'>Product Description</label>
                        <textarea placeholder='enter product description...'></textarea>
                    </div>
                    <div class='containerDiv'>  
                    <button type="submit" >Add Product</button>
                    </div>
                </div>    
            </form>
        </div>    
    </div>
</template>

<script>
import { ProductCatalog } from './productCatalog'
export default ProductCatalog;
</script>
<style lang='less' src='./productCatalog.less'></style>