import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class QuizzComponent implements OnInit {
  title: string = '';
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  selectedAnswers: string[] = [];
  showResult: boolean = false;
  resultMessage: string = '';

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<any>('assets/data/quizz_questions.json').subscribe(data => {
      this.title = data.title;
      this.questions = data.questions;
    });
  }

  selectOption(alias: string) {
    this.selectedAnswers.push(alias);

    if (this.currentQuestionIndex < this.questions.length - 1) {
      this.currentQuestionIndex++;
    } else {
      this.calculateResult();
    }
  }

  calculateResult() {
    const countA = this.selectedAnswers.filter(ans => ans === 'A').length;
    const countB = this.selectedAnswers.filter(ans => ans === 'B').length;

    this.resultMessage = countA > countB ? "Você provavelmente seria um herói!" : "Você provavelmente seria um vilão!";
    this.showResult = true;
  }
}
