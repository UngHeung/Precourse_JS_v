import { TestPr2 } from "./test.js";

const scoreBoard = document.getElementById("score_board");

// 문제 입력 시작
// function solution(pobi, crong) {
//     return null;
// }

// 문제 입력 종료

const test = new TestPr2(solution);
scoreBoard.innerHTML = `
    <li>
        <h3> 2번 문제 </h3>
        ${test.printResult()}
    </li>
`;
