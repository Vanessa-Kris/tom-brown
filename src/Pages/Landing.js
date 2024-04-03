import {
  Box,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React from "react";
import { FaLeaf } from "react-icons/fa6";

export default function Landing() {
  return (
    <Box>
      <Grid
        container
        className="bg"
        sx={{ justifyContent: "center", alignItems: "center", display: "flex" }}
      >
        <Grid item md={4} xs={12} sx={{ pl: { md: 4, xs: 2 } }}>
          <Box component="img" src="/logo.png" sx={{ width: "150px" }} />
          <Box>
            <Typography variant="h3" sx={{ fontWeight: 600, my: 3 }}>
              Tom Brown Whole Meal
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
              Vivamus lacinia, lacus nec tristique bibendum, velit libero
              consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
              Phasellus quis libero nec libero tristique dapibus. Cras nec lacus
              vel magna posuere ultricies.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={4} xs={12}>
          <Box
            component="img"
            src="/tbwm.png"
            sx={{ width: "100%", rotate: "-10deg" }}
          />
        </Grid>
        <Grid item md={3} xs={12}>
          <List sx={{ color: { md: "white", xs: "black" } }}>
            <ListItem>
              <ListItemIcon>
                <FaLeaf />
              </ListItemIcon>
              <ListItemText>Yellow Corn</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaLeaf />
              </ListItemIcon>
              <ListItemText>Millet</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaLeaf />
              </ListItemIcon>
              <ListItemText>Guinea Corn</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaLeaf />
              </ListItemIcon>
              <ListItemText>Tiger Nut</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaLeaf />
              </ListItemIcon>
              <ListItemText>Soya Beans</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaLeaf />
              </ListItemIcon>
              <ListItemText>Dates</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FaLeaf />
              </ListItemIcon>
              <ListItemText>Soya Beans</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
      {/*  */}
      <Box>
        <Grid
          container
          columnSpacing={4}
          rowSpacing={4}
          sx={{
            justifyContent: "center",
            alignItems: "center",
            py: 8,
            px: { md: 20, xs: 2 },
          }}
        >
          <Grid item md={6} xs={12}>
            <Box component="img" src="/pie.jpeg" sx={{ width: "100%" }} />
          </Grid>
          <Grid item md={6} xs={12}>
            <Typography variant="h5" sx={{ fontWeight: 600, my: 3 }}>
              Explore Tom Brown Recipies
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              dignissim purus eu nunc ullamcorper, vel convallis ante tincidunt.
              Vivamus lacinia, lacus nec tristique bibendum, velit libero
              consequat purus, ut finibus ex lectus eget nisi. Nulla facilisi.
              Phasellus quis libero nec libero tristique dapibus. Cras nec lacus
              vel magna posuere ultricies.
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}
