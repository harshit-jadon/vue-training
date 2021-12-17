import { Vue, Component, Watch } from 'vue-property-decorator'
import { MCQData } from './mcqData'
import { QuestionSet } from '../../Model/model'
import QuestionResponse  from './questionResponse/questionResponse.vue';
import QuestionFooter from './qustionFooter/questionFooter.vue';

interface selectedResponse {
    questionIndex:number, 
    responseIndex : number
}
@Component({
    components :{
    'QuestionResponse' : QuestionResponse,
    'QuestionFooter' : QuestionFooter
    }
})

export class MCQComponent extends Vue{

    @Watch('title')
    watchFnc(wat:string){
        console.log('watch --> '+wat)
    }

    public title:string = 'Title :- MCQ TEST';
    public questionData:QuestionSet[] = MCQData;
    public selectAnswers : string[] = ['','','','','','','','','','']
    
    changeMessage():void{
       this.title = 'Welcome to MCQ Component'
    }
    ShortHandWay():void{
        this.title = "Ready for TEST"
    }
    previousQuestion(index : number) : void{
        if(index > 0){
            this.questionData[index].isShow = false
            this.questionData[index-1].isShow = true
        }
    }
    nextQuestion(index : number) : void{
        if(index < (this.questionData.length-1)){
            this.questionData[index].isShow = false
            this.questionData[index+1].isShow = true
        }
    }
    selectQuestion(event :selectedResponse){
        let response : string = this.questionData[event.questionIndex].responseSet[event.responseIndex];
        this.selectAnswers[event.questionIndex] = response
        // console.log(this.selectAnswers)
        // console.log(response)
    }
    previousIndex(event:number){
        this.previousQuestion(event)
    }
    nextIndex(event:number){
        this.nextQuestion(event)
    }

    // beforeMount(){
    //     console.log("beforeMount")
    // }
    // mounted(){
    //     console.log("mounted")
    // }
    // created(){
    //     console.log("created")
    // }
    // updated(){
    //     console.log("updatee")
    // }
    // beforeUpdate(){
    //     console.log("beforeUpdate")
    // }
    // beforeDestroy(){
    //     console.log("beforeDestroy")
    // }
    // destroyed(){
    //     console.log("destroyed")
    // }
}