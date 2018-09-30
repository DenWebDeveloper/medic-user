import React from 'react'
import PropTypes from 'prop-types'
import range from 'lodash.range'

function SimplePagination(props) {
	return (
		<ul className="pagination">
			{range(0, props.number).map((item, index) => {
				let className = 'waves-effect'

				if (index < props.activeItem) {
					className = 'disabled'
				} else if (index === props.activeItem) {
					className = 'active'
				}

				return (
					<li className={className} key={index}>
						<a>{index + 1}</a>
					</li>
				)
			})}
		</ul>
	)
}

SimplePagination.propTypes = {
	number: PropTypes.number.isRequired,
	activeItem: PropTypes.number.isRequired
}

export default SimplePagination