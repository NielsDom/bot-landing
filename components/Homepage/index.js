import React from "react"
import Head from "next/head"
import Nav from "../nav"
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import Paper from "@material-ui/core/Paper"
import Typed from "react-typed"
import Footer from "../Footer"
import Explain from "./Explain"

const styles = {
  titleH2: {
    padding: 15,
    display: "flex",
    alignItems: "center",
    background: "#3c4858",
    color: "white"
  }
}

const Homepage = () => (
  <div
    style={{
      backgroundColor: "#e0eafc",
      backgroundImage: "linear-gradient(to left, #e0eafc, #cfdef3)",
      height: "100%",
      display: "flex",
      flexDirection: "column"
    }}
  >
    <Head>
      <title>Home</title>
      <link rel="icon" href="/images/flash.png" />
    </Head>

    <Nav />

    <div
      style={{
        margin: "50px 15px 50px 15px",
        width: "calc(100%-30px)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        color: "#3c4858"
      }}
    >
      <Typography variant="h2" component="h1" gutterBottom>
        Booking Bot for restaurants on Facebook
      </Typography>
      {/* <Paper elevation={4} style={styles.titleH2}>
        <Typography variant="h3" component="h2">
          x30-x50 more return than classic FB Ads
        </Typography>
      </Paper> */}

      <h2>
        <Typed
          strings={[
            "Example feature: book a table",
            "Example feature: order food delivery",
            "Example feature: call the restaurant",
            "Example feature: check the menu"
          ]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap-reverse",
          width: "100%",
          justifyContent: "center",
          marginTop: 30
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            minWidth: 300
          }}
        >
          <div
            style={{
              height: 500,
              backgroundRepeat: "no-repeat",
              backgroundSize: "400px 500px",
              backgroundImage: "url('/images/mobile-frame-png.png')",
              backgroundPosition: "center",
              width: 400,
              textAlign: "center",
              display: "flex",
              justifyContent: "center"
            }}
          >
            <img
              style={{
                width: "252px",
                height: 450,
                marginTop: 10,
                borderRadius: 25
              }}
              src="/images/demophone2.gif"
            />
          </div>
        </div>
        <div
          style={{
            minWidth: 300,
            display: "flex",
            alignItems: "center"
          }}
        >
          <div style={{ textAlign: "center", padding: "0px 15px" }}>
            <Typography
              variant="h5"
              component="h3"
              style={{ fontWeight: "bold" }}
              gutterBottom
            >
              Build your bot in less than 5 minutes:
            </Typography>
            <Button
              style={{ marginTop: 15, marginBottom: 30, fontSize: 25 }}
              size="large"
              variant="contained"
              color="primary"
            >
              Go
            </Button>
          </div>
        </div>
      </div>
    </div>
    <Explain />
    <div
      style={{
        textAlign: "center",
        width: "100%",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <Paper
        elevation={4}
        style={{
          background: "#3c4858",
          color: "white",
          padding: 30
        }}
      >
        <Typography variant="h5" component="h3" gutterBottom>
          Build your bot in less than 5 minutes:
        </Typography>
        <Button
          style={{ marginTop: 15, fontSize: 25 }}
          size="large"
          variant="contained"
        >
          Go
        </Button>
      </Paper>
    </div>
    <Footer />
  </div>
)

export default Homepage
