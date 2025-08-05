import { Testimonial } from "@/types/testimonial";
import Image from "next/image";
import { TeamMember } from "./testimonialData";

const SingleTestimonial = ({ review }: { review: TeamMember }) => {
  const { name, designation, image, bio } = review;
  return (
    <div className="shadow-solid-9 dark:border-strokedark dark:bg-blacksection rounded-lg bg-white p-9 pt-7.5 dark:border dark:shadow-none">
      <div className="border-stroke dark:border-strokedark mb-7.5 flex justify-between border-b pb-6">
        <div>
          <h3 className="text-metatitle3 mb-1.5 text-black dark:text-white">
            {name}
          </h3>
          <p>{designation}</p>
        </div>
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full">
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            quality={100}
            className="rounded-full object-cover"
            src={image}
            alt={name}
          />
        </div>
      </div>

      <p>{bio}</p>
    </div>
  );
};

export default SingleTestimonial;
