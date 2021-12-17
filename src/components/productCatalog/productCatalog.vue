<template>
    <div>
        <Header @goToViews='goToViews' @goToAddproducts='goToAddproducts'></Header>
        <!-- <AddProduct @submitProducts='submitProducts'></AddProduct>   -->
    </div>
</template>

<script>
import { ProductCatalog } from './productCatalog'
export default ProductCatalog;
</script>
<style lang='less' src='./productCatalog.less'></style>