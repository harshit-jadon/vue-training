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
                <h1>Add Product</h1>
                <div class="info">
                    <div class='containerDiv'>
                        <label for='pid'>Product ID</label>
                        <input type='number' id='serialNo' placeholder='enter product Id...' required>
                    </div>
                    <div class='containerDiv'>
                        <label for='pname'>Product Name</label>
                        <input type='text' id='name' placeholder='enter product name...' required>
                    </div>
                    <div class='containerDiv'>
                        <label for='pprice'>Product Price</label>
                        <input type='number' id='price' placeholder='enter product price...' required>
                    </div>  
                    <div class='containerDiv'>
                        <label for='pdescription'>Product Description</label>
                        <textarea id='description' placeholder='enter product description...' required></textarea>
                    </div>
                    <div class='containerDiv'>  
                    <button type="submit" @click='submitProduct($event)'>SUBMIT</button>
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