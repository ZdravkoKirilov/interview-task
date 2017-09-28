import React from 'react';
import PropTypes from 'prop-types';

export default function TextBox({value, onValueChange, onEnter, placeholder}) {
	return (
		<div className="text-box">
			<textarea
				placeholder={placeholder}
				value={value}
				onChange={(event) => onValueChange(event.target.value)}
				onKeyUp={(event) => {event.keyCode === 13 && onEnter(event.target.value)}}
			>
			</textarea>
		</div>
	)
}

TextBox.propTypes = {
	value: PropTypes.string.isRequired,
	onValueChange: PropTypes.func.isRequired,
	onEnter: PropTypes.func.isRequired,
	placeholder: PropTypes.string
};