// theme.js
import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { colors } from "@mui/material";
import _ from "lodash";
import typography from "./typography";

const baseOptions = {
  typography,
  components: {
    MuiTableHead: {
      styleOverrides: {
        root: {
          backgroundColor: "#175CD3",
          color: "black",
        },
      },
    },
    MuiPickersDay: {
      styleOverrides: {
        root: {
          color: "#000",
          "&:hover": {
            backgroundColor: "#1F9874",
            color: "#ffffff",
          },
          "&.Mui-selected": {
            backgroundColor: "#1F9874",
            color: "#ffffff",
          },
          "&.Mui-disabled": {
            color: "#BDBDBD",
            backgroundColor: "transparent",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "8px",
          textTransform: "none",
          fontSize: theme.typography.button.fontSize, // Using theme for typography
          fontWeight: theme.typography.button.fontWeight,
          [theme.breakpoints.down("xl")]: {
            fontSize: ".8rem",
          },
          [theme.breakpoints.down("lg")]: {
            fontSize: ".7rem",
          },
          [theme.breakpoints.down("md")]: {
            fontSize: ".87rem",
          },
          [theme.breakpoints.down("sm")]: {
            fontSize: ".87rem",
          },
        }),
        contained: ({ theme }) => ({
          backgroundColor: "#F63D68",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "8px 20px",
          border: "1px solid #F63D68",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#F63D68",
            border: "1px solid #F63D68",
          },
          boxShadow: "none",
          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
            backgroundColor: "#F63D68",
            color: "#fff",
            border: "1px solid #D0D0D0",
          },
        }),
        containedEdit: ({ theme }) => ({
          backgroundColor: "#0A2262",
          color: "#FFFFFF",
          borderRadius: "8px",
          padding: "8px 20px",
          border: "1px solid #0A2262",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#0A2262",
            border: "1px solid #0A2262",
          },
          boxShadow: "none",
          "&.Mui-disabled": {
            opacity: 0.5,
            cursor: "not-allowed",
            backgroundColor: "#F63D68",
            color: "#fff",
            border: "1px solid #D0D0D0",
          },
        }),
        outlined: ({ theme }) => ({
          color: "#26272B",
          border: "1px solid #D1D1D6",
          padding: "8px 20px",
          "&:hover": {
            backgroundColor: "#FFFFFF",
            color: "#F63D68",
            border: "1px solid #F63D68",
          },
          boxShadow: "none",
        }),
        text: ({ theme }) => ({
          fontSize: theme.typography.button.fontSize,
        }),
        white: {
          backgroundColor: "white",
          color: "#1849A9",
          padding: "10px 30px",
          borderRadius: "8px",
          border: "1px solid white",
          "&:hover": {
            backgroundColor: "#F63D68",
            color: "white",
            border: "1px solid white",
          },
          boxShadow: "none",
        },
      },

      variants: [
        {
          props: { variant: "customContained" },
          style: {
            backgroundColor: "#EAECF0",
            color: "#667085",
            padding: "10px 30px",
            borderRadius: "8px",
            border: "1px solid #EAECF0",
            "&:hover": {
              backgroundColor: "#FFFFFF",
              color: "#667085",
              border: "1px solid #EAECF0",
            },
            boxShadow: "none",
          },
        },
        {
          props: { variant: "customOutlined" },
          style: {
            padding: "8px 20px",
            border: "1px solid #FFFFFF",
            color: "#FFFFFF",
            "&:hover": {
              backgroundColor: "transparent",
              borderColor: "#2E90FA",
              color: "#2E90FA",
            },
          },
        },
      ],
    },

    MuiTable: {
      styleOverrides: {
        root: {
          "& .MuiTableHead-root": {
            "& .MuiTableCell-head": {
              fontSize: typography.button.fontSize,
              fontWeight: typography.button.fontWeight,
              color: "#FFFFFF",
            },
          },
          "& .MuiTableBody-root": {
            "& .MuiTableCell-root": {
              fontSize: typography.tableCell.fontSize,
              fontWeight: typography.tableCell.fontWeight,
              color: "#131316",
              borderColor: "#E4E4E7",
            },
          },
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        root: {
          "& .MuiTab-root": {
            flex: 1,
            textAlign: "center",
            borderRadius: "8px",
            "&.Mui-selected": {
              backgroundColor: "#26272B",
              color: "#fff",
            },
            "&:not(.Mui-selected)": {
              color: "#666",
            },
          },
          ".MuiTabs-indicator": {
            display: "none",
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: "none",
          textTransform: "none",
          "&.Mui-selected": {
            color: "#3f51b5",
            fontWeight: 400,
            fontSize: typography.body5.fontSize,
          },
          "&:not(.Mui-selected)": {
            fontWeight: 400,
            fontSize: typography.body5.fontSize,
          },
          "&:hover": {
            color: "#3f51b5", // Change the color on hover
            opacity: 1,
          },
        },
      },
    },
    // Customize calendar components
    MuiPickersDay: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit, sans-serif", // Apply font family to day numbers
          fontSize: "12px !important", // Font size for the day numbers
          color: "#00000099", // Font color for the day numbers
          "&.Mui-selected": {
            fontWeight: 600, // Increase font weight for the selected year
            color: "#fff", // Color for selected year
            backgroundColor: "#F63D68 !important",
          },
        },
        dayOutsideMonth: {
          color: "#E0E0E0", // Color for days outside the current month
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontFamily: "Outfit, sans-serif", // Font family for month and year label
          fontSize: "12px !important", // Font size for the label
          fontWeight: 500,
        },
      },
    },
    MuiDayCalendar: {
      styleOverrides: {
        weekDayLabel: {
          fontFamily: "Outfit, sans-serif", // Font family for weekday labels
          fontSize: "12px !important", // Font size for weekday labels
          color: "#9E9E9E", // Font color for weekday labels
        },
      },
    },
    MuiPickersCalendarHeader: {
      styleOverrides: {
        label: {
          fontFamily: "Outfit, sans-serif", // Font family for month and year label
          fontSize: "16px !important", // Font size for the label
          fontWeight: 500,
          color: "#F63D68", // Custom font color
        },
      },
    },
    MuiPickersYear: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit, sans-serif", // Apply font family to the year numbers
          fontSize: "16px !important", // Font size for year numbers
          color: "rgb(21, 112, 239)", // Custom font color for the year
          "&.Mui-selected": {
            fontWeight: 600, // Increase font weight for the selected year
            color: "#F63D68", // Color for selected year
          },
        },
        yearButton: {
          fontFamily: "Outfit, sans-serif", // Apply font family to year buttons
          fontSize: "16px !important", // Font size for year buttons
          color: "#F63D68", // Custom font color for the year
          "&.Mui-selected": {
            fontWeight: 500, // Increase font weight for the selected year
            color: "#fff",
            backgroundColor: "#F63D68 !important",
          },
          "&.Mui-disabled": {
            color: "#E0E0E0", // Color for disabled year
          },
        },
      },
    },

    MuiSelect: {
      styleOverrides: {
        select: {
          padding: "3px 12px",
          fontFamily: "Outfit, sans-serif",
          fontSize: "16px",
          color: "#98A2B3 !important",
          fontWeight: "400",
        },
        icon: {
          color: "#00000099",
        },
      },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          fontFamily: "Outfit, sans-serif",
          fontSize: "14px !important",
          color: "#333",
          "&:hover": {
            backgroundColor: "#f4f4f4",
          },
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          fontSize: "12px !important",
          fontWeight: "400",
          wordBreak: "break-word", // Corrected the property name
          borderRadius: "10px",
          // Styles for error severity
          "&.MuiAlert-standardError": {
            backgroundColor: "#FFF4F3 !important", // Light red background for error
            color: "#F04438 !important", // Dark red text for error
            border: "1px solid #FF847B",
          },

          // Styles for info severity
          "&.MuiAlert-standardInfo": {
            backgroundColor: "#d1ecf1 !important", // Light blue background for info
            color: "#0c5460 !important", // Dark blue text for info
            border: "1px solid #0c5460",
          },

          // Styles for success severity
          "&.MuiAlert-standardSuccess": {
            backgroundColor: "#F3FFF3 !important", // Light green background for success
            color: "#211E2C !important", // Dark green text for success
            border: "0.53px solid #A1E199",
          },

          // Styles for warning severity
          "&.MuiAlert-standardWarning": {
            backgroundColor: "#fff3cd !important", // Light yellow background for warning
            color: "#856404 !important", // Dark yellow text for warning
            border: "1px solid #856404",
          },
        },
        action: {
          padding: "8px", // Action button styling
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          backgroundColor: "#f5f5f5", // Customize background color
          boxShadow: "none", // Remove default shadow
          borderRadius: "8px", // Add border-radius
          "&:before": {
            display: "none", // Remove the default divider line before accordion
          },
          "&.Mui-expanded": {
            margin: "auto", // Customize the margin when expanded
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          backgroundColor: "white", // Customize summary background
          color: "#26272b",
          borderRadius: "8px", // Add border-radius
          borderTop: "1px solid #f4f4f5",
          minHeight: "48px", // Adjust height
          "&.Mui-expanded": {
            minHeight: "48px", // Ensure height stays consistent when expanded
          },
        },
        content: {
          margin: "12px 0", // Add margin between content
          "&.Mui-expanded": {
            margin: "12px 0", // Ensure consistent margin when expanded
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          padding: "16px", // Customize padding inside details
          fontSize: "14px", // Adjust font size
          backgroundColor: "#ffffff", // Customize background
        },
      },
    },
  },
};

const themesOptions = [
  {
    palette: {
      mode: "light",
      primary: {
        main: "#F63D68",
        light: "#2E90FA",
        dark: "#102A56",
        contrastText: "#FFFFFF",
        50: "#F5FAFF",
        100: "#FFE4E8",
        200: "#D1E9FF",
        300: "#B2DDFF",
        400: "#84CAFF",
        500: "#F63D68",
        600: "#E31B54",
        700: "#175CD3",
        800: "#1849A9",
        900: "#101828",
      },
      neutral: {
        main: "#51525C",
        light: "#FAFAFA",
        dark: "#131316",
        contrastText: "#FFFFFF",
        50: "#FCFCFC",
        100: "#FAFAFA",
        200: "#E4E4E7",
        300: "#D0D5DD",
        400: "#98A2B3",
        500: "#667085",
        600: "#51525C",
        700: "#344054",
        800: "#182230",
        900: "#101828",
        950: "#0C111D",
      },
      background: {
        default: "#fff",
        dark: "#f3f7f9",
        paper: colors.common.white,
      },
      action: {
        primary: "red",
      },
      warning: {
        main: "#ffae33",
        dark: "#ffae33",
        light: "#fff1dc",
      },
      success: {
        main: "#54e18c",
        dark: "#54e18c",
        light: "#e2faec",
      },
      error: {
        main: "#DC0404",
        dark: "#DC0404",
        light: "#DC0404",
      },
      text: {
        primary: "#fff",
        secondary: "#848484",
      },
      common: {
        black: "#222222",
      },
    },
    shadows: Array(25).fill("none"),
  },
  {
    palette: {
      mode: "dark",
      primary: {
        main: "#8A85FF",
        light: "#9D9DFF",
        dark: "#6E6BFF",
        contrastText: "#FFFFFF",
      },
      secondary: {
        main: "#6E759F",
        light: "#8A8B9E",
        dark: "#4E5D7D",
        contrastText: "#FFFFFF",
      },
      background: {
        default: "#282C34",
        paper: "#282C34",
      },
      text: {
        primary: "#F5F5F5",
        secondary: "#B9B9B9",
      },
    },
    shadows: Array(25).fill("none"),
  },
];

export const createMuiTheme = (config = {}) => {
  let themeOptions = themesOptions.find(
    (theme) => theme.palette.mode === config.theme
  );

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createTheme(
    _.merge({}, baseOptions, themeOptions, { direction: config.direction })
  );
  if (config.responsiveFontSizes) {
    theme = responsiveFontSizes(theme);
  }

  return theme;
};
