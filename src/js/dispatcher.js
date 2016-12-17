'use strict';

let _prefix = 'ID_';
let listeners = {};

const Dispatcher = {
	register: function (evt_name, bind, callback) {
		let _evt_name = `${_prefix}${evt_name}`;

		if (typeof listeners[_evt_name] === 'undefined') {
			listeners[_evt_name] = [];
		}

		listeners[_evt_name].push([bind === null ? this : bind, callback]);
	},
	unRegister: function (evt_name) {
		let _evt_name = `${_prefix}${evt_name}`;

		delete listeners[_evt_name];
	},
	emitChange: function (evt_name, params) {
		let _evt_name = `${_prefix}${evt_name}`;

		if (typeof listeners[_evt_name] !== 'undefined') {
			for (let i = 0, l = listeners[_evt_name].length; i < l; i++) {
				listeners[_evt_name][i][1].call(listeners[_evt_name][i][0], evt_name, params);
			}
		}
	}
};

module.exports = Dispatcher;
