function showAlertToUser(
	message = 'This is default message',
	classType = 'information'
) {
	return `<div class="${classType}">${message}</div>`;
}
