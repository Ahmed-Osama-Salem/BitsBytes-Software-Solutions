import { FeatureTab } from "@/types/featureTab";

const featuresTabData: FeatureTab[] = [
  {
    id: "tabOne",
    title: "Clean & Modern User Interface",
    desc1:
      "Our platform is designed with a sleek, intuitive interface that enhances user experience and improves productivity.",
    desc2:
      "From responsive layouts to dark mode support, every detail is crafted to provide a smooth and elegant workflow.",
    image: "/images/features/features-light-01.png",
    imageDark: "/images/features/features-dark-01.svg",
  },
  {
    id: "tabTwo",
    title: "Pre-built Pages for SaaS Applications",
    desc1:
      "Accelerate development with ready-to-use pages for authentication, pricing, blogs, and dashboards.",
    desc2:
      "All pages follow best UI/UX practices and are optimized for performance and accessibility.",
    image: "/images/features/features-light-02.png",
    imageDark: "/images/features/features-dark-02.svg",
  },
  {
    id: "tabThree",
    title: "Integrated Blog, Authentication, and Database",
    desc1:
      "Our boilerplate includes full blog functionality, secure user authentication, and database integration out of the box.",
    desc2:
      "Easily extend or customize these features to suit your business needs without starting from scratch.",
    image: "/images/features/features-light-03.png",
    imageDark: "/images/features/features-dark-03.svg",
  },
];

export default featuresTabData;
