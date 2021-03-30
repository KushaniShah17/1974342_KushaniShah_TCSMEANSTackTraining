import { Injectable } from '@angular/core';
import { Quiz } from './quiz.model';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  quizzes : Quiz[]=[
    {
     question: 'What\'s the captial of India',
     answer: [
       { option: 'Delhi', correct: true},
       { option: 'Kerla', correct: false},
       { option: 'Mumbai', correct: false}
       
     ] 
    },
    {
      question: 'What\'s the captial of Japan',
    answer: [
      { option: 'Osaka', correct: false},
      { option: 'Seoul', correct: false},
      { option: 'Tokyo', correct: true}
     
    ] 
   },
   {
    question: 'What\'s the captial of South Africa',
    answer: [
      { option: 'Maputo', correct: false},
      { option: 'Johannesburg', correct: false},
      { option: 'Pretoria', correct: true} 
    ] 
   },
   {
    question: 'What\'s the captial of Brazil',
    answer: [
      { option: 'Buenos Aires', correct: false},
      { option: 'San Paulo', correct: false},
      { option: 'Bradilia', correct: true} 
    ] 
   },
   {
    question: 'What\'s the captial of Somalia',
    answer: [
      { option: 'Mogadishu', correct: true},
      { option: 'Asmara', correct: false},
      { option: 'Nairobi', correct:false } 
    ] 
   },
   {
    question: 'What\'s the captial of Mexico',
    answer: [
      { option: 'Mexico City', correct: true},
      { option: 'Puebla City', correct: false},
      { option: 'Gudalajara City', correct:false } 
    ] 
   },
   {
    question: 'What\'s the captial of UK',
    answer: [
      { option: 'Asmara', correct: false},
      { option: 'London', correct: true},
      { option: 'Washington DC', correct:false } 
    ] 
   },
   {
    question: 'What\'s the captial of USA',
    answer: [
      { option: 'Washington DC', correct: true},
      { option: 'New York', correct: false},
      { option: 'Los Angeles', correct:false } 
    ] 
   },
   {
    question: 'What\'s the captial of UAE',
    answer: [
      { option: 'Doha', correct: false},
      { option: 'Abu Dhabi', correct: true},
      { option: 'Doha', correct:false } 
    ] 
   },
   {
    question: 'What\'s the captial of Cuba',
    answer: [
      { option: 'Montevideo', correct: false},
      { option: 'Havana', correct: true},
      { option: 'Santa Clara', correct:false } 
    ] 
   },
  ]
  constructor() {}
 getQuizzes(){
   return this.quizzes;
 }

   
}
