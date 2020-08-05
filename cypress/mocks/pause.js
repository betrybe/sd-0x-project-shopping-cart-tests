function pause(milliseconds) {
	var dt = new Date();
	while ((new Date()) - dt <= milliseconds) {}
}

// function pause (result, timeout) {
// 	return new Promise(resolve => {
// 	  setTimeout(
// 		() => resolve(result),
// 		timeout
// 	  )
// 	})
//   }

module.exports = pause;