import { ArrowUpward, ArrowDownward } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";

interface IProps {
  isSelectedUp: boolean;
  isSelectedDown: boolean;
  top: number | string;
  upOnClick: any;
  downOnClick: any;
  disabledDown?: boolean;
  disabledUp?: boolean;
}

const BoxBtns: React.FC<IProps> = ({
  isSelectedUp,
  isSelectedDown,
  top,
  upOnClick,
  downOnClick,
  disabledDown,
  disabledUp,
}) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: top,
        left: 30,
        background: "#7b8a95",
        borderRadius: 10,
      }}
    >
      <IconButton
        disabled={disabledUp}
        color={isSelectedUp ? "secondary" : "inherit"}
        onClick={upOnClick}
      >
        <ArrowUpward />
      </IconButton>
      <IconButton
        disabled={disabledDown}
        color={isSelectedDown ? "secondary" : "inherit"}
        onClick={downOnClick}
      >
        <ArrowDownward />
      </IconButton>
    </Box>
  );
};

export default BoxBtns;
