let caldate = document.querySelector('.calender .header #date');
let date = new Date()
curryear = date.getFullYear(),
currmonth = date.getMonth();
let calDays = document.querySelector('.calender .days');
let month = ['January', 'Febuary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let prevNext = document.querySelectorAll('.calender .header #arrow span');

const calender = () => {
	let liTag = ''
	let lastDateOfMonth = new Date(curryear, currmonth + 1, 0).getDate()
	lastDateOfLastMonth = new Date(curryear, currmonth, 0).getDate(),
	firstDayOfMonth = new Date(curryear, currmonth, 1).getDay(),
	lastDayMonth = new Date(curryear, currmonth, lastDateOfMonth).getDay();

	for (var i = firstDayOfMonth; i > 0; i--) {
		liTag += `<li class="inactive">${lastDateOfMonth - i + 1}</li>`
	}

	for (var i = 1; i <= lastDateOfMonth; i++) {
		let isToday = i === date.getDate() && currmonth === new Date().getMonth() && curryear === new Date().getFullYear() ? "active" : ""; 
		liTag += `<li class="${isToday}">${i}</li>`
	}
	for (var i = lastDayMonth; i < 6; i++) {
		liTag += `<li>${i - lastDayMonth + 1}</li>`
	}
	caldate.innerHTML = `${month[currmonth]} ${curryear}`
	calDays.innerHTML = liTag
};


prevNext.forEach(item =>  {
	item.addEventListener('click', () => {
		currmonth = item.id === "prev" ? currmonth - 1 : currmonth + 1;

		if (currmonth < 0 || currmonth > 11) {
			date = new Date(curryear, currmonth)
			currmonth = date.getMonth(),
			curryear = date.getFullYear();
		} else {
			date = new Date()
		}
		
		calender();
	});

});

calender();