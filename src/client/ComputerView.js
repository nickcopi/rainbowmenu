import React, { Component } from 'react';

export default class ComputerView extends Component {
	state = { username: null, loans: null};

	componentDidMount() {
		console.log('mounted');
		fetch('/api/getComputers')
			.then(res => res.json())
			.then(data =>{
				this.setState({ loans:data });
				console.log(data);	
			});
	}
	loadLoans=(loans)=>{
		let elements = [];
	
		loans.forEach(loan=>{
			let style = {
				color: loan.color
			}
			elements.push(<h1 style={style}>{loan.name}</h1>);
		});
		return elements;

	}

	render() {
		console.log(this);
		const loans = this.state.loans;
		return (
			<div>
			{loans?this.loadLoans(this.state.loans):<h1>Loading</h1>}
			</div>
		);
	}
}
