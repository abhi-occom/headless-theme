// components/TailoredSol.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

const tailored = [
  { img: "https://dev.occominternet.com/wp-content/uploads/2025/08/game22.jpg", title: "For gaming: Lag-free winning", text: "Every millisecond counts." },
  { img: "https://dev.occominternet.com/wp-content/uploads/2025/03/image-53.png", title: "Binge-worthy internet", text: "Streaming should be seamless." },
  { img: "https://dev.occominternet.com/wp-content/uploads/2025/03/image-53-1.png", title: "The best co-worker around", text: "Working from home requires a reliable connection." },
  { img: "https://dev.occominternet.com/wp-content/uploads/2025/03/fw222.fw_.png", title: "Study from home", text: "A reliable internet connection is key for students." }
];

export default function TailoredSol() {
  return (
    <section className="tailored-sol">
      <div className="container">
        <div className="occom-headline-txt"><h3>Tailored Solutions</h3></div>
        <div className="row row-tailored-row">
          {tailored.map((t, i) => (
            <motion.div className="col-md-12" key={i} initial="visible" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: i * 0.08 }}>
              <div className="tailored-box">
                <div className="tailored-inner-box">
                  <div className="tailored-box-img"><img src={t.img} alt={t.title} /></div>
                  <div className="tailored-sol-txt">
                    <div className="tailor-sol-inner-txt">
                      <h4>{t.title}</h4>
                      <p>{t.text}</p>
                      <div className="read-more-btn"><a href="#"><span className="link-btn-wrapper"><span className="link-btn-txt">Read More</span></span></a></div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
