// // 

// import Image from "next/image";
// import Link from "next/link";
// import { getPosts } from "@/lib/wordpress";
// import { WPPost } from "@/types/wordpress";

// export default async function HomePage() {
//   const posts: WPPost[] = await getPosts();

//   return (
//     <main className="max-w-6xl mx-auto px-6 py-12">
//       {/* Hero Section */}
//       <section className="text-center mb-16">
//         <h1 className="text-5xl font-extrabold mb-4 text-blue-700">
//           Welcome to Our Blog
//         </h1>
//         <p className="text-lg text-gray-600">
//           Powered by <span className="font-semibold">Headless WordPress</span> &{" "}
//           <span className="font-semibold">Next.js</span>
//         </p>
//       </section>

//       {/* Posts Grid */}
//       <section>
//         <h2 className="text-3xl font-semibold mb-8 text-center">Latest Posts</h2>
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
//           {posts.map((post) => {
//             const imageUrl =
//               (post as any)?._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
//               "/placeholder.jpg";
//             return (
//               <article
//                 key={post.id}
//                 className="bg-white rounded-2xl shadow hover:shadow-lg transition-all overflow-hidden"
//               >
//                 <div className="relative h-48">
//                   <Image
//                     src={imageUrl}
//                     alt={post.title.rendered}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <div className="p-6">
//                   <h3
//                     className="text-xl font-bold mb-2 text-blue-600"
//                     dangerouslySetInnerHTML={{ __html: post.title.rendered }}
//                   />
//                   <div
//                     className="text-gray-600 text-sm mb-4 line-clamp-3"
//                     dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
//                   />
//                   <Link
//                     href={`/blog/${post.slug}`}
//                     className="text-blue-700 font-semibold hover:underline"
//                   >
//                     Read More →
//                   </Link>
//                 </div>
//               </article>
//             );
//           })}
//         </div>
//       </section>
//     </main>
//   );
// }


// app/page.tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AddressSearchPlaceholder from "@/components/AddressSearchPlaceholder";
import WhyOccom from "@/components/WhyOccom";
import TailoredSol from "@/components/TailoredSol";
import BlogSwiper from "@/components/BlogSwiper";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <section className="search-addr">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="container-fluid-search">
                  <div className="col-addr-title">
                    <h3>See what's available at your address</h3>
                  </div>
                  <div className="col-widget-search">
                    <div className="search-inner-box">
                      <AddressSearchPlaceholder />
                    </div>
                  </div>
                  <div className="collab-service">
                    <div className="service-img-inner">
                      {/* keep original image links, or move to public/ */}
                      <div className="serv-img-box">
                        <img src="https://dev.occominternet.com/wp-content/uploads/2025/03/nbn.png" alt="nbn" />
                      </div>
                      <div className="serv-img-box">
                        <img src="https://dev.occominternet.com/wp-content/uploads/2025/03/logo-opticomm-1.png" alt="opt" />
                      </div>
                      <div className="serv-img-box">
                        <img src="https://dev.occominternet.com/wp-content/uploads/2025/03/Group-2569-1.png" alt="group" />
                      </div>
                      <div className="serv-img-box">
                        <img src="https://dev.occominternet.com/wp-content/uploads/2025/03/logo-networks-1-1.png" alt="networks" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <WhyOccom />

        <TailoredSol />

        <section className="blog-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="blog-title-more">
                  <div className="occom-headline-txt occom-txt-blog">
                    <h3>Blogs</h3>
                  </div>
                  <div className="blog-more-btn">
                    <a href="#">More Blogs &nbsp;&nbsp; →</a>
                  </div>
                </div>
              </div>
            </div>
            <BlogSwiper />
          </div>
        </section>

        <section className="reach-out-us">
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="reach-out-box">
                    <div className="reach-out-inner-box">
                        <h4 className="reach-sec-title">Reach Out To Us</h4>
                        <p className="reach-sec-txt">Contact our professional support team to respond to all your
                            questions
                            and guide you through the sign-up process.</p>
                    </div>
                </div>
                <div className="container-divider">
                    <div className="container-divider-inner">
                        <div className="divider-seperator">

                        </div>
                    </div>
                </div>
                <div className="social-media-row">
                    <div className="social-media-box">
                        <div className="social-media-icon">
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                    viewBox="0 0 48 48" fill="none">
                                    <path
                                        d="M23.5 42C33.1649 42 41 34.1649 41 24.5C41 14.835 33.1649 7 23.5 7C13.835 7 6 14.835 6 24.5C6 27.2995 6.65733 29.9453 7.82605 32.2919C8.13664 32.9154 8.24002 33.6282 8.05996 34.301L7.01764 38.1967C6.56516 39.8878 8.11227 41.4348 9.80336 40.9824L13.6989 39.9401C14.3719 39.76 15.0846 39.8634 15.7082 40.1739C18.0546 41.3427 20.7005 42 23.5 42Z"
                                        stroke="white" stroke-width="3"></path>
                                    <path d="M17 24H17.0146M23.4854 24H23.5M29.9854 24H30" stroke="white"
                                        stroke-width="4" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="social-media-name">
                            <p>Live Chat</p>
                        </div>
                    </div>
                    <div className="social-media-box">
                        <div className="social-media-icon">
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                    viewBox="0 0 48 48" fill="none">
                                    <path
                                        d="M31.7906 17.342C31.5798 15.0865 30.782 13.1794 29.4808 11.4802C25.878 6.77631 19.2196 4.80221 13.2949 6.73751C8.9541 8.15557 5.75946 10.8759 4.45858 15.3614C3.05248 20.2102 4.93136 24.9198 9.3887 28.0666C10.0829 28.5576 10.188 28.9768 9.96116 29.7304C9.65276 30.7556 9.47856 31.8216 9.20942 33.039C10.6762 32.122 11.9138 31.2996 13.2047 30.5712C13.5936 30.3518 14.1385 30.2968 14.5976 30.3356C15.927 30.4474 17.2489 30.6452 18.7002 30.8252M23.6176 14.118C22.7016 14.1349 21.9274 14.9153 21.9436 15.8055C21.9604 16.7284 22.7198 17.4504 23.6618 17.4392C24.6062 17.4277 25.3226 16.6982 25.3136 15.7557C25.3058 14.8307 24.5498 14.101 23.6176 14.118ZM14.7016 15.8311C14.7358 14.9443 13.9673 14.1455 13.0546 14.1187C12.1201 14.0912 11.3514 14.8054 11.3241 15.7264C11.2965 16.6597 12.0104 17.4075 12.9517 17.4314C13.8848 17.4551 14.6671 16.7399 14.7016 15.8311ZM35.3768 24.7686C34.6506 24.7636 34.0334 25.3582 34.0038 26.092C33.9722 26.8766 34.5824 27.521 35.3588 27.523C36.11 27.5254 36.7034 26.9574 36.731 26.21C36.76 25.4234 36.1498 24.774 35.3768 24.7686ZM26.749 27.5324C27.4978 27.5332 28.114 26.9474 28.1422 26.2082C28.1722 25.4254 27.5426 24.769 26.759 24.7656C25.983 24.762 25.3328 25.428 25.3598 26.1988C25.3854 26.9356 26.006 27.5316 26.749 27.5324ZM40.1328 40.4904C38.957 39.967 37.8784 39.1814 36.7304 39.0616C35.5864 38.942 34.3838 39.602 33.1872 39.7244C29.542 40.0972 26.276 39.0814 23.5832 36.5912C18.4616 31.854 19.1934 24.5908 25.1188 20.7086C30.385 17.2585 38.1084 18.4087 41.8214 23.196C45.0614 27.3732 44.6806 32.9184 40.7252 36.4278C39.5806 37.4434 39.1686 38.2794 39.903 39.618C40.0386 39.8652 40.054 40.1782 40.1328 40.4904Z"
                                        stroke="white" stroke-width="2.3" stroke-linejoin="round"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="social-media-name">
                            <p>WeChat</p>
                        </div>
                    </div>
                    <div className="social-media-box">
                        <div className="social-media-icon">
                            <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="48" height="48"
                                    viewBox="0 0 48 48" fill="none">
                                    <path
                                        d="M15.0198 17.8494C15.1817 16.5658 16.8456 14.8212 18.1661 15.0148L18.164 15.0127C19.449 15.2575 20.4663 17.4751 21.0399 18.4723C21.4464 19.1958 21.1825 19.9288 20.8034 20.2381C20.292 20.6514 19.4922 21.2216 19.66 21.7941C19.9583 22.812 23.5 26.3629 25.2419 27.3723C25.9012 27.7544 26.3794 26.7466 26.7876 26.2303C27.0843 25.8332 27.816 25.5959 28.5359 25.9879C29.6112 26.6157 30.6241 27.3453 31.5608 28.1667C32.0286 28.5587 32.1384 29.1381 31.8142 29.7504C31.2433 30.8289 29.5921 32.2511 28.3934 31.962C26.2999 31.4574 17.8333 28.1667 15.1138 18.6333C14.9609 18.1823 14.9994 18.0118 15.0198 17.8494Z"
                                        fill="white"></path>
                                    <path fill-rule="evenodd" clip-rule="evenodd"
                                        d="M23.5 39.8553C21.6646 39.8553 20.6491 39.6592 19 39.1085L15.8416 40.6808C13.8469 41.6738 11.5 40.2297 11.5 38.0092V34.6283C8.26982 31.6295 7 28.1718 7 23.4276C7 14.3549 14.3873 7 23.5 7C32.6126 7 40 14.3549 40 23.4276C40 32.5003 32.6126 39.8553 23.5 39.8553ZM14.5 33.3295L13.5459 32.4437C11.0363 30.114 10 27.5093 10 23.4276C10 16.0045 16.0442 9.98684 23.5 9.98684C30.9559 9.98684 37 16.0045 37 23.4276C37 30.8508 30.9559 36.8684 23.5 36.8684C22.0215 36.8684 21.328 36.7355 19.9539 36.2767L18.7727 35.8823L14.5 38.0092V33.3295Z"
                                        fill="white"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="social-media-name">
                            <p>WhatsApp</p>
                        </div>
                    </div>
                </div>
                <div className="call-number">
                    <p>Call now: <a href="tel:1300 299 999">1300 299 999</a></p>
                </div>
                <div className="timing-detail">
                    <p>Daily 8 AM – 10 PM AEST</p>
                </div>
                <div className="contact-us-btn">
                    <div className="contact-btn-inner">
                        <a href="#">Contact Us <span className="arrow-button-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                    fill="none">
                                    <path
                                        d="M19.2408 25.0935C18.9875 25.0935 18.7341 25.0002 18.5341 24.8002C18.1475 24.4135 18.1475 23.7735 18.5341 23.3868L25.9208 16.0002L18.5341 8.61349C18.1475 8.22682 18.1475 7.58682 18.5341 7.20016C18.9208 6.81349 19.5608 6.81349 19.9475 7.20016L28.0408 15.2935C28.4275 15.6802 28.4275 16.3202 28.0408 16.7068L19.9475 24.8002C19.7475 25.0002 19.4941 25.0935 19.2408 25.0935Z"
                                        fill="white"></path>
                                    <path
                                        d="M27.106 17H4.66602C4.11935 17 3.66602 16.5467 3.66602 16C3.66602 15.4533 4.11935 15 4.66602 15H27.106C27.6527 15 28.106 15.4533 28.106 16C28.106 16.5467 27.6527 17 27.106 17Z"
                                        fill="white"></path>
                                </svg> </span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

      </main>

      <Footer />
    </>
  );
}
