// get time from date and convert from military time to standard 12 hr time
function getCurrentTime() {
  var today = Date();
  var time = today.toString().slice(15, 24);
  var hmsArr = time.split(":");
  if (hmsArr[0] > 12) {
    hmsArr[0] = hmsArr[0] - 12;
    return hmsArr.join(":") + " PM EST";
  } else {
    return time + " AM EST";
  }
}

// sort function for both sorting by rating and price
function sort(arrayOfObjects, sortField, direction) {
	var index = 0;
	var sample = arrayOfObjects[index][sortField];
	while (sample === undefined) {
		index++;
		sample = arrayOfObjects[index][sortField];
	}
	// if it's an number, sort by value
	if (typeof sample === "number") {
		arrayOfObjects.sort((a, b) => {
			if (direction === "asc") {
				return a[sortField] - b[sortField];
			} else {
				return b[sortField] - a[sortField];
			}
		});
	}
	// if it's a string, sort by string.length
	if (typeof sample === "string") {
		arrayOfObjects.sort((a, b) => {
			if (!a[sortField]) {
				a[sortField] = "";
			}
			if (!b[sortField]) {
				b[sortField] = "";
			}
			if (direction === "asc") {
				return a[sortField].length - b[sortField].length;
			} else {
				return b[sortField].length - a[sortField].length;
			}
		});
	}
}

module.exports ={
	getCurrentTime,
	sort
};