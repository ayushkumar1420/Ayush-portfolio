export const siteConfig = {
  name: "Ayush Kumar",
  role: "Full-Stack Web Developer",
  email: "ayushmaurya496@gmail.com",
  phone: "+91 9335280820",
  phoneHref: "tel:+919335280820",
  location: "Gorakhpur, Uttar Pradesh",
  github: "https://github.com/ayushkumar1420",
  linkedin: "https://www.linkedin.com/in/ayush-kumar-83a969347",
  whatsapp: "",
  x: "",
  resumePath: "/Ayush-Kumar-Resume.pdf",
  portraitPath: "/ayush-portrait.png",
  web3FormsAccessKey: import.meta.env.PUBLIC_WEB3FORMS_ACCESS_KEY ?? "",
} as const;

export const navigationItems = ["Home", "Skills", "Experience", "Projects", "Certificates", "Contact"] as const;
