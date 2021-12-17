<template>
    <div class="question-footer">
        <div class="footer-left">Question {{index+1}} of {{questionData.length}}</div>
        <div class="footer-right">
            <button class="transparent-button" :class="index === 0 ? 'disableClass' : ''" @click="previousQuestion(index)"> Previous </button>
            <button class="primary-button" :class="index === (questionData.length-1) ? 'disableClass' : ''" @click="nextQuestion(index)"> Next</button>
        </div>
    </div>
</template>

<script>
import { QuestionFooter } from "./questionFooter";
export default QuestionFooter
</script>
