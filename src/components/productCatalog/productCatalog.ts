import { Vue, Component } from 'vue-property-decorator'

type Product ={
    serialNo:number,
    name:string,
    price:number,
    description:string,
}
@Component

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
        console.log(this.product)
        
        this.productList.push({...this.product})
        console.log(this.productList)

        localStorage.setItem('productList',JSON.stringify(this.productList));
        console.log(this.productList) 
        console.log(this.productArray)
    }

    mounted(){
        if(localStorage.getItem('productList')!=null){
            this.productList=JSON.parse(JSON.stringify(localStorage.getItem('productList')))
        }
    }

    goToView(){
        this.$router.push('/viewProducts')
    }

}