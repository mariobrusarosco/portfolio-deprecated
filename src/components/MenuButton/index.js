// Vendors
import classNames from 'classnames'
// Components
import MenuIcon from 'components/SVGs/MenuIcon'
// Own Styles
import styles from './menu-button.styl'
// Enhancer
import menuButtonEnhancer from 'enhancers/MenuButton'

const menuClassNames = ({ menuIsOpened }) => classNames({
	[styles.menu]: true,
	[styles.menuIsOpened] : menuIsOpened,
})

const MenuButton = ({
	handleMenuToggle,
	menuIsOpened
}) => (
	<div
		className={menuClassNames({ menuIsOpened })}
		onClick={handleMenuToggle}
	>
		<span className={styles.iconText}>menu</span>
		<MenuIcon
			svg={styles.iconSvg}
			outerCircle={styles.outerCircle}
			innerCircle={styles.innerCircle}
			x={styles.x}
		/>
	</div>
)

export default menuButtonEnhancer(MenuButton)
