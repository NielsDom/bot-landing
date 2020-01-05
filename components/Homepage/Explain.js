import React from "react"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"

const Explain = () => {
  return (
    <div
      style={{
        padding: 15,
        width: "calc(100% - 30px)",
        display: "flex",
        justifyContent: "center"
      }}
    >
      <div style={{ color: "#3c4858", maxWidth: 1000 }}>
        <Typography
          variant="h5"
          component="h3"
          gutterBottom
          style={{ fontWeight: "bold", textDecoration: "underline" }}
        >
          Steps:
        </Typography>
        <div style={{ marginBottom: 25 }}>
          <Typography variant="h5" component="body1">
            <div>
              <b>
                1- Setup your bot and connect to your facebook page (~3-5 min)
              </b>
            </div>
            <div>
              Now when people are chatting with your facebook page, they can
              (depending on your settings):{" "}
              <span style={{ textDecoration: "underline" }}>book a table</span>,{" "}
              <span style={{ textDecoration: "underline" }}>order food</span>,{" "}
              <span style={{ textDecoration: "underline" }}>
                apply promo code
              </span>{" "}
              & calling you. Also, they get all important information needed
              before booking:{" "}
              <span style={{ textDecoration: "underline" }}>price</span>,{" "}
              <span style={{ textDecoration: "underline" }}>menu</span> &{" "}
              <span style={{ textDecoration: "underline" }}>location</span>.
            </div>
          </Typography>
        </div>

        <div>
          <Typography variant="h5" component="body1">
            <b>2 (optional)-</b> To use Facebook Ads x30 to x50 more
            effectively, you should promote your facebook page's chat to let{" "}
            <span style={{ textDecoration: "underline" }}>
              user book quickly and make all information available fast in one
              place
            </span>
            . Nowadays it is one of the best facebook Ads strategy for
            restaurant, because of its low frictions. <b>Examples:</b>
          </Typography>
          <div
            style={{
              display: "flex",
              width: "100%",
              textAlign: "center",
              flexWrap: "wrap",
              marginTop: 10,
              justifyContent: "space-evenly"
            }}
          >
            <Paper
              elevation={4}
              style={{ background: "#3c4858", padding: 15, marginTop: 15 }}
            >
              <div
                style={{
                  width: "100%",
                  textAlign: "center"
                }}
              >
                <Typography
                  variant="h5"
                  component="body1"
                  style={{ color: "white" }}
                >
                  <b>Good Strategy</b>
                  <div>Up to x50 </div>
                  <div>more conversion</div>
                </Typography>
              </div>
              <div style={{ position: "relative", marginTop: 15 }}>
                <img
                  style={{ maxWidth: 260, width: "100%" }}
                  src="/images/ExampleGood.PNG"
                />
                <div
                  style={{
                    position: "absolute",
                    bottom: 62,
                    right: 5,
                    border: "6px solid green",
                    width: 100,
                    height: 30
                  }}
                ></div>
                <div
                  style={{
                    position: "absolute",
                    bottom: 27,
                    width: 200,
                    right: 5,
                    background: "green",
                    color: "white",
                    padding: 2
                  }}
                >
                  After clicking, bot will engage chat
                </div>
              </div>
            </Paper>
            <Paper
              elevation={4}
              style={{ background: "#ff6e54", padding: 15, marginTop: 15 }}
            >
              <div
                style={{
                  width: "100%",
                  textAlign: "center"
                }}
              >
                <Typography
                  variant="h5"
                  component="body1"
                  style={{ color: "white" }}
                >
                  <b>Bad strategy</b>
                </Typography>
              </div>
              <div style={{ marginTop: 15 }}>
                <img
                  src="/images/notGood1.PNG"
                  style={{ maxWidth: 300, width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="/images/notGood2.PNG"
                  style={{ maxWidth: 300, width: "100%" }}
                />
              </div>
              <div>
                <img
                  src="/images/notGood3.PNG"
                  style={{ maxWidth: 300, width: "100%" }}
                />
              </div>
            </Paper>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Explain
