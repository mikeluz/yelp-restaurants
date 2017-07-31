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

function sort(arrayOfObjects, sortField, direction) {
	if (typeof arrayOfObjects[0][sortField] === "number") {
		arrayOfObjects.sort((a, b) => {
			if (direction === "asc") {
				return a[sortField] - b[sortField];
			} else {
				return b[sortField] - a[sortField];
			}
		});
	}

	if (typeof arrayOfObjects[0][sortField] === "string") {
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