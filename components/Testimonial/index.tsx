"use client";
import SectionHeader from "../Common/SectionHeader";

import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";

import { motion } from "framer-motion";
import SingleTestimonial from "./SingleTestimonial";
import { teamData } from "./testimonialData";

const Team = () => {
  return (
    <section>
      <div className="max-w-c-1315 mx-auto px-4 md:px-8 xl:px-0">
        {/* <!-- Section Title Start --> */}
        <div className="animate_top mx-auto text-center">
          <SectionHeader
            headerInfo={{
              title: "OUR TEAM",
              subtitle: "Meet the Experts Behind BitsBytes",
              description:
                "We’re a group of developers, designers, and project managers dedicated to turning your ideas into high-performing digital products.",
            }}
          />
        </div>
        {/* <!-- Section Title End --> */}
      </div>

      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: -20,
          },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1 }}
        viewport={{ once: true }}
        className="animate_top max-w-c-1235 mx-auto mt-15 px-4 md:px-8 xl:mt-20 xl:px-0"
      >
        {/* <!-- Slider main container --> */}
        <div className="swiper team-slider mb-20 pb-22.5">
          <Swiper
            spaceBetween={50}
            slidesPerView={2}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination]}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
            }}
          >
            {teamData.map((member) => (
              <SwiperSlide key={member.id}>
                <SingleTestimonial review={member} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.div>
    </section>
  );
};

export default Team;
