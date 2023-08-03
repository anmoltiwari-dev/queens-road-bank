import {
  Drawer,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  Divider,
  AccordionDetails,
  Button,
} from "@mui/material";
import { SetStateAction, useState, Dispatch } from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import StarIcon from "@mui/icons-material/Star";
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined";
import SettingsSuggestOutlinedIcon from "@mui/icons-material/SettingsSuggestOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import TokenOutlinedIcon from "@mui/icons-material/TokenOutlined";
import IntegrationInstructionsOutlinedIcon from "@mui/icons-material/IntegrationInstructionsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

export type SecondaryNavProps = {
  showSecondaryNav: boolean;
  setShowSecondaryNav: Dispatch<SetStateAction<boolean>>;
};

const SecondaryNavButtons = styled(Button)({
  width: "100%",
  justifyContent: "start",
});

const SecondaryNav = ({
  setShowSecondaryNav,
  showSecondaryNav,
}: SecondaryNavProps) => {
  const router = useRouter();
  const theme = useTheme();
  const [selected, setSelected] = useState({
    isSelected: false,
    fieldName: '',
  });

  const [accordionActive, setAccordionActive] = useState<boolean>(false);

  return (
    <>
      <Drawer
        open={showSecondaryNav}
        hideBackdrop={true}
        sx={{
          "& .MuiDrawer-paper": {
            position: "absolute",
            left: "86px",
            height: "95vh",
            marginY: "1rem",
            width: "270px",
            overflowX: "hidden",
            overflowY: 'hidden',
          },
        }}
      >
        <Box>
          <Box p="1rem" display="flex" gap="1rem">
            <Box
              component="img"
              width="30px"
              src="/katakana-sa.png"
              alt="logo"
            ></Box>
            <Typography
              sx={{
                color: theme.palette.primary.main,
              }}
              fontWeight='600'
            >
              Oslo Services
            </Typography>
          </Box>
          <Divider />
          <Box p="1rem" display="flex" justifyContent="space-between">
            <Box display="flex" flexDirection="column">
              <Typography fontWeight="600" color={theme.palette.text.primary}>
                Organization
              </Typography>
              <Typography fontWeight="600" color={theme.palette.primary.main}>
                ECM
              </Typography>
            </Box>
            <Box
              component="img"
              width="50px"
              src="/Flag_of_the_United_States.svg"
              alt="country_flag"
            ></Box>
          </Box>
          <Divider />
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography color={theme.palette.text.primary} fontWeight="600">
                Chain
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion>
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography color={theme.palette.text.primary} fontWeight="600">
                Environment
              </Typography>
            </AccordionSummary>
          </Accordion>
          <Accordion
            sx={{
              margin: "0px!important",
              boxShadow: "none!important",
            }}
            expanded={accordionActive}
            onChange={() => {
                setAccordionActive(!accordionActive);
            }}
          >
            <AccordionSummary expandIcon={<ArrowDropDownIcon />}>
              <Typography color={theme.palette.text.primary} fontWeight="600">
                Production
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                "& .MuiAccordionDetails-root": {
                  padding: "0",
                },
              }}
            >
              <SecondaryNavButtons
                onClick={() => {
                  router.push("/dashboard");
                  setShowSecondaryNav(false);
                  setSelected({
                    isSelected: true,
                    fieldName: 'dashboard'
                  })
                }}
                sx={{
                    bgcolor: selected.fieldName === 'dashboard' ? '#d3d3d3' : '',
                }}
                startIcon={
                  <DashboardOutlinedIcon
                    sx={{
                        color: selected.fieldName === 'dashboard' ? theme.palette.primary.main : theme.palette.text.primary,
                        marginRight: "1rem",
                    }}
                  />
                }
              >
                <Typography
                  fontWeight="600"
                  color={selected.fieldName === 'dashboard' ? theme.palette.primary.main : theme.palette.text.primary}
                  textTransform={"capitalize"}
                >
                  Dashboard
                </Typography>
              </SecondaryNavButtons>
              <SecondaryNavButtons
                startIcon={
                  <SettingsOutlinedIcon
                    sx={{
                        color: theme.palette.text.primary,
                        marginRight: "1rem",
                    }}
                  />
                }
              >
                <Typography
                  fontWeight="600"
                  color={theme.palette.text.primary}
                  textTransform={"capitalize"}
                >
                  Settings
                </Typography>
              </SecondaryNavButtons>
              <SecondaryNavButtons
                startIcon={
                  <IntegrationInstructionsOutlinedIcon
                    sx={{
                      color: theme.palette.text.primary,
                      marginRight: "1rem",
                    }}
                  />
                }
              >
                <Typography
                  fontWeight="600"
                  color={theme.palette.text.primary}
                  textTransform={"capitalize"}
                >
                  API Integration
                </Typography>
              </SecondaryNavButtons>
              <SecondaryNavButtons
                sx={{
                    bgcolor: selected.fieldName === 'tokens' ? '#d3d3d3' : '',
                    color: selected.fieldName === 'tokens' ? theme.palette.primary.main : '',
                }}
                startIcon={
                  <TokenOutlinedIcon
                    sx={{
                      marginRight: "1rem",
                      color: selected.fieldName === 'tokens' ? theme.palette.primary.main : theme.palette.text.primary,
                    }}
                  />
                }
                onClick={() => {
                  router.push("/tokens");
                  setShowSecondaryNav(false);
                  setSelected({
                    isSelected: true,
                    fieldName: 'tokens'
                  })
                }}
              >
                <Typography
                  fontWeight="600"
                  color={selected.fieldName === 'tokens' ? theme.palette.primary.main : theme.palette.text.primary}
                  textTransform={"capitalize"}
                >
                  Tokens
                </Typography>
              </SecondaryNavButtons>
              <SecondaryNavButtons
                startIcon={
                  <TimelineOutlinedIcon
                    sx={{
                      color: theme.palette.text.primary,
                      marginRight: "1rem",
                    }}
                  />
                }
              >
                <Typography
                  fontWeight="600"
                  color={theme.palette.text.primary}
                  textTransform={"capitalize"}
                >
                  Markets
                </Typography>
              </SecondaryNavButtons>
              <SecondaryNavButtons
                startIcon={
                  <StarIcon
                    sx={{
                      color: theme.palette.text.primary,
                      marginRight: "1rem",
                    }}
                  />
                }
              >
                <Typography
                  fontWeight="600"
                  color={theme.palette.text.primary}
                  textTransform={"capitalize"}
                >
                  Issue
                </Typography>
              </SecondaryNavButtons>
            </AccordionDetails>
          </Accordion>
          <Divider />
          <Box p="1rem" display="flex" flexDirection="column" width="100%">
            <SecondaryNavButtons
              startIcon={
                <GroupOutlinedIcon
                  sx={{
                    color: theme.palette.text.primary,
                    marginRight: "1rem",
                  }}
                />
              }
            >
              <Typography
                fontWeight="600"
                color={theme.palette.text.primary}
                textTransform={"capitalize"}
              >
                Teams
              </Typography>
            </SecondaryNavButtons>
            <SecondaryNavButtons
              startIcon={
                <SettingsSuggestOutlinedIcon
                  sx={{
                    color: theme.palette.text.primary,
                    marginRight: "1rem",
                  }}
                />
              }
            >
              <Typography
                fontWeight="600"
                color={theme.palette.text.primary}
                textTransform={"capitalize"}
              >
                Configure
              </Typography>
            </SecondaryNavButtons>
            <SecondaryNavButtons
              startIcon={
                <HealthAndSafetyIcon
                  sx={{
                    color: theme.palette.text.primary,
                    marginRight: "1rem",
                  }}
                />
              }
            >
              <Typography
                fontWeight="600"
                color={theme.palette.text.primary}
                textTransform={"capitalize"}
              >
                Health
              </Typography>
            </SecondaryNavButtons>
          </Box>
        </Box>
      </Drawer>
    </>
  );
};

export default SecondaryNav;
