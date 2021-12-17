import { Vue, Component } from 'vue-property-decorator'

type Product ={
    serialNo:number,
    name:string,
    price:number,
    description:string,
}

@Component

export class AddProduct extends Vue{

    public product:Product = {
        serialNo:0,
        name:'',
        price:0,
        description:''
    }

    submitProduct(event:any):void{
        this.$emit('submitProducts',event)
        console.log('this is console',this.product)
    }

}