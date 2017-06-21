var EventEmitter = require('events').EventEmitter;
class Store_MessageList extends EventEmitter {
	constructor() {
		this.allData = null;
	}
	getAllData(callback) {
		var self = this;
		fetch(
			"/data/getMessage/"
		).then(function(res) {
			if (res.ok) {
				res.json().then(function(data) {
					self.allData = data;
					callback(self.allData);
				});
			} else {
				console.log("looks like the response wasn't prefect,got status", res.status)
			}
		}, function(e) {
			console.log("fetch failed", e);
		});
	}
}
module.exports = new Store_MessageList();