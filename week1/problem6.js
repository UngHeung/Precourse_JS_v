import { TestPr6 } from "./test.js";

const scoreBoard = document.getElementById("score_board");

// 문제 입력 시작
// function solution(pobi, crong) {
//     return null;
// }

// 문제 입력 종료

const test = new TestPr6(solution);
scoreBoard.innerHTML = test.printResult();
