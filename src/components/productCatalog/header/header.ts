import { Vue, Component } from 'vue-property-decorator'

@Component

export class Header extends Vue{

    goToView():void{
        this.$emit('goToViews')
    }
    goToAdd():void{
        this.$emit('goToAddproducts')
    }
}