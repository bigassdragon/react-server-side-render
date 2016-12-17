'use strict';

import Dispatcher from './dispatcher';

let stores = {};
let storesClone = {};
let listeners = {};

function loadStore (type, data) {
	Object.keys(data).forEach((key) => {
		stores[type][key] = data[key];
	});
}

const Store = {
	setStore: function (type, data) {
		stores[type] = Object.assign({}, data);
		storesClone[type] = Object.assign({}, data);
	},
	getData: function (type) {
		return stores[type];
	},
	clearData: function (type) {
		stores[type] = Object.assign({}, storesClone[type]);
	},
	onChange: function (evt_name, data) {
		loadStore(evt_name, data);

		if (typeof listeners[evt_name] !== 'undefined') {
			for (let i = 0, l = listeners[evt_name]; i < l; i++) {
				listeners[evt_name][i][1].call(listeners[evt_name][i][0], stores[evt_name]);
			}
		}
	},
	onListen: function (evt_name, bind, callback) {
		if (!listeners[evt_name]) {
			listeners[evt_name] = [];

			listeners[evt_name].push([bind === null ? this : bind, callback]);
			Dispatcher.register(evt_name, bind === null ? this : bind, this.onChange);
		}
	},
	offListen: function (evt_name) {
		delete listeners[evt_name];

		Dispatcher.unRegister(evt_name);
	}
};

module.exports = Store;
