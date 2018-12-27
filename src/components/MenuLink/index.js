// Vendors
import classnames from 'classnames'
// Components
import MenuIcon from 'components/SVGs/MenuIcon'
// Enhancers
import menuLinkEnhancer from 'enhancers/MenuLink'
// Own Styles
import styles from './menu-link.styl'

console.log(styles)

const menuLinkClassNames = ({ linkIsActive }) => classnames({
	[styles.menuLink]: true,
	[styles.linkIsActive]: linkIsActive,
})

const MenuLink = ({ text, linkIsActive, handleSelectSection }) =>
	<li className={menuLinkClassNames({ linkIsActive })}>
		<a onClick={handleSelectSection}>
			<div className={styles.pulseEffect}>
				<MenuIcon
					svg={styles.iconSvg}
					outerCircle={styles.outerCircle}
					innerCircle={styles.innerCircle}
					x={styles.x}
				/>
			</div>
			<span className={styles.linkText}>
				{ text }
			</span>
		</a>
	</li>

export default menuLinkEnhancer(MenuLink)
