import React, { Component } from 'react';

export default class MenuItem extends Component {
	state = {
		canvas:<canvas className = {this.props.className} style = {this.props.style} id="canvas" ref = {(canvas)=>this.canvas = canvas}></canvas>,
	};
	static defaultProps = {
		delay:1000/60,
		colSize:5,
		rowSize:5,
		absolute: true,
	}

	componentDidMount() {
		console.log(this.props);
		let ctx = this.canvas.getContext('2d');
		let canvas = this.canvas;
		let columns = [];
		let columns2 = [];
		let rows = [];
		let rows2 = [];
		const WIDTH = this.props.colSize;
		const HEIGHT = this.props.rowSize;
		class Column{
			constructor(color,x){
				this.color = color;
				this.width = WIDTH;
				this.x = x;
			}
		}
		class Row{
			constructor(color,y){
				this.color = color;
				this.height = HEIGHT;
				this.y = y;
			}
		}
		canvas.width = this.props.width;
		canvas.height = this.props.height;
		if(this.props.absolute){
			canvas.style.position = 'absolute';
			canvas.style.top = 0 + 'px';
			canvas.style.left = 0 + 'px';
		}
		for(let i = 0; i < canvas.width; i+= WIDTH){
			columns.push(new Column(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,i));
		}
		for(let i = 0; i < canvas.width; i+= WIDTH){
			columns2.push(new Column(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,i));
		}
		for(let i = 0; i < canvas.height; i+= HEIGHT){
			rows.push(new Row(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,i));
		}
		for(let i = 0; i < canvas.height; i+= HEIGHT){
			rows2.push(new Row(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,i));
		}
		setInterval(()=>{
			ctx.globalAlpha = .25;
			ctx.clearRect(0,0,canvas.width,canvas.height);
			columns.push(new Column(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,canvas.width));
			columns.forEach(col=>{
				col.x -= WIDTH;
				ctx.fillStyle = col.color;
				ctx.fillRect(col.x,0,col.width,canvas.height);
			});	
			////////////////////////////////////
			rows.push(new Row(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,canvas.height));
			rows.forEach(row=>{
				row.y -= HEIGHT;
				ctx.fillStyle = row.color;
				ctx.fillRect(0,row.y,canvas.width,row.height);
			});	
			////////////////////////////////////
			columns2.push(new Column(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,0));
			columns2.forEach(col=>{
				col.x += WIDTH;
				ctx.fillStyle = col.color;
				ctx.fillRect(col.x,0,col.width,canvas.height);
			});	
			////////////////////////////////////
			rows2.push(new Row(`rgb(${Math.random()*256},${Math.random()*256},${Math.random()*256})`,0));
			rows2.forEach(row=>{
				row.y += HEIGHT;
				ctx.fillStyle = row.color;
				ctx.fillRect(0,row.y,canvas.width,row.height);
			});	
			////////////////////////////////////
			////////////////////////////////////
			////////////////////////////////////
			columns = columns.filter(col=>{
				return col.x < canvas.width && col.x + col.width > 0;
			});
			columns2 = columns2.filter(col=>{
				return col.x < canvas.width && col.x + col.width > 0;
			});
			rows = rows.filter(row=>{
				return row.y < canvas.height && row.y + row.height > 0;
			});
			rows2 = rows2.filter(row=>{
				return row.y < canvas.height && row.y + row.height > 0;
			});
		},this.props.delay);
		console.log('mounted');
	}
	render() {
		let canvas = this.state.canvas;
		return (
			<div>
				{canvas}
			</div>
		);
	}
}
