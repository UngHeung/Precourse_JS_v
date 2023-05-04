export default class TestPr1 {
    constructor(solution) {
        this.solution = solution;
        this.checkScore();
    }

    setResult = (result) => {
        this.result = result;
    };

    printResult = () => {
        return this.result;
    };

    /** 점수 확인 */
    checkScore = () => {
        const result = [0, 1, -1];
        const [pobi, crong] = [
            [
                [97, 98],
                [197, 198],
            ],
            [
                [131, 132],
                [211, 212],
            ],
            [
                [99, 102],
                [211, 212],
            ],
        ];

        let count = 0;
        let score = (count / result.length) * 100;

        result.map((_, i) => (this.solution(pobi[i], crong[i]) === result[i] ? count++ : 0));
        this.setResult(
            `
                테스트 케이스 개수: ${result.length}<br>
                맞춘 개수: ${count}<br>
                점수: ${score}<br>
            `
        );
    };
}
