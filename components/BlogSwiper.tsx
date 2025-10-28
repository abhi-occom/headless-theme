 // components/BlogSwiper.tsx
"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function BlogSwiper() {
  // placeholder posts - later replace with WP API fetch
  const posts = [
    { id: 1, title: "Blog 1", img: "https://via.placeholder.com/800x400" },
    { id: 2, title: "Blog 2", img: "https://via.placeholder.com/800x400" },
    { id: 3, title: "Blog 3", img: "https://via.placeholder.com/800x400" },
  ];

  return (
    <div style={{ marginTop: 24 }}>
      <Swiper spaceBetween={20} slidesPerView={1} breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}>
        {posts.map(p => (
          <SwiperSlide key={p.id}>
            <div className="blog-wrap-box">
              <img src={p.img} alt={p.title} />
              <div className="blog-wrap-inner">
                <h4 className="blog-wrapper-title"><a href="#">{p.title}</a></h4>
                <div className="blog-wrapper-excerpt"><p>Short excerpt for the blog post</p></div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
