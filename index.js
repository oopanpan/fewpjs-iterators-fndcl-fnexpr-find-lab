const superbowlWin = (arr) =>{
    const winningYear = arr.find(record => record['result'] === 'W')
    if (winningYear){
        return winningYear.year
    }
}
