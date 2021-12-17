<template>
    <div class="main-block">
            <form>
                <h1>Add Product</h1>
                <div class="info">
                    <div class='containerDiv'>
                        <label for='pid'>Product ID</label>
                        <input type='number' v-model='product.serialNo' id='serialNo' placeholder='enter product Id...' required>
                    </div>
                    <div class='containerDiv'>
                        <label for='pname'>Product Name</label>
                        <input type='text' id='name' v-model='product.name' placeholder='enter product name...' required>
                    </div>
                    <div class='containerDiv'>
                        <label for='pprice'>Product Price</label>
                        <input type='number' id='price' v-model='product.price' placeholder='enter product price...' required>
                    </div>  
                    <div class='containerDiv'>
                        <label for='pdescription'>Product Description</label>
                        <textarea id='description' v-model='product.description' placeholder='enter product description...' required></textarea>
                    </div>
                    <div class='containerDiv'>  
                    <button type="submit" @click='submitProduct($event)'>SUBMIT</button>
                    </div>
                </div>    
            </form>
        </div>
</template>

<script>
import { AddProduct } from './addProduct'
export default AddProduct
</script>
<style lang='less' src='./addProduct.less'></style>