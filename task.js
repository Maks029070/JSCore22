function isInt(num) {
	return (num^0) === num;
}

$(document).ready(function() {
	$('#sendData').on('click', function() {
		let name = $('#name').val();
		let age = $('#age').val();
		let date = $('#dateOfBirth').val();
		let numDate = Number(age);
		if (isInt(numDate) && name && date) {
			$('form').effect('blind', 1000);
		} else {
			$('form').effect('shake', 1000);
		}
	});
});