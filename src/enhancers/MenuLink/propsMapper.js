import { compose, mapProps } from 'recompose'

export default compose(
	mapProps(
		({ currentSection, linkId, ...rest }) => ({
			linkIsActive: currentSection === linkId,
			...rest
		})
	)
)
