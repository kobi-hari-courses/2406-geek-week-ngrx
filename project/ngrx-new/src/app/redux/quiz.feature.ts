import { createFeature, createSelector } from "@ngrx/store";
import { quizReducer } from "./quiz.reducer";

export const quizFeature = createFeature({
    name: 'quiz', 
    reducer: quizReducer, 
    extraSelectors: feature => {
        const selectQuestionsCount = createSelector(feature.selectQuestions, all => all.length);
        const selectCurrentQuestionIndex = createSelector(feature.selectAnswers, all => all.length);
        const selectCurrentQuestion = createSelector(feature.selectQuestions, selectCurrentQuestionIndex, 
            (all, index) => all[index]);

        return {
            selectQuestionsCount,
            selectCurrentQuestionIndex,
            selectCurrentQuestion
        };
    }
});

