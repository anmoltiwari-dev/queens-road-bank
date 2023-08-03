"use client";
import styles from "./page.module.css";
import {
  Drawer,
  Box,
  Typography,
  Accordion,
  AccordionSummary,
  Divider,
  AccordionDetails,
  Button,
  IconButton,
  Container,
  InputAdornment,
  Input,
  List,
  ListItem,
  Skeleton,
} from "@mui/material";
import { styled, useTheme } from "@mui/material/styles";
import PersonOutline from "@mui/icons-material/PersonOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
export default function Home() {
  const theme = useTheme();
  return (
    <Container
      maxWidth="xl"
      sx={{
        padding: "1rem",
      }}
    >
      <Input
        sx={{
          border: "1px solid #d3d3d3",
          padding: "5px",
          color: theme.palette.text.primary,
          fontWeight: "600",
          bgcolor: "#fff",
          position: "relative",
          left: "75%",
        }}
        value="Tina Li / 0x009075"
        startAdornment={
          <InputAdornment position="start">
            <PersonOutline />
          </InputAdornment>
        }
      />
      <Divider
        sx={{
          marginY: "1rem",
        }}
        variant="fullWidth"
      />
      <Box position="absolute" left="400px" width="auto">
        <Typography fontWeight="600" color={theme.palette.primary.main}>
          Unlisted Equity Token
        </Typography>
        <Box display="flex">
          <Box display="flex" flexDirection="column">
            <Box width="550px" mt="1rem">
              <List
                disablePadding
                sx={{
                  border: `1px solid #d3d3d3`,
                  width: "100%",
                }}
              >
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box px="1rem">
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Instrument Details
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    gap=".5rem"
                    alignItems="center"
                    width="100%"
                    px="1rem"
                  >
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Contract Address
                    </Typography>
                    <Skeleton variant="rounded" width={210} height={16} />
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    gap="6.5rem"
                    alignItems="center"
                    width="100%"
                    px="1rem"
                  >
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Type
                    </Typography>
                    <Skeleton variant="rounded" width={210} height={16} />
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    gap="5.5rem"
                    alignItems="center"
                    width="100%"
                    px="1rem"
                  >
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Status
                    </Typography>
                    <Skeleton variant="rounded" width={210} height={16} />
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    px="1rem"
                  >
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Supply
                    </Typography>
                    <Skeleton variant="rounded" width={210} height={16} />
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#D3D3D3",
                        width: "95px",
                      }}
                    >
                      <Typography
                        textTransform="capitalize"
                        color={theme.palette.text.primary}
                      >
                        Transfer
                      </Typography>
                    </Button>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    px="1rem"
                  >
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Mint
                    </Typography>
                    <Skeleton variant="rounded" width={210} height={16} />
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#D3D3D3",
                        width: "95px",
                      }}
                    >
                      <Typography
                        textTransform="capitalize"
                        color={theme.palette.text.primary}
                      >
                        Mint
                      </Typography>
                    </Button>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    gap="1rem"
                    alignItems="center"
                    justifyContent="space-between"
                    width="100%"
                    px="1rem"
                  >
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Burn
                    </Typography>
                    <Skeleton variant="rounded" width={210} height={16} />
                    <Button
                      variant="outlined"
                      sx={{
                        borderColor: "#D3D3D3",
                        width: "95px",
                      }}
                    >
                      <Typography
                        textTransform="capitalize"
                        color={theme.palette.text.primary}
                      >
                        Burn
                      </Typography>
                    </Button>
                  </Box>
                </ListItem>
              </List>
            </Box>
            <Box width="550px" mt="1rem">
              <List
                disablePadding
                sx={{
                  border: `1px solid #d3d3d3`,
                  width: "100%",
                }}
              >
                <ListItem disableGutters>
                  <Box px="1rem">
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Log
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px="1rem"
                  >
                    <Box>
                      <AccountCircleIcon />
                    </Box>
                    <Box position="relative" left="150px">
                      <Skeleton variant="rounded" width={100} height={16} />
                    </Box>
                    <Box position="relative" left="300px">
                      <Skeleton variant="rounded" width={100} height={16} />
                    </Box>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px="1rem"
                  >
                    <Box>
                      <AccountCircleIcon />
                    </Box>
                    <Box position="relative" left="150px">
                      <Skeleton variant="rounded" width={100} height={16} />
                    </Box>
                    <Box position="relative" left="300px">
                      <Skeleton variant="rounded" width={100} height={16} />
                    </Box>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box>
            <Box width="350px" ml="1rem" mt="1rem">
              <List
                disablePadding
                sx={{
                  border: `1px solid #d3d3d3`,
                  width: "100%",
                }}
              >
                <ListItem disableGutters>
                  <Box
                    p="1rem"
                    width="100%"
                    sx={{
                      borderBottom: "1px solid #d3d3d3",
                    }}
                  >
                    <Typography
                      fontWeight="600"
                      color={theme.palette.text.primary}
                    >
                      Off Chain
                    </Typography>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px="1rem"
                  >
                    <Box display="flex" gap=".5rem">
                      <Box>
                        <AccountBalanceIcon />
                      </Box>
                      <Box display="flex" flexDirection="column" gap=".5rem">
                        <Typography
                          fontWeight="600"
                          color={theme.palette.text.primary}
                        >
                          Legal
                        </Typography>
                        <Box>
                          <Skeleton variant="rounded" width={250} height={16} />
                        </Box>
                        <Box>
                          <Skeleton variant="rounded" width={100} height={16} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px="1rem"
                  >
                    <Box display="flex" gap=".5rem">
                      <Box>
                        <WorkOutlineIcon />
                      </Box>
                      <Box display="flex" flexDirection="column" gap=".5rem">
                        <Typography
                          fontWeight="600"
                          color={theme.palette.text.primary}
                        >
                          Docs
                        </Typography>
                        <Box>
                          <Skeleton variant="rounded" width={250} height={16} />
                        </Box>
                        <Box>
                          <Skeleton variant="rounded" width={100} height={16} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px="1rem"
                  >
                    <Box display="flex" gap=".5rem">
                      <Box>
                        <FileCopyIcon />
                      </Box>
                      <Box display="flex" flexDirection="column" gap=".5rem">
                        <Typography
                          fontWeight="600"
                          color={theme.palette.text.primary}
                        >
                          Prospectus
                        </Typography>
                        <Box>
                          <Skeleton variant="rounded" width={250} height={16} />
                        </Box>
                        <Box>
                          <Skeleton variant="rounded" width={100} height={16} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
                <ListItem
                  disableGutters
                  sx={{
                    borderBottom: "1px solid #d3d3d3",
                  }}
                >
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    px="1rem"
                  >
                    <Box display="flex" gap=".5rem">
                      <Box>
                        <BusinessCenterOutlinedIcon />
                      </Box>
                      <Box display="flex" flexDirection="column" gap=".5rem">
                        <Typography
                          fontWeight="600"
                          color={theme.palette.text.primary}
                        >
                          Custodian
                        </Typography>
                        <Box>
                          <Skeleton variant="rounded" width={250} height={16} />
                        </Box>
                        <Box>
                          <Skeleton variant="rounded" width={100} height={16} />
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </ListItem>
              </List>
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
