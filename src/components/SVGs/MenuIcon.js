const MenuIcon = ({ svg, outerCircle, innerCircle, x }) => (
  <svg
		viewBox="0 0 40 40"
    shapeRendering="geometricPrecision"
    textRendering="geometricPrecision"
    imageRendering="optimizeQuality"
    fillRule="evenodd"
    clipRule="evenodd"
    className={svg}
  >
    <circle className={innerCircle} cx={20} cy={20} r={11} />
    <circle className={outerCircle} cx={20} cy={20} r={19} />
		<line className={x} x1="24" y1="24" x2="15" y2= "16" />
		<line className={x} x1="16" y1="24" x2="25" y2= "16" />
  </svg>
)

export default MenuIcon

