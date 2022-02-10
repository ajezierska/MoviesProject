export const theme = {
  fonts: {
    body: "system-ui, sans-serif",
    heading: '"Avenir Next", sans-serif',
  },
  colors: {
    text: "#000",
    secondaryText: "#fff",
    background: "#fff",
    primary: "#87bcf3",
    secondary: "#a7caed",
    orange: "#dda291",
    rate: "#d93d3d",
    gray: "hsl(0deg 0% 49%)",
    lightGray: "hsl(244deg 1% 67%)",
    added: "#e9d397",
  },
  layout: {
    flexContainer: {
      display: "flex",
      flexDirection: "column",
      "@media (min-width: 768px)": {
        flexDirection: "row",
        justifyContent: "space-between",
      },
    },
    filterContainer: {
      display: "flex",
      flexDirection: "column",
      "@media (min-width: 768px)": {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
      },
    },
    sortContainer: {
      "@media (min-width: 768px)": {
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      },
    },
    movieListContainer: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      minHeight: "15rem",
      a: {
        textDecoration: "none",
      },
    },
    movieImageContainer: {
      flexDirection: "column",
      display: "flex",
      justifyContent: "space-between",
      height: "100%",
    },
  },
  grids: {
    mainGrid: {
      gridTemplateColumns: "1fr",
      maxWidth: "70rem",
      margin: "auto",
      "@media (min-width: 768px) and (max-width: 1023px)": {
        gridTemplateColumns: "1fr 1fr",
      },
      "@media (min-width: 1024px)": {
        gridTemplateColumns: "1fr 1fr 1fr",
      },
    },
  },
  images: {
    fullWidth: {
      width: "100%",
    },
  },
  buttons: {
    default: {
      cursor: "pointer",
    },
    small: {
      fontSize: "0.7rem",
      padding: 1,
      width: "48%",
      marginTop: 1,
      marginBottom: 2,
      textTransform: "uppercase",
      cursor: "pointer",
      height: "2rem",
      minWidth: "10rem",
    },
    moviePage: {
      padding: 1,
      border: "1px solid gray",
      background: "secondaryText",
      cursor: "pointer",
      marginBottom: 2,
      marginTop: 1,

      a: {
        textDecoration: "none",
        textTransform: "uppercase",
        fontSize: "0.8rem",
        color: "gray",
        ":hover": {
          color: "rate",
        },
      },
    },
    backButton: {
      a: {
        color: "text",
      },
    },
  },
  forms: {
    search: {
      marginBottom: 2,
      outlineColor: "orange",
      "@media (min-width: 768px)": {
        width: "30rem",
        marginBottom: 0,
      },
    },
    filter: {
      outlineColor: "orange",
      marginBottom: 2,
      "@media (min-width: 768px)": {
        width: "8rem",
        marginBottom: 0,
      },
    },
    sort: {
      outlineColor: "orange",
    },
  },
  text: {
    default: {
      color: "text",
      fontSize: 2,
      textTransform: "uppercase",
      fontFamily: "heading",
    },
    description: {
      fontFamily: "body",
      fontSize: 1,
    },
    links: {
      textOverflow: "ellipsis",
      overflow: "hidden",
      whiteSpace: "nowrap",
      textTransform: "uppercase",
      color: "#1c1c1c",
      fontSize: 2,
      fontFamily: "heading",
      a: {
        textDecoration: "none",
      },
      ":hover": {
        color: "rate",
      },
    },
    rate: {
      fontSize: 2,
      fontWeight: 600,
      fontFamily: "heading",
      minWidth: "4rem",
      textAlign: "end",
    },
  },
  styles: {
    spinner: {
      position: "fixed",
      transform: "translate(-50%, -50%)",
      top: "50%",
      left: "50%",
    },
    spaceBetween: {
      justifyContent: "space-between",
    },
    flexCenter: {
      justifyContent: "center",
      alignItems: "center",
    },
  },
};
