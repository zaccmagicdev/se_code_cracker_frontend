function processCurrentAttempt(row, answer) {
    let hint = [];
    const attemptCopy = Array.from(row)

    for (let i = 0; i < answer.length; i++) {
        if (answer[i] === attemptCopy[i]) {
            hint.push('black')
        }
        else if (attemptCopy.includes(answer[i])) {
            hint.push('white')
        } else {
            hint.push('z')
        }
    }

    const sorted = hint.sort();

    return sorted;
}

export default processCurrentAttempt;