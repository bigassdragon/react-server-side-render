'use strict';

import dispatcher from './dispatcher';

const AppActions = {
	Update: (data) => {
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
		dispatcher.emitChange('layout', data);
	}
};

module.exports = AppActions;
