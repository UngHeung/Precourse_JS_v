import { TestPr1 } from "./test.js";

const scoreBoard = document.getElementById("score_board");

// 문제 입력 시작
// function solution(pobi, crong) {
//     return null;
// }

function solution(pobi, crong) {
    const pobiPage = getMax(pobi);
    const crongPage = getMax(crong);

    if (!checkValid(pobi) || !checkValid(crong)) {
        return -1;
    }

    if (pobiPage > crongPage) {
        return 1;
    } else if (crongPage > pobiPage) {
        return 2;
    } else if (pobiPage === crongPage) {
        return 0;
    } else {
        return -1;
    }
}

function getMax(page) {
    const leftPage = page[0];
    const rightPage = page[1];
    const leftMax = Math.max(addition(leftPage), multiplication(leftPage));
    const rightMax = Math.max(addition(rightPage), multiplication(rightPage));

    return Math.max(leftMax, rightMax);
}

function addition(num) {
    const numToString = String(num);
    const result = [...numToString].reduce((a, b) => a + b * 1, 0);
    return result;
}

function multiplication(num) {
    const numToString = String(num);
    const result = [...numToString].reduce((a, b) => a * b * 1, 1);
    return result;
}

function checkValid([leftPage, rightPage]) {
    if (!(leftPage < rightPage)) {
        return false;
    } else if (rightPage - leftPage !== 1) {
        return false;
    }

    return true;
}

// 문제 입력 종료

const test = new TestPr1(solution);
scoreBoard.innerHTML = `
    <li>
        <h3> 1번 문제 </h3>
        ${test.printResult()}
    </li>
`;
