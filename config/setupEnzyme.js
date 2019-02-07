import 'whatwg-fetch'
import 'raf/polyfill'

const Enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new Adapter() });

window.mockResponse = (status, statusText, response) => {
	return new window.Response(response, {
		status    : status,
		statusText: statusText,
		headers   : {
			'Content-type': 'application/json'
		}
	})
}
