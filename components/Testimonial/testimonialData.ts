import image1 from "@/public/images/user/ahmed-osama.jpeg";
import image2 from "@/public/images/user/said.jpeg";
import image3 from "@/public/images/user/micheal.jpeg";
import image4 from "@/public/images/user/alaa.jpeg";
import { StaticImageData } from "next/image";
// @/types/team.ts
export type TeamMember = {
  id: number;
  name: string;
  designation: string;
  image: StaticImageData;
  bio: string;
};

export const teamData: TeamMember[] = [
  {
    id: 1,
    name: "Ahmed Alaa",
    designation: "Sr. Backend Developer",
    image: image4,
    bio: "Ahmed has extensive experience in backend development, specializing in Node.js and Express, ensuring robust and scalable server-side solutions.",
  },
  {
    id: 2,
    name: "Mahmoud Said",
    designation: "Sr. Frontend Developer",
    image: image2,
    bio: "Mahmoud specializes in creating responsive and user-friendly interfaces using React, Next.js, and Tailwind CSS.",
  },
  {
    id: 3,
    name: "Ahmed Osama",
    designation: "Sr. Mobile Developer",
    image: image1,
    bio: "Ahmed has a strong background in mobile app development, particularly with React Native, delivering high-performance applications.",
  },
  {
    id: 4,
    name: "Micheal Rafaat",
    designation: "UI/UX Designer",
    image: image3,
    bio: "Sara crafts intuitive and engaging user experiences, ensuring that every product is both functional and visually appealing.",
  },
];
