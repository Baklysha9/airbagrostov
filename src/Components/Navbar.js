/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import Logo from "../Assets/Logo.png";
import { HiOutlineBars3 } from "react-icons/hi2";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CommentRoundedIcon from "@mui/icons-material/CommentRounded";
import PhoneRoundedIcon from "@mui/icons-material/PhoneRounded";
import { Link } from "react-scroll";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: "О нас",
      icon: <HomeIcon />,
      link: "about",
    },
    {
      text: "Услуги",
      icon: <InfoIcon />,
      link: "service",
    },
    {
      text: "Отзывы",
      icon: <CommentRoundedIcon />,
      link: "comment",
    },
    {
      text: "Контакты",
      icon: <PhoneRoundedIcon />,
      link: "contact",
    },
  ];
  return (
    <nav>
      <div className="nav-logo-container">
        <img src={Logo} alt="" />
      </div>
      <div className="navbar-links-container">
        <Link
          to="about"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          О нас
        </Link>
        <Link
          to="service"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Услуги
        </Link>
        <Link
          to="comment"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Отзывы
        </Link>

        <Link
          to="contact"
          smooth={true}
          duration={500}
          style={{ cursor: "pointer" }}
        >
          Контакты
        </Link>

        <a
          className="primary-button"
          href="tel:89185350508"
          style={{ textDecoration: "none", marginRight: "0" }}
        >
          Позвонить нам
        </a>
      </div>
      <div className="navbar-menu-container">
        <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{ width: 250 }}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}
        >
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <Link
                    to={item.link}
                    smooth={true}
                    duration={500}
                    style={{ cursor: "pointer" }}
                  >
                    {item.text}
                  </Link>
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </nav>
  );
};

export default Navbar;
