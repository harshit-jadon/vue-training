import { Vue, Component, Prop } from 'vue-property-decorator'
import { QuestionSet } from '../../../Model/model'
@Component

export class QuestionResponse extends Vue{

    @Prop()
    questionResponseSet !: QuestionSet

    @Prop()
    index !: QuestionSet
    
    @Prop()
    selectAnswers !: QuestionSet

    selectQuestion(questionIndex:number, responseIndex:number){
        this.$emit('currentSelection',{questionIndex,responseIndex})

    }

}