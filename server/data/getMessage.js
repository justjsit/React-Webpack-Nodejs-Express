var MessageList = [{
	"Message": "Hello React"
}, {
	"Message": "Hello Webpack"
}, {
	"Message": "Hello Node,js"
}, {
	"Message": "Hello Express"
}]

exports.getMessageList = function(callback) {
	callback(MessageList);
};