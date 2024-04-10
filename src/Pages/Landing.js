import { Box, Button, Card, Grid, Typography } from "@mui/material";
import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Landing() {
  return (
    <Box>
      <Box sx={{ px: { md: 5, xs: 2 }, py: { ms: 10, xs: 8 } }}>
        <Box sx={{ backgroundImage: "/tbwm.png" }}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid md={6} xs={12} sx={{ pb: 10 }}>
              <Typography variant="h3" textAlign="center" sx={{ py: 3 }}>
                There's a healthier alternative to Custard
              </Typography>
              <Typography variant="body1" textAlign="center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                dignissim purus eu nunc ullamcorper, vel convallis ante
                tincidunt.
              </Typography>

              <Box align="center">
                <Button
                  variant="contained"
                  sx={{
                    textTransform: "none",
                    bgcolor: "black",
                    mt: 9,
                    px: 3,
                  }}
                >
                  Order Now
                </Button>
              </Box>
            </Grid>
            {/*  */}
            <Grid md={6} xs={12}>
              <Box
                component="img"
                src="/tombrown.jpeg"
                sx={{ width: "100%", borderRadius: "5%" }}
              />
            </Grid>
          </Grid>
          <Typography variant="body1" textAlign="center" sx={{ py: 5 }}>
            Rated 4.5 out of 60+ reviews on instagram
          </Typography>
          {/*  */}
          <Typography variant="h4" textAlign="center" sx={{ py: 5 }}>
            Ditch the bad stuff, switch to Tom Brown whole Meal
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ pb: 5 }}>
            A wholesome better option for the whole family, for building muscle
            and
          </Typography>
          {/*  */}
          <Card sx={{ p: 4 }}>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Protein
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in
              Carbohydrates
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Dietary
              fiber
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in omega-3
              and omega-6
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Iron
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Calcium
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Magnesium
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Phosphorus
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Potassium
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Zinc
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Vitamins
              B6, B1, B2, B3, B9, B5, C, E, K
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Copper
            </Typography>
            <Typography variant="body2" sx={{ py: 1 }}>
              {" "}
              <FaArrowRightLong style={{ marginRight: 8 }} /> Rich in Manganese
            </Typography>
          </Card>
          {/*  */}
          <Box sx={{ py: 5 }}>
            <Typography variant="h4" textAlign="center" sx={{ py: 5 }}>
              With Tom Brown versatility can never be a problem
            </Typography>
            <Grid container>
              <Grid item xs={6}>
                <Box
                  component="img"
                  src="/swallow.jpeg"
                  sx={{ width: "100%" }}
                />
              </Grid>
              <Grid item xs={6}>
                <Box
                  component="img"
                  src="/pie2.jpeg"
                  sx={{ width: "100%", height: "83%" }}
                />
              </Grid>
            </Grid>
            <Typography textAlign="center" variant="body2" sx={{ py: 1 }}>
              Check out all our amazing recipies <FaArrowRightLong />
            </Typography>
          </Box>
          {/*  */}
          <Box sx={{ py: 5 }}>
            <Typography variant="h4" textAlign="center" sx={{ py: 5 }}>
              Why Tom Brown Whole Meal?
            </Typography>
            <Typography variant="h2" textAlign="center" sx={{ py: 5 }}>
              98%
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              sx={{ py: 1, px: 4 }}
            >
              of people say they have significant muscle growth after switching
              to Tom Brown
            </Typography>
            <Typography variant="h2" textAlign="center" sx={{ py: 5 }}>
              90%
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              sx={{ py: 1, px: 4 }}
            >
              of people say they have become healthier after switching to Tom
              Brown
            </Typography>
            <Typography variant="h2" textAlign="center" sx={{ py: 5 }}>
              80%
            </Typography>
            <Typography
              textAlign="center"
              variant="body2"
              sx={{ py: 1, px: 4 }}
            >
              of people say they have noticed glowing skin after switching to
              Tom Brown
            </Typography>
          </Box>
          {/*  */}
          <Typography variant="h4" textAlign="center" sx={{ py: 5 }}>
            Still not convinced?
          </Typography>
          <Typography variant="body1" textAlign="center" sx={{ pb: 5 }}>
            Give Tom Brown Whole Meal a try! All the cool people already switch
            to the healthy side
          </Typography>
          <Box align="center">
            <Button
              variant="contained"
              sx={{
                textTransform: "none",
                bgcolor: "black",

                px: 3,
              }}
            >
              Order Now
            </Button>
          </Box>
          <Typography textAlign="center" variant="body2" sx={{ py: 3 }}>
            Check our instagram for other Browinians <FaArrowRightLong />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
