import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Transition from 'react-addons-css-transition-group';
import Button from 'react-bootstrap/lib/Button';

export default class TextBox extends Component {
	static propTypes = {
		value: PropTypes.string.isRequired,
		onValueChange: PropTypes.func.isRequired,
		onEnter: PropTypes.func.isRequired,
		placeholder: PropTypes.string,
		autofocus: PropTypes.bool
	}
	render() {
		const { value, placeholder } = this.props;
		const { handleValueChange, handleKeyPress, handleSubmit } = this;
		return (
			<Transition
				transitionName="fade"
				transitionEnterTimeout={300}
				transitionLeaveTimeout={300}
				transitionAppear={true}
				transitionAppearTimeout={400}
			>
				<div className="text-box">
					<textarea
						placeholder={placeholder}
						value={value}
						onChange={handleValueChange}
						onKeyUp={handleKeyPress}
						ref={(element) => { this.textElem = element; }}
					>
					</textarea>
					<Button bsStyle="primary" onClick={handleSubmit}>Submit</Button>
				</div>
			</Transition>
		)
	}
	handleValueChange = (event) => {
		const { onValueChange } = this.props;
		onValueChange(event.target.value);
	}
	handleKeyPress = (event) => {
		const { onEnter, value } = this.props;
		event.keyCode === 13 && value && onEnter(value);
	}
	handleSubmit = () => {
		const { onEnter, value } = this.props;
		value && onEnter(value);
	}
	componentDidMount() {
		this.props.autofocus && this.textElem.focus();
	}
}
