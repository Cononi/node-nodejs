

// 블록킹 방식
function longRunningTask():void{
	// 오래 걸리는 작업
	console.log('작업 끝')
}
console.log('시작')
longRunningTask()
console.log('다음 작업')

// 논블로킹 방식
console.log('---------------------------')
function longRunningTaskNonBlock():void{
	// 오래 걸리는 작업
	console.log('작업 끝')
}
console.log('시작')
longRunningTaskNonBlock()
setTimeout(longRunningTaskNonBlock, 0)
console.log('다음 작업')