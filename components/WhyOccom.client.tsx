// components/WhyOccom.client.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

export default function WhyOccomClient() {
  const items = [
    { img: "https://dev.occominternet.com/wp-content/uploads/2025/10/home1.webp", title: "Quality Internet", text: "No compromises..." },
    { img: "https://dev.occominternet.com/wp-content/uploads/2025/10/home2.webp", title: "Low Latency", text: "Zero lag..." },
    { img: "https://dev.occominternet.com/wp-content/uploads/2025/10/home3.webp", title: "Social Proof", text: "We deliver..." },
    { img: "https://dev.occominternet.com/wp-content/uploads/2025/10/home4.webp", title: "Real People", text: "Hate waiting..." },
  ];

  return (
    <section className="why-occom">
      <div className="container">
        <div className="occom-headline-txt"><h3>Why Occom</h3></div>
        <div className="row">
          {items.map((it, idx) => (
            <motion.div className="col-md-3" key={idx} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} transition={{ delay: idx * 0.08 }}>
              <div className="why-occom-item">
                <div className="why-occom-item-img">
                  <img src={it.img} alt={it.title} />
                </div>
                <div className="why-occom-item-txt-title">
                  <h4>{it.title}</h4>
                  <p>{it.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
