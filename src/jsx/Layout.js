'use strict';

import React from 'react';
import {Link} from 'react-router';
import Store from '../js/store';
import state from '../js/state';

const recursiveCloneChildren = (children, state) => {
	return React.Children.map(children, (child) => {
		let childProps = Object.assign({}, state);

		childProps.children = recursiveCloneChildren(child.props.children, state);

		return React.cloneElement(child, childProps);
	});
};

class Layout extends React.Component {
	constructor() {
		super();
		Store.setStore('layout', state.store);
		this.state = Store.getData('layout');
	}
	componentWillMount() {
		Store.onListen('layout', this, this._onChange);
	}
	componentWillUnmount() {
		Store.clearData('layout');
		Store.offListen('layout');
	}
	_onChange(store) {
		console.log('I have updated info now!');
		this.setState(store);
	}
	render() {
		let children = recursiveCloneChildren(this.props.children, this.state);

		return (
			<div className="app-container">
			  <header>
			    <Link to="/">
			      <span>Test</span>
			    </Link>
			  </header>
			  <button onClick={() => console.log('I clicked on some shit dude!')} />
			  <div className="app-content">{children}</div>
			  <footer>
			    <p>
			      Test for Shits!!! DUDE Hot!!! This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>Express</strong>.
			    </p>
			  </footer>
			</div>
		);
	}
}

export default Layout;
