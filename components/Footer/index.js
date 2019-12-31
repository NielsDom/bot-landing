import React from "react"
import Link from "next/link"

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "center",
        fontSize: 20,
        color: "#3c4858c9"
      }}
    >
      <div style={{ margin: 50 }}>
        <div style={{ fontWeight: "bold" }}>Blitz Bot</div>
        <div>© 2019</div>
      </div>
      <div style={{ margin: 50 }}>
        <div style={{ fontWeight: "bold" }}>About us</div>
        <div>Pricing</div>
        <Link href="/term-of-use">
          <div style={{ cursor: "pointer" }}>Terms of Use</div>
        </Link>
        <Link href="/privacy-policy">
          <div style={{ cursor: "pointer" }}>Privacy policy</div>
        </Link>
      </div>
    </div>
  )
}

export default Footer
