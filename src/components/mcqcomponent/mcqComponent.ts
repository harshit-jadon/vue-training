import { Vue, Component, Watch } from 'vue-property-decorator'
import { MCQData } from './mcqData'
import { QuestionSet } from '../../Model/model'
@Component

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
    selectQuestion(questionIndex:number, responseIndex:number){
        let response : string = this.questionData[questionIndex].responseSet[responseIndex];
        this.selectAnswers[questionIndex] = response
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