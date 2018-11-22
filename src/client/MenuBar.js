import React, { Component } from 'react';
import MenuItem from './MenuItem';

export default class MenuBar extends Component {

	componentDidMount() {
	}

	render() {
		return (
			<div class='menuBar'>
				<MenuItem url = '/loans' text = "View Loans"></MenuItem>
				<MenuItem url = '/stats' text = "Statistics"></MenuItem>
				<MenuItem url = '/settings' text = "Settings"></MenuItem>
				<MenuItem url = '/logut' text = "Logout"></MenuItem>
			</div>
		);
	}
}
