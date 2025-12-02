
// import { Autoplay, Navigation, Pagination } from "swiper/modules";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";
// import "swiper/css/autoplay";
// import "swiper/css/effect-fade";
// import { Link } from "react-router";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Collections.css";

export const Collections = () => { 
  return (
    <h1></h1>
    // <section className="collections w-full h-screen">
    //   <Swiper
    //     modules={[Autoplay, Pagination, Navigation]}
    //     slidesPerView={1} // 👈 Chỉ hiện 1 ảnh mỗi lần
    //     loop={collections.length > 1} // 👈 Chạy vòng lặp
    //     autoplay={{ delay: 4500 }} // 👈 Tự động chạy mỗi 3s
    //     pagination={{ clickable: true, bulletActiveClass: "bulletActive" }} // 👈 Hiển thị chấm chỉ số
    //   >
    //     {collections.map((collection) => (
    //       <SwiperSlide key={collection.id}>
    //         <article className="collection-item h-full grid grid-cols-[65%_35%]">
    //           {/* text */}
    //           <div className="info-collection  flex justify-center items-center p-30">
    //             <div className="">
    //               <h1 className="font-h1 pb-20">{collection.name}</h1>
    //               <p className=" font-text pb-10">{collection.description}</p>
    //               <p className=" font-text pb-10">
    //                 {collection.descriptionViet}
    //               </p>
    //               <Link
    //                 to={`/collection?collectionId=${collection.id}`}
    //                 className="font-link-collections mt-10"
    //               >
    //                 View the Collection <FontAwesomeIcon icon={faArrowRight} />
    //               </Link>
    //             </div>
    //           </div>
    //           {/* image */}
    //           <div className="img-collection">
    //             <img
    //               className=" object-cover w-full h-full"
    //               src={collection.urlImage}
    //               alt={collection.authorImg}
    //             />
    //           </div>
    //         </article>
    //       </SwiperSlide>
    //     ))}
    //   </Swiper>
    // </section>
  );
};
