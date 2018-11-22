import React, { Component } from 'react';
import Rainbow from './Rainbow';

export default class MenuItem extends Component {
	state = {
		rainbow: null
	}
	componentDidMount() {
		console.log('mounted');
		let box = this.item.getBoundingClientRect();
		let style = {
			position:'absolute',
			top:box.y + 'px',
			left:box.x + 'px',
			zIndex:0
		}
		let rainbow = <Rainbow className = 'menuCanvas'  style={style} absolute = {false} height = {box.height} width = {box.width} rowSize = {2} colSize = {2} />;
		this.setState({rainbow});	
	}
	render() {
		return (
			<div>
				<a className='menuItem' ref = {(item)=>{this.item = item}}href={this.props.url}>{this.props.text}</a>
				{this.state.rainbow}
			</div>
		);
	}
}
