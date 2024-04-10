import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: "transparent", width: "100%" }}>
      <Box position="static">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            sx={{ fontSize: { md: "27px", xs: "15px" } }}
            label="Yellow Corn"
            {...a11yProps(0)}
          />
          <Tab
            sx={{ fontSize: { md: "27px", xs: "15px" } }}
            label="Millet"
            {...a11yProps(1)}
          />
          <Tab
            sx={{ fontSize: { md: "27px", xs: "15px" } }}
            label="Guinea Corn"
            {...a11yProps(2)}
          />
          <Tab
            sx={{ fontSize: { md: "27px", xs: "15px" } }}
            label="Soya Bean"
            {...a11yProps(3)}
          />
          <Tab
            sx={{ fontSize: { md: "27px", xs: "15px" } }}
            label="Tiger Nut"
            {...a11yProps(4)}
          />
          <Tab
            sx={{ fontSize: { md: "27px", xs: "15px" } }}
            label="Dates"
            {...a11yProps(5)}
          />
        </Tabs>
      </Box>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Box mx="auto" align="center" sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src="/corn1.jpeg"
                  alt="corn"
                  sx={{ width: "20%", borderRadius: "5%" }}
                />
                <Typography sx={{ px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
                <Typography sx={{ py: 3, px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Box mx="auto" align="center" sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src="/millet.jpeg"
                  alt="corn"
                  sx={{ width: "20%", borderRadius: "5%" }}
                />
                <Typography sx={{ px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
                <Typography sx={{ py: 3, px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Box mx="auto" align="center" sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src="/guinea.jpeg"
                  alt="corn"
                  sx={{ width: "20%", borderRadius: "5%" }}
                />
                <Typography sx={{ px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
                <Typography sx={{ py: 3, px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Box mx="auto" align="center" sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src="/millet2.jpeg"
                  alt="corn"
                  sx={{ width: "20%", borderRadius: "5%" }}
                />
                <Typography sx={{ px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
                <Typography sx={{ py: 3, px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={4} dir={theme.direction}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item md={7} xs={7}>
              <Box mx="auto" align="center" sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src="/tigernut.jpeg"
                  alt="corn"
                  sx={{ width: "50%", borderRadius: "5%" }}
                />
              </Box>
            </Grid>
            <Grid item md={5} xs={5}>
              <Box mx="auto" align="center" sx={{ width: "100%" }}>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel value={value} index={5} dir={theme.direction}>
          <Grid container>
            <Grid item md={12} xs={12}>
              <Box mx="auto" align="center" sx={{ width: "100%" }}>
                <Box
                  component="img"
                  src="/dates.jpeg"
                  alt="corn"
                  sx={{ width: "20%", borderRadius: "5%" }}
                />
                <Typography sx={{ px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  dignissim purus eu nunc ullamcorper, vel convallis ante
                  tincidunt.
                </Typography>
                <Typography sx={{ py: 3, px: { md: 70, xs: 0 } }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
}
