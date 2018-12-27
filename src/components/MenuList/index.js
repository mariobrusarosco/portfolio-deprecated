// Vendor
import classnames from 'classnames'
// Own Styles
import styles from './menu-list.styl'
// Components
import MenuLink from 'components/MenuLink'

const menuListClasses = classnames({
	[styles.navigationContainer]: true,
})

const MenuList = () => (
	<nav className={menuListClasses}>
		<ul className={styles.list}>
			<MenuLink text="Lorem Ipsum" linkId={0} />
			<MenuLink text="Lorem Ipsum" linkId={1} />
			<MenuLink text="Lorem Ipsum" linkId={2} />
			<MenuLink text="Lorem Ipsum" linkId={3} />
			<MenuLink text="Lorem Ipsum" linkId={4} />
			<MenuLink text="Lorem Ipsum" linkId={5} />
			<MenuLink text="Lorem Ipsum" linkId={6} />
			<MenuLink text="Lorem Ipsum" linkId={7} />
			<MenuLink text="Lorem Ipsum" linkId={8} />
		</ul>
	</nav>
)

export default MenuList
