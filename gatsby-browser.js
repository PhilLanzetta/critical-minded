import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./src/components/global.css"

export const shouldUpdateScroll = ({
  routerProps: { location },
  prevRouterProps,
}) => {
  window.history.scrollRestoration = "manual"
  window.scrollTo(0, 0)

  return false
}
