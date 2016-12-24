'use strict';

import dispatcher from './dispatcher';

const AppActions = {
	Update: (data) => {
		let dataClone = Object.assign({}, data);

		for (let i = 0; i < 1000; i++) {
			dataClone[`update-${i}`] = `update-${i}`;

			setTimeout(() => dispatcher.emitChange('layout', dataClone), 100);
		}
	}
};

module.exports = AppActions;
