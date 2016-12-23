'use strict';

import React from 'react';
import {Link} from 'react-router';
import Actions from '../../js/actions';

const Test = (props) => {
	console.log('test component: ', props);

	return (
		<div>
			<button onClick={() => Actions.Update({update: 'YES DUDE!!!'})}>
				Render so much by one click!
			</button>
		</div>
	);
};

export default Test;
