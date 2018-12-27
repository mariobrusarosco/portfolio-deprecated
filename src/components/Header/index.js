// Vendors
import classNames from 'classnames'
// Enhancers
import enhancerHeader from 'enhancers/Header'
// Components
import MenuButton from 'components/MenuButton'
import MenuList from 'components/MenuList'
// Own Styles
import styles from './header.styl'

const headerClassNames = ({ menuIsOpened }) => classNames({
	[styles.header] : true,
	menuIsOpened
})

const Header = ({ menuIsOpened }) => (
	<>
		<header className={headerClassNames({ menuIsOpened })}>
			<MenuButton />
			<MenuList />
			<span className={styles.sectionId}>
				home
			</span>
		</header>
	</>
)

export default enhancerHeader(Header)
