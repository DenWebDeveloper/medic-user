import React, {Component} from 'react'
import {DropTarget} from 'react-dnd'

import './style.css'
import {connect} from 'react-redux'
import {changeSelectedIndexAnswer} from '../../ducks/questions'

class Flask extends Component {
	render() {
		const {connectDropTarget, canDrop} = this.props
		return connectDropTarget(
			<div className={`flask-wrapper ${canDrop ? 'can-drop' : ''}`}>
				<svg version="1.1" id="flask" xmlns="http://www.w3.org/2000/svg"
					 xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 339 533"
					 enableBackground="new 0 0 339 533" xmlSpace="preserve">
					<g>
						<g>
							<g>
								<path fill="#F200FF" d="M327.3,500.1c-0.3-0.8-0.3-1.7-0.2-2.5c-0.6-0.1-1.2-0.3-1.4-0.6c-0.8-1.4-5.2-13.2-6.7-14
				c-5-2.8-0.6,0.8-3.1-4.3c-4.2-8.6-8.3-17.3-12.5-25.9c-2.1-4.3-4.2-8.7-7.4-12.3c-2.1-2.3-4.5-4.2-6.7-6.5
				c-2.3-2.3-4.2-5-6.2-7.5c-0.9-1.2-1.9-2.4-2.9-3.5l0.4-0.1c-2.4-3.8-9.6-10.6-8.8-15c-2.9,1.4-6.1,1.6-9.4,1.7
				c-0.9-0.3-1.7-0.6-2.6-0.9c-9.7-2.9-21.6-0.4-27,7.9c-1.7,2.6-2.8,5.7-4.5,8.2c-0.1,0-0.3,0.1-0.4,0.1
				c-7.4,2.2-15.4-0.5-22.1-4.2c-6.7-3.8-12.7-8.7-19.9-11.4c-4.3-1.6-8.9-2.5-13.2-4.3c-10-4.2-17.2-13.4-27.4-17.2
				c-10.3-3.9-21.9-1.7-32.7,0.5c-8.1,1.7-16.4,3.4-23.7,7.2C78.5,401.2,66.3,404,59,413c-9.4,11.6-18.3,27.9-27,40
				c-7.2,10-21.3,32.9-22,45c-0.2,3.1,1.2,7.1,0,10c-1.4,3.3,3.1,0.4,3,4c-0.1,3.2,5,4.7,8,6s10.7,6.9,14,7c33.6,1,61.4,0.7,95,0
				c7.6-0.2,19.5-1.5,27-1c6.9,0.5,12.1-1.8,19-1c33.4,3.7,65.1,0.1,98.7,2c10.9,0.6,22.8-2.4,33.3-5c8-2,15.9-7.5,19.9-14.2
				C326.6,504.3,326.4,502,327.3,500.1z"/>
							</g>
							<g>
								<linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="109.9379" y1="-12.6839"
												x2="302.6047" y2="402.6495" gradientTransform="matrix(1 0 0 -1 0 534)">
									<stop offset="4.381747e-07" style={{stopColor: '#DFDFDF'}}/>
									<stop offset="0.4355" style={{stopColor: '#FFFFFF', stopOpacity: '0.76'}}/>
									<stop offset={1} style={{stopColor: '#BDBDBD'}}/>
								</linearGradient>
								<path fill="url(#SVGID_1_)" d="M328.9,497.6c-0.6-7.1-3.4-15.1-8.6-23.4L214,306V97h-96v209L11.7,474.2
				C-7.6,504.9,6.2,530,42.5,530h247c26,0,40.5-12.9,39.5-31.5C328.9,498.2,328.9,497.9,328.9,497.6z"/>
							</g>
							<g>
								<g>
									<linearGradient id="SVGID_2_" gradientUnits="userSpaceOnUse" x1="2.9753" y1="220.5"
													x2="329.0195" y2="220.5" gradientTransform="matrix(1 0 0 -1 0 534)">
										<stop offset="8.763494e-07" style={{stopColor: '#CCCCCC'}}/>
										<stop offset={1} style={{stopColor: '#CCCCCC'}}/>
									</linearGradient>
									<path fill="url(#SVGID_2_)" d="M328.9,497.6c-0.6-7.1-3.4-15.1-8.6-23.4L214,306V97h-96v209L11.7,474.2
					C-7.6,504.9,6.2,530,42.5,530h247c26,0,40.5-12.9,39.5-31.5C328.9,498.2,328.9,497.9,328.9,497.6z M319.6,510.2
					c-4.5,8.2-15.2,12.8-30.1,12.8h-247c-14.9,0-25.6-4.5-30.1-12.8c-4.5-8.2-2.7-19.7,5.3-32.3L125,308V104h82v204l107.3,169.9
					C322.3,490.5,324.2,502,319.6,510.2z"/>
								</g>
							</g>
							<linearGradient id="SVGID_3_" gradientUnits="userSpaceOnUse" x1="104.6478" y1="413.9731"
											x2="233.3145" y2="455.9731" gradientTransform="matrix(1 0 0 -1 0 534)">
								<stop offset="8.763494e-07" style={{stopColor: '#DFDFDF'}}/>
								<stop offset="0.4355" style={{stopColor: '#FFFFFF'}}/>
								<stop offset={1} style={{stopColor: '#BDBDBD'}}/>
							</linearGradient>
							<path fill="url(#SVGID_3_)" d="M217,113H115c-6.6,0-12-5.4-12-12v-2c0-6.6,5.4-12,12-12h102c6.6,0,12,5.4,12,12v2
			C229,107.6,223.6,113,217,113z"/>
						</g>
						<g className="ellipse-wrapper">
							<radialGradient id="SVGID_4_" cx={146} cy={164} r="12.0416"
											gradientTransform="matrix(1 0 0 -1 0 534)" gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<ellipse opacity="0.6" fill="url(#SVGID_4_)" enableBackground="new    " cx={146} cy={370}
									 rx={11} ry={13}/>
							<radialGradient id="SVGID_5_" cx="305.6314" cy="83.8037" r="12.0416"
											gradientTransform="matrix(0.6364 0 0 -0.5769 -51.1705 398.1797)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<ellipse opacity="0.6" fill="url(#SVGID_5_)" enableBackground="new    " cx="143.3"
									 cy="349.8"
									 rx={7} ry="7.5"/>
							<radialGradient id="SVGID_6_" cx="204.5615" cy="131.7501" r="12.0418"
											gradientTransform="matrix(0.9091 0 0 -0.7692 -14.6335 459.6755)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<circle opacity="0.6" fill="url(#SVGID_6_)" enableBackground="new    " cx="171.3" cy="358.3"
									r={10}/>
							<radialGradient id="SVGID_7_" cx="356.9618" cy="-0.5552" r="12.0416"
											gradientTransform="matrix(0.6364 0 0 -0.5769 -51.1705 398.1797)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<ellipse opacity="0.6" fill="url(#SVGID_7_)" enableBackground="new    " cx={176} cy="398.5"
									 rx={7} ry="7.5"/>
							<radialGradient id="SVGID_8_" cx="384.1984" cy="86.1149" r="12.0416"
											gradientTransform="matrix(0.6364 0 0 -0.5769 -51.1705 398.1797)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<ellipse opacity="0.6" fill="url(#SVGID_8_)" enableBackground="new    " cx="193.3"
									 cy="348.5"
									 rx={7} ry="7.5"/>
							<radialGradient id="SVGID_9_" cx={190} cy={158} r="12.0416"
											gradientTransform="matrix(1 0 0 -1 0 534)" gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<ellipse opacity="0.6" fill="url(#SVGID_9_)" enableBackground="new    " cx={190} cy={376}
									 rx={11} ry={13}/>
							<radialGradient id="SVGID_10_" cx="388.3886" cy="-15.2891" r="12.0416"
											gradientTransform="matrix(0.6364 0 0 -0.5769 -51.1705 398.1797)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<ellipse opacity="0.6" fill="url(#SVGID_10_)" enableBackground="new" cx={196} cy={407}
									 rx={7} ry="7.5"/>
							<radialGradient id="SVGID_11_" cx="388.3886" cy="-15.2891" r="12.0416"
											gradientTransform="matrix(0.6364 0 0 -0.5769 -51.1705 398.1797)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<ellipse opacity="0.6" fill="url(#SVGID_11_)" enableBackground="new" cx={196} cy={407}
									 rx={7} ry="7.5"/>
							<radialGradient id="SVGID_12_" cx="204.5615" cy="131.7501" r="12.0418"
											gradientTransform="matrix(0.9091 0 0 -0.7692 -14.6335 459.6755)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<circle opacity="0.6" fill="url(#SVGID_12_)" enableBackground="new    " cx="171.3"
									cy="358.3"
									r={10}/>
							<radialGradient id="SVGID_13_" cx="204.5615" cy="131.7501" r="12.0418"
											gradientTransform="matrix(0.9091 0 0 -0.7692 -14.6335 459.6755)"
											gradientUnits="userSpaceOnUse">
								<stop offset="0.3604" style={{stopColor: '#E2E2E2'}}/>
								<stop offset="0.9141" style={{stopColor: '#BDBDBD', stopOpacity: '0.7'}}/>
								<stop offset={1} style={{stopColor: '#FFFFFF'}}/>
							</radialGradient>
							<circle opacity="0.6" fill="url(#SVGID_13_)" enableBackground="new    " cx="171.3"
									cy="358.3"
									r={10}/>
						</g>
					</g>
				</svg>
			</div>
		)
	}
}

const spec = {
	drop(props, monitor) {
		const {indexAnswer} = monitor.getItem()
		props.changeSelectedIndexAnswer(indexAnswer)
	}
}

const collect = (connect, monitor) => ({
	connectDropTarget: connect.dropTarget(),
	canDrop: monitor.canDrop()
})

export default connect(null, {changeSelectedIndexAnswer})(DropTarget(['answer'], spec, collect)(Flask))

