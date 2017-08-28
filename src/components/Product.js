import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
	render() {
		return (<div>Product</div>)
	}
}

Product.defaultProps = {
	hasWatermark: false
}

// function weightRange(props, propName, componentName) {
// 	if (props[propName]) {
// 		let value = props[propName];
// 		if (value < 80){
// 			return new Error ('too light')
// 		}
// 		else if (value > 300) {
// 			return new Error ('too heavy')
// 		}
// 		else 
// 		{
// 			return null
// 		}
// 	}
// }

Product.propTypes = {
	name: PropTypes.string.isRequired,
	producer: PropTypes.string,
	hasWatermark: PropTypes.bool,
	color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
	weight: function (props, propName, componentName) {
		if (props[propName] === undefined){
			return new Error('must be definied')
		}
		if (props[propName]) {
			let value = props[propName];
			if (isNaN(value)){
				return new Error('must be a number')
			}
			else if (value < 80){
				return new Error('too light')
			}
			else if (value > 300) {
				return new Error('too heavy')
			}
			else 
			{
				return null
			}
		}
	}
}

export default Product;