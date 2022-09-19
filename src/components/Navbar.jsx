import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import { SearchBar } from "./";

const Navbar = () => (
  <Stack direction="row" alignItems="center" p={2} sx={{ position: "sticky", background: '#000', top: 0, justifyContent: "space-between" }}>
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <Stack direction={'row'}>
        <Typography color='red' fontWeight='bold' sx={{ fontSize: { xs: '20px', md: '30px', xl: '40px' } }}>
          NOT A TUBE


        </Typography>
      </Stack>

    </Link >
    <SearchBar />
  </Stack >
);

export default Navbar;
