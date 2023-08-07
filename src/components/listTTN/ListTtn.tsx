import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import { useDispatch, useSelector } from "react-redux";
import { removeTtn } from "../../features/ttn/ttnSlice";
import type { RootState } from "../../store/store";

import {
  Grid,
  useMediaQuery,
  ListItemText,
  Avatar,
  ListItemAvatar,
  ListItem,
  List,
  IconButton,
  Box,
} from "@mui/material";

interface Props {
  handleItemClick: (ttn: string) => void;
  handleClose: () => void;
}

export const ListTtn = ({ handleItemClick, handleClose }: Props) => {
  const listTtn = useSelector((state: RootState) => state.ttn.value);
  const dispatch = useDispatch();

  const isDesctop = useMediaQuery("(max-width: 1199px)");
  const isMob = useMediaQuery("(max-width: 525px)");

  return (
    <Box
      component="div"
      sx={{
        pl: "25px",
        pr: "25px",
        maxHeight: "80vh",
        overflowY: "auto",
      }}
    >
      <List sx={{ margin: "-20px" }}>
        <Grid
          container
          spacing={2}
          sx={isDesctop ? { flexDirection: "column" } : {}}
        >
          {listTtn
            ? listTtn.map((oneTtn) => {
                return (
                  <Grid item xs={isDesctop ? 12 : 6} key={oneTtn.id}>
                    <ListItem
                      sx={
                        isMob
                          ? {
                              margin: " 10px 0",
                              padding: "10px 0",
                              backgroundColor: "#ff3d3b",
                              width: "260px",
                            }
                          : {
                              margin: "15px",
                              padding: "20px",
                              backgroundColor: "#ff3d3b",
                              width: "280px",
                            }
                      }
                      key={oneTtn.id}
                    >
                      <ListItemAvatar>
                        <Avatar sx={{ mr: "25px" }}>
                          <FolderIcon />
                        </Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={oneTtn.ttn}
                        onClick={() => {
                          handleItemClick(oneTtn.ttn);
                          handleClose();
                        }}
                        sx={{ cursor: "pointer" }}
                      />
                      <IconButton
                        aria-label="delete"
                        onClick={() => dispatch(removeTtn(oneTtn.id))}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </ListItem>
                  </Grid>
                );
              })
            : null}
        </Grid>
      </List>
    </Box>
  );
};
