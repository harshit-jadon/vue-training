import { Vue, Component } from 'vue-property-decorator'
import Header from '../productCatalog/header/header.vue'
import AddProduct from '../productCatalog/addProduct/addProduct.vue'


type Product ={
    serialNo:number,
    name:string,
    price:number,
    description:string,
}
@Component({
    components :{
        'Header' : Header,
        'AddProduct' : AddProduct
    }
})

export class ProductCatalog extends Vue{
    public product:Product = {
        serialNo:0,
        name:'',
        price:0,
        description:''
    }
    
    public productArray:any;

    public productList: Product[] = []

    submitProduct(event:any):void{
        event.preventDefault();
        let serialNo=document.getElementById('serialNo') as any
        let name=document.getElementById('name') as any
        let price = document.getElementById('price') as any
        let description = document.getElementById('description') as any

        this.product.serialNo = serialNo.value,
        this.product.name = name.value,
        this.product.price = price.value,
        this.product.description = description.value,
        
        this.productList.push({...this.product})

        localStorage.setItem('productList',JSON.stringify(this.productList));
        this.product = {
            serialNo:0,
            name:'',
            price:0,
            description:''
        }
        // this.goToView()
    }

    // mounted(){
    //     if(localStorage.getItem('productList')!=null){
    //         this.productList=JSON.parse(JSON.stringify(localStorage.getItem('productList')))
    //     }
    // }
    goToAdd(){
        this.$router.push('/addProduct')
    }
    goToView(){
        this.$router.push('/viewProducts')
    }
    goToAddproducts(){
        this.goToAdd()
    }
    goToViews(){
        this.goToView()
    }
    submitProducts(event:any){
        this.submitProduct(event)
        
    }

}