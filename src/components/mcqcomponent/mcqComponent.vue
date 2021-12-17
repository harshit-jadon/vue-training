<template>
    <div>
        <!-- <h1>{{title}}</h1>
        <button v-on:click='changeMessage()'>Change Message</button>
        <button @click='ShortHandWay()'>Short Hand Way</button>
        <input type='text' v-model='title'/> -->
        <!-- <table border='1'>
            <thead>
                <th>Sr.No</th>
                <th>Id</th>
                <th>Question</th>
                <th>Question Response</th>
            </thead>
            <tbody >
                <tr v-for='(question, qIndex) in questionData' v-bind:key='qIndex'>
                    <td>{{qindex+1}}</td>
                    <td>{{question.questionId}}</td>
                    <td>{{question.questionTitle}}</td>
                    <td>{{question.responseSet}}</td>
                </tr>
            </tbody>    
        </table>     -->

        <div class="content-container">
            <div class="panel-left question-container-left" style="width : 70%">
                <h2>MCQ Based Questions</h2>
                <div class="container-inner">
                    <div class="question-section" v-for="(question, index) in questionData" :key="index">
                        <div v-if="question.isShow">
                            <h3></h3>
                            <p>
                                {{ question.questionTitle }}
                            </p>

                           <QuestionResponse :questionResponseSet='question' :index='index' :selectAnswers='selectAnswers' @currentSelection='selectQuestion'></QuestionResponse>
                           <QuestionFooter :questionData='questionData' :index ='index' @previousIndex='previousIndex' @nextIndex='nextIndex'></QuestionFooter>                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { MCQComponent } from "../mcqcomponent/mcqComponent";
export default MCQComponent;
</script>
<style lang="less" src="./style.less"></style>  