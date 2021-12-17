import { Vue, Component, Prop } from 'vue-property-decorator'
import { QuestionSet } from '../../../Model/model'

@Component

export class QuestionFooter extends Vue{

    @Prop()
    questionData !: QuestionSet[]

    @Prop()
    index !: number

    previousQuestion(index:number):void{
        this.$emit('previousIndex',index)
    }

    nextQuestion(index:number):void{
        this.$emit('nextIndex',index)

    }


}