/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "shade-100": "#fff",
        "chad-blue-0": "#32abf2",
        "mdshade-40": "#4f637d",
        "mddark-blue-20": "#134267",
        "success-10": "#65bd47",
        "chad-blue-30": "#96caf7",
        "mddark-blue-80": "#93a8c1",
        "mddark-blue-60": "#5d7fa3",
        "shade-99": "#f9f9fa",
        "shade-50": "#9196a1",
        "shade-0": "#17191c",
        "shade-700": "#27282b",
        "shade-80": "#e3e5e8",
        "shade-95": "#f6f6f7",
        "success-20": "#f3fcf4",
        "mdshade-50": "#6b7b93",
        "mdshade-10": "#132534",
        "shade-40": "#757c8a",
        "mdshade-60": "#8694a8",
        "shade-90": "#f0f1f3",
        darkslategray: {
          "100": "#20496c",
          "200": "#123245",
        },
        "shade-70": "#c8cbd0",
        "shade-30": "#5e636e",
        lavender: "#d5e2f6",
        dodgerblue: "#5383ec",
        silver: "#c3cad5",
      },
      spacing: {},
      fontFamily: {
        "body-regular": "Inter",
        "widget-headers-h1": "'Eudoxus Sans'",
      },
      borderRadius: {
        "2xl-6": "21.6px",
        "3xs": "10px",
        "12xs": "1px",
      },
    },
    fontSize: {
      xs: "12px",
      sm: "14px",
      xl: "20px",
      base: "16px",
      "13xl": "32px",
      "5xl": "24px",
      lgi: "19px",
      lg: "18px",
      inherit: "inherit",
    },
    screens: {
      mq1350: {
        raw: "screen and (max-width: 1350px)",
      },
      mq1125: {
        raw: "screen and (max-width: 1125px)",
      },
      mq1050: {
        raw: "screen and (max-width: 1050px)",
      },
      mq800: {
        raw: "screen and (max-width: 800px)",
      },
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
