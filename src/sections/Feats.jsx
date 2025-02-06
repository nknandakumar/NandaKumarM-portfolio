import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { FEATS } from "../data";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const Feats = () => {
	return (
		<section id="feats" className="center flex flex-col items-center  bg-[#ff4a23] pb-24 relative z-20 px-6 lg:px-32 bg-[linear-gradient(to_right,rgba(211,211,211,0.3)_1px,transparent_1px),linear-gradient(to_bottom,rgba(211,211,211,0.3)_1px,transparent_1px)] bg-[size:60px_60px]">
			<motion.h2
				initial={{ opacity: 0, y: 100 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				transition={{ duration: 1, ease: "easeOut" }}
				className="section-name pt-28 text-white text-3xl font-bold"
			>
				Feats & Achievements
			</motion.h2>

			{/* Swiper Container */}
			<Swiper
				spaceBetween={30}
				pagination={{
					clickable: true,
					el: ".swiper-pagination", // Use a custom class for pagination
				}}
				modules={[Pagination]}
				className="mySwiper w-full max-w-6xl mt-2"
				breakpoints={{
					// when window width is <= 480px
					480: {
						slidesPerView: 1,
						spaceBetween: 10,
					},
					// when window width is <= 768px
					768: {
						slidesPerView: 2,
						spaceBetween: 20,
					},
					// when window width is > 768px
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
			>	
    
				{FEATS.map((feat)=>(
            <SwiperSlide className=""   key={feat.id}  >
                 	<div
                
                   data-aos="fade-up"
                   className="w-full cursor-grab bg-background rounded-2xl p-6 h-[420px] flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300 group dot-bg  "
                 >
                   {/* Image Section */}
                   <div className="overflow-hidden border-2 shadow-lg rounded-xl">
                     <img
                       src={feat.image}
                       className="w-full rounded-lg transition-transform duration-500 group-hover:scale-105"
                       alt="Hackathon Achievement"
                     />
                   </div>
       
                   {/* Content */}
                   <div className="mt-4 flex flex-col gap-3">
                     <h3 className="text-lg font-clash md:text-xl font-semibold text-gray-800 flex items-center gap-2">
                       {feat.title}
                     </h3>
                     <p className="text-gray-600 font-second text-sm md:text-base leading-relaxed">
                    {feat.description}
                     </p>
                   
                     <p className="text-gray-700 font-clash font-medium text-sm">
                       <span className="font-semibold">{feat.details.label} : </span>{feat.details.value}
                     </p>
                   </div>
                 </div>
                 </SwiperSlide>
        ))}
			

	
			</Swiper>

			{/* Custom Pagination Container */}
			<div className="swiper-pagination mt-6	"></div>
		</section>
	);
};

export default Feats;
