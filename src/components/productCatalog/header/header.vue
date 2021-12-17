<template>
    <div class='header'>
        <h1>PRODUCT CATALOGUE</h1>
        <div>
            <button class='addButton' type='button' @click="goToAdd()">ADD PRODUCT</button>
            <button class='viewButton' type='button' @click="goToView()">View Products</button>
        </div> 
    </div>
        
</template>

<script>
import { Header } from './header'
export default Header;
</script>
<style lang='less' src='./header.less'></style>
