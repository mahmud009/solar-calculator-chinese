import {
  Box,
  Typography,
  makeStyles,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import PaymentIcon from "images/payment.svg";
import SavingsIcon from "images/savings.svg";
import PlanChart from "./Chart";
import { useEffect } from "react";

export default function Plan({ result, selectedMonths }) {
  const theme = useTheme();
  const sm = useMediaQuery(theme.breakpoints.down("sm"));
  const { chartData } = result;

  const classes = useStyles();
  return (
    <Box mt={3}>
      <Box textAlign="center">
        <Typography variant="h5" className={classes.planName}>
          {result.month} 个月投资计划
        </Typography>
      </Box>

      <Box mt={2} className={classes.planContent}>
        <Box className={classes.paymentSection}>
          <Box className={classes.paymentIconBox} textAlign="center" p={1}>
            <PaymentIcon className={classes.icon} />
          </Box>
          <Box className={classes.paymentContent} p={1}>
            <Box textAlign="center">
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: sm ? 14 : 20,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                }}
              >
                费用
              </Typography>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              alignItems="baseline"
              justifyContent="center"
              mt={1}
            >
              <Typography
                variant="h1"
                style={{
                  color: "white",
                  fontSize: sm ? 36 : 48,
                  fontWeight: 600,
                }}
              >
                ${result.payment.perWeek}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 400,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                  marginLeft: 8,
                }}
              >
                每周
              </Typography>
            </Box>

            <Box textAlign="center" mt={1}>
              <Typography
                variant="subtitle1"
                style={{
                  color: "white",
                  fontSize: sm ? 12 : 16,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                }}
              >
                {result.month} 个月总费用
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="subtitle1" style={{ color: "white" }}>
                ${result.payment.totalCost}
              </Typography>
            </Box>

            <Box textAlign="center" mt={1}>
              <Typography
                variant="subtitle1"
                style={{
                  color: "white",
                  fontSize: sm ? 12 : 16,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                }}
              >
                第一年费用
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="subtitle1" style={{ color: "white" }}>
                ${(result.payment.totalCost / (result.month / 12)).toFixed(2)}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Box className={classes.savingsSection}>
          <Box className={classes.savingsIconBox} textAlign="center" p={1}>
            <SavingsIcon className={classes.icon} />
          </Box>
          <Box className={classes.savingsContent} p={1}>
            <Box textAlign="center">
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: sm ? 14 : 20,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                }}
              >
                预计收益
              </Typography>
            </Box>
            <Box
              textAlign="center"
              display="flex"
              alignItems="baseline"
              justifyContent="center"
              mt={1}
            >
              <Typography
                variant="h1"
                style={{
                  color: "white",
                  fontSize: sm ? 36 : 48,
                  fontWeight: 600,
                }}
              >
                ${result.savings.perWeekNew}
              </Typography>
              <Typography
                variant="h6"
                style={{
                  color: "white",
                  fontSize: 20,
                  fontWeight: 400,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                  marginLeft: 8,
                }}
              >
                每周
              </Typography>
            </Box>

            <Box textAlign="center" mt={1}>
              <Typography
                variant="subtitle1"
                style={{
                  color: "white",
                  fontSize: sm ? 12 : 16,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                }}
              >
                {result.month} 个月总收益
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="subtitle1" style={{ color: "white" }}>
                ${result.savings.yearlySavings}
              </Typography>
            </Box>
            <Box textAlign="center" mt={1}>
              <Typography
                variant="subtitle1"
                style={{
                  color: "white",
                  fontSize: sm ? 12 : 16,
                  fontFamily: "Noto Sans SC",
                  fontWeight: 400,
                }}
              >
                第一年预计收益
              </Typography>
            </Box>
            <Box textAlign="center">
              <Typography variant="subtitle1" style={{ color: "white" }}>
                ${result.savings.firstYearSavings}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      <Box className={classes.planChart}>
        <Box p={4} display="flex" justifyContent="center" alignItems="center">
          <PlanChart {...{ chartData }} />
        </Box>
      </Box>
    </Box>
  );
}
const useStyles = makeStyles((theme) => ({
  planChart: {
    backgroundColor: "#fafafa",
  },
  planName: {
    fontFamily: "Poppins",
    fontSize: 20,
    fontWeight: 600,
  },
  planContent: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
  },
  paymentIconBox: {
    backgroundColor: "#3361C5",
  },
  paymentContent: {
    backgroundColor: "#3361C5",
    marginTop: 4,
  },
  savingsIconBox: {
    backgroundColor: "#4C9A5A",
  },
  savingsContent: {
    backgroundColor: "#4C9A5A",
    marginTop: 4,
  },
  icon: {
    width: 40,
    color: "white",
  },
}));
