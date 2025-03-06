const typography = {
  fontFamily: "Outfit , Lexend, sans-serif",
  // 60px font
  h1: {
    fontSize: "3.75rem", // 60px / 16px
    fontWeight: 600,
    "@media (max-width:1199px)": { fontSize: "3rem" }, // 50px / 16px
    "@media (max-width:899px)": { fontSize: "2rem" }, // 42px / 16px
    "@media (max-width:799px)": { fontSize: "1.5rem" }, // 42px / 16px
    "@media (max-width:599px)": { fontSize: "1.5rem" }, // 36px / 16px
  },
  // 52px font
  h2: {
    fontSize: "3.25rem", // 52px / 16px
    fontWeight: 800,
    "@media (max-width:1199px)": { fontSize: "2.8125rem" }, // 45px / 16px
    "@media (max-width:899px)": { fontSize: "2.375rem" }, // 38px / 16px
    "@media (max-width:599px)": { fontSize: "2.00rem" }, // 32px / 16px
  },
  // 48px px font
  h3: {
    fontSize: "3.0rem", // 48px / 16px
    fontWeight: 700,
    "@media (max-width:1199px)": { fontSize: "2.5rem" }, // 40px / 16px
    "@media (max-width:899px)": { fontSize: "2.25rem" }, // 32px / 16px
    "@media (max-width:599px)": { fontSize: "1.875rem" }, // 26px / 16px
  },
  h4: {
    fontSize: "3.0rem", // 48px / 16px
    fontWeight: 500,
    "@media (max-width:1199px)": { fontSize: "2.5rem" }, // 40px / 16px
    "@media (max-width:899px)": { fontSize: "2.0rem" }, // 32px / 16px
    "@media (max-width:599px)": { fontSize: "1.75rem" }, // 28px / 16px
  },
  // 40px font
  h5: {
    fontSize: "2.5rem", // 40px / 16px
    fontWeight: 600,
    "@media (max-width:1199px)": { fontSize: "2.1875rem" }, // 34px / 16px
    "@media (max-width:899px)": { fontSize: "1.875rem" }, // 30px / 16px
    "@media (max-width:599px)": { fontSize: "1.5625rem" }, // 26px / 16px
  },

  // 36px font
  h6: {
    fontSize: "2.25rem", // 36px / 16px
    fontWeight: 700,
    "@media (max-width:1199px)": { fontSize: "2.0rem" }, // 32px / 16px
    "@media (max-width:899px)": { fontSize: "1.6875rem" }, // 28px / 16px
    "@media (max-width:599px)": { fontSize: "1.125rem" }, // 24px / 16px
  },
  subtitle1: {
    fontSize: "2.25rem", // 36px / 16px
    fontWeight: 400,
    "@media (max-width:1199px)": { fontSize: "2.0rem" }, // 32px / 16px
    "@media (max-width:899px)": { fontSize: "1.6875rem" }, // 28px / 16px
    "@media (max-width:599px)": { fontSize: "1.125rem" }, // 24px / 16px
  },

  // 32px font
  subtitle2: {
    fontSize: "2.0rem", // 32px / 16px
    fontWeight: 500,
    "@media (max-width:1199px)": { fontSize: "1.6875rem" }, // 28px / 16px
    "@media (max-width:899px)": { fontSize: "1.125rem" }, // 24px / 16px
    "@media (max-width:599px)": { fontSize: "1.0rem" }, // 20px / 16px
  },
  body1: {
    fontSize: "2.0rem", // 32px / 16px
    fontWeight: 600,
    "@media (max-width:1199px)": { fontSize: "1.6875rem" }, // 28px / 16px
    "@media (max-width:899px)": { fontSize: "1.125rem" }, // 24px / 16px
    "@media (max-width:599px)": { fontSize: "1.0rem" }, // 20px / 16px
  },
  // 28px  font
  body2: {
    fontSize: "1.75rem", // 28px / 16px
    fontWeight: 600,
    "@media (max-width:1199px)": { fontSize: "1.5625rem" }, // 25px / 16px
    "@media (max-width:899px)": { fontSize: "1.125rem" }, // 20px / 16px
    "@media (max-width:599px)": { fontSize: "1.0rem" }, // 18px / 16px
  },
  h8: {
    fontSize: "1.75rem",
    fontFamily: "Outfit , Lexend, sans-serif",
    fontWeight: 400,
    "@media (max-width:1199px)": { fontSize: "1.5625rem" }, // 25px / 16px
    "@media (max-width:899px)": { fontSize: "1.125rem" }, // 20px / 16px
    "@media (max-width:599px)": { fontSize: "1.0rem" }, // 18px / 16px
  },
  // 24px  font
  caption: {
    fontSize: "1.5rem", // 24px / 16px
    fontWeight: 600,
    "@media (max-width:1199px)": { fontSize: "1.5rem" }, // 25px / 16px
    "@media (max-width:899px)": { fontSize: "1.125rem" }, // 20px / 16px
    "@media (max-width:599px)": { fontSize: "1.0rem" }, // 18px / 16px
  },
  caption2: {
    fontSize: "1.5rem", // 24px / 16px
    fontWeight: 500,
    fontFamily: "Outfit, sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.5rem" }, // 25px / 16px
    "@media (max-width:899px)": { fontSize: "1.125rem" }, // 20px / 16px
    "@media (max-width:599px)": { fontSize: "1.0rem" }, // 18px / 16px
  },

  // 16px font
  button: {
    fontSize: "1rem",
    fontWeight: 400,
    textTransform: "none",
    fontFamily: "Outfit, sans-serif",
    "@media (max-width:1199px)": { fontSize: "1rem" },
    "@media (max-width:899px)": { fontSize: ".7rem" },
    "@media (max-width:599px)": { fontSize: ".875rem" },
  },
  overlines: {
    fontSize: "1rem",
    fontWeight: 400,
    fontFamily: "Outfit, sans-serif",
    "@media (max-width:1399px)": { fontSize: ".7rem" },
    "@media (max-width:899px)": { fontSize: ".7rem" },
    "@media (max-width:599px)": { fontSize: ".875rem" },
  },

  // 20 px fonts
  overline: {
    fontSize: "1.125rem", // 14px / 16px
    fontWeight: 300,
    fontFamily: "Outfit , Lexend, sans-serif",
    lineHeight: 1.5,
    "@media (max-width:899px)": { fontSize: "1rem" }, // 10px / 16px
    "@media (max-width:599px)": { fontSize: "0.875rem" }, // 8px / 16px
    "@media (max-width:599px)": { fontSize: "0.775rem" }, // 8px / 16px
  },
  overline1: {
    fontSize: "1.5rem", // 24px
    fontWeight: 400,
    fontFamily: "Outfit , Lexend, sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.875rem" }, // 14px / 16px
  },
  overline2: {
    fontSize: "1.25rem", //20px
    fontWeight: 500,
    fontFamily: "Outfit , Lexend, sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.75rem" },
  },
  overline3: {
    fontSize: "1.25rem",
    fontWeight: 600,
    fontFamily: "Outfit , Lexend, sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.85rem" },
  },
  overline4: {
    fontSize: "1.25rem", //20px
    fontWeight: 400,
    fontFamily: "Outfit , Lexend, sans-serif",
    "@media (max-width:1199px)": { fontSize: "1.0rem" }, // 18px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 16px / 16px
    "@media (max-width:599px)": { fontSize: "0.85rem" },
  },

  // 18 px fonts
  body3: {
    fontSize: "1.125rem", // 18px / 16px
    fontFamily: "Outfit , Lexend, sans-serif",
    fontWeight: 500,
    "@media (max-width:1199px)": { fontSize: "1rem" }, // 16px / 16px
    "@media (max-width:899px)": { fontSize: "0.875rem" }, // 14px / 16px
  },

  body4: {
    fontSize: "1.125rem", // 18px / 16px
    fontFamily: "Outfit , Lexend, sans-serif",
    fontWeight: 600,
    "@media (max-width:1199px)": { fontSize: "0.8rem" },
    "@media (max-width:899px)": { fontSize: "0.7rem" }, // 14px / 16px
    "@media (max-width:768px)": { fontSize: "0.7rem" }, // 14px / 16px
    "@media (max-width:599px)": { fontSize: "0.625rem" }, // 12px / 16px
  },
  // 16 px fonts
  body5: {
    fontSize: "1.0rem", //16px
    fontFamily: "Outfit , Lexend, sans-serif",
    fontWeight: 300,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 14px / 16px
    "@media (max-width:899px)": { fontSize: "0.75rem" }, // 12px / 16px
    "@media (max-width:599px)": { fontSize: "0.625rem" }, // 10px / 16px
  },
  body6: {
    fontSize: "1.0rem",
    fontFamily: "Outfit , Lexend, sans-serif",
    fontWeight: 400,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 14px / 16px
    "@media (max-width:899px)": { fontSize: "0.75rem" }, // 12px / 16px
    "@media (max-width:599px)": { fontSize: "0.625rem" }, // 10px / 16px
  },
  body7: {
    fontSize: "1.0rem",
    fontWeight: 500,
    fontFamily: "Outfit , Lexend, sans-serif",
    lineHeight: 1.5,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 14px / 16px
    "@media (max-width:899px)": { fontSize: "0.75rem" }, // 12px / 16px
    "@media (max-width:599px)": { fontSize: "0.625rem" }, // 10px / 16px
  },
  body8: {
    fontSize: "1.0rem",
    fontWeight: 600,
    fontFamily: "Outfit , Lexend, sans-serif",
    lineHeight: 1.5,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 14px / 16px
    "@media (max-width:899px)": { fontSize: "0.75rem" }, // 12px / 16px
    "@media (max-width:599px)": { fontSize: "0.625rem" }, // 10px / 16px
  },

  body9: {
    fontSize: "0.875rem", // 14px / 400
    fontWeight: 400,
    fontFamily: "Outfit , Lexend, sans-serif",
    lineHeight: 1.5,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 12px / 16px
    "@media (max-width:899px)": { fontSize: "0.75rem" }, // 10px / 16px
    "@media (max-width:599px)": { fontSize: "0.7rem" }, // 8px / 16px
  },
  body10: {
    fontSize: "0.875rem", // 14px / 500
    fontWeight: 500,
    fontFamily: "Outfit , Lexend, sans-serif",
    lineHeight: 1.5,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 12px / 16px
    "@media (max-width:899px)": { fontSize: "0.75rem" }, // 10px / 16px
    "@media (max-width:599px)": { fontSize: "0.7rem" }, // 8px / 16px
  },
  body11: {
    fontSize: "0.875rem", // 14px / 16px
    fontWeight: 600,
    fontFamily: "Outfit , Lexend, sans-serif",
    lineHeight: 1.5,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 12px / 16px
  },
  // for tableCell
  tableCell: {
    fontSize: "1.0rem",
    fontFamily: "Outfit , Lexend, sans-serif",
    fontWeight: 400,
    "@media (max-width:1199px)": { fontSize: "0.875rem" }, // 14px / 16px
    "@media (max-width:899px)": { fontSize: "0.8rem" }, // 12px / 16px
    "@media (max-width:599px)": { fontSize: "0.8rem" }, // 10px / 16px
  },
  h7: {
    fontSize: "3.45rem", //55.11px
    fontFamily: "Outfit , Lexend, sans-serif",
    fontWeight: 600,
    "@media (max-width:1199px)": { fontSize: "2.5125rem" }, // 45px / 16px
    "@media (max-width:899px)": { fontSize: "2.375rem" }, // 38px / 16px
    "@media (max-width:599px)": { fontSize: "1.8rem" }, // 32px / 16px
    "@media (max-width:450px)": { fontSize: "1.5rem" }, // 32px / 16px
  },
};

export default typography;
