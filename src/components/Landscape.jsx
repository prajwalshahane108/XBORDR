import React from "react"
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Box, Typography } from "@mui/material"
import { createTheme, ThemeProvider } from "@mui/material/styles"

// Custom theme for specific colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#4CAF50", // Green header background
    },
    secondary: {
      main: "#FF0000", // Red text and borders
    },
    info: {
      main: "#0088CC", // Blue for Stablecoin row
    },
  },
})

// Table data
const rows = [
  {
    paymentType: "Credit Card",
    transactionFee: "2-3% + $0.30",
    timeToSettle: "Instant to Merchant",
    notes: "High fees for Merchants. Chargeback risk.",
  },
  {
    paymentType: "Debit Card",
    transactionFee: "Regulated: 0.05% + $0.21\nDurbin Amendment: 0.9% + $0.15",
    timeToSettle: "Instant to Merchant",
    notes: "Low fees. Subject to Durbin Amendment Cap.",
  },
  {
    paymentType: "ACH Transfer",
    transactionFee: "$0.20 - $1.50",
    timeToSettle: "3-5 Business Days",
    notes: "Limited to domestic transfers. Funding risk.",
  },
  {
    paymentType: "International Wire Transfer",
    transactionFee: "$30-50",
    timeToSettle: "1-5 Business Days",
    notes: "High fees. Exchange rate markups.",
  },
  {
    paymentType: "Remittance Service",
    transactionFee: "6.65% for $200",
    timeToSettle: "Minutes to Days",
    notes: "Varies by service and destination country.",
  },
  {
    paymentType: "Peer to Peer App",
    transactionFee: "P2P: Free\nBusiness: 1-3%",
    timeToSettle: "Instant to 1 Day",
    notes: "Fees apply for instant transfers, credit card use and payments.",
  },
  {
    paymentType: "Stablecoin",
    transactionFee: "$0.01",
    timeToSettle: "Seconds to Minutes",
    notes: "Global availability.\nMinimal fees.",
    isHighlighted: true,
  },
]

export default function CompetitiveLandscape() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: "95%",  m: 4, minHeight: "120vh", alignContent: "center" }}>
        {/* Header */}
        <Box
          sx={{
            // bgcolor: "primary.main",
            p: 2,
            mb: 2,
          }}
        >
          <Typography
            variant="h4"
            sx={{
              color: "secondary.main",
              fontWeight: "bold",
            }}
          >
            COMPETITIVE LANDSCAPE
          </Typography>
        </Box>

        {/* Table */}
        <TableContainer
          component={Paper}
          sx={{
            border: 1,
            borderColor: "secondary.main",
          }}
        >
          <Table>
            <TableHead>
              <TableRow>
                {["Payment Type", "Transaction Fee", "Time To Settle", "Notes"].map((header) => (
                  <TableCell
                    key={header}
                    sx={{
                      fontWeight: "bold",
                      border: 1,
                      borderColor: "secondary.main",
                      p: 2,
                    }}
                  >
                    {header}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.paymentType}>
                  {Object.entries(row).map(([key, value]) => {
                    if (key !== "isHighlighted") {
                      return (
                        <TableCell
                          key={key}
                          sx={{
                            border: 1,
                            borderColor: "secondary.main",
                            color: row.isHighlighted ? "info.main" : "inherit",
                            p: 2,
                            whiteSpace: "pre-line",
                          }}
                        >
                          {value}
                        </TableCell>
                      )
                    }
                    return null
                  })}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </ThemeProvider>
  )
}

