import React from "react"
import Link from "next/link"
import useMediaQuery from "@material-ui/core/useMediaQuery"

const links = [
  { href: "https://zeit.co/now", label: "ZEIT" },
  { href: "https://github.com/zeit/next.js", label: "GitHub" }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => {
  const matches = useMediaQuery("(min-width:820px)")
  return (
    <nav>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%"
        }}
      >
        <div>
          <Link href="/">
            <img src="/images/flash.png" style={{ width: 120, height: 120 }} />
          </Link>
          <Link href="/">
            <img
              src="/images/blitzLogo.png"
              style={{ height: 120, width: "70%" }}
            />
          </Link>
        </div>
        {matches && (
          <div style={{ display: "flex", color: "#3c4858" }}>
            <Link href="/">
              <div style={{ fontSize: 25, margin: 25 }}>Pricing</div>
            </Link>
            <Link href="/">
              <div style={{ fontSize: 25, margin: 25 }}>Request a demo</div>
            </Link>
          </div>
        )}
      </div>

      <style jsx>{`
        :global(body) {
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
            Helvetica, sans-serif;
        }
        nav {
          text-align: center;
        }
        ul {
          display: flex;
          justify-content: space-between;
        }
        nav > ul {
          padding: 4px 16px;
        }
        li {
          display: flex;
          padding: 6px 8px;
        }
        a {
          color: #067df7;
          text-decoration: none;
          font-size: 13px;
        }
      `}</style>
    </nav>
  )
}

export default Nav
