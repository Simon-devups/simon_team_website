'use client'

import { useEffect, useState } from "react";
import styles from "../styles/portfolioPage.module.css";
import { CardTriangle } from "../Components/CardTriangle";
import GradientTitlefirst from "../Components/GradientTitlefirst";
import { Suspense } from "react";
import loader from "../loading";

export default function Page() {
  // State برای نگهداری لیست آیتم‌ها
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  // هر بار که شماره صفحه تغییر کند، داده‌های جدید واکشی می‌شوند
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `http://localhost:3000/portfolio?Page=${page}`
        );

        if (response.ok) {
          const result = await response.json();
          const newItems = Array.isArray(result) ? result : [];

          if (newItems.length === 0) {
            setHasMore(false);
          } else {
            setData((prevData) => [...prevData, ...newItems]);
          }
        } else {
          console.error("خطای API:", response.status);
        }
      } catch (error) {
        console.error("خطا در دریافت اطلاعات:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [page]);
  const loadMore = () => {
    if (!loading && hasMore) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  return (
    <div className={styles.cont}>
      <GradientTitlefirst text1="Website design " text2=" طراحی سایت" />
      
      <Suspense fallback={<loading />}>
        <section className={styles.GridCont}>
          {data.map((item, index) => (
            <CardTriangle rawData={item} key={item.id || index} />
          ))}
        </section>
      </Suspense>

      {/* فقط در صورت وجود داده‌های بیشتر، دکمه نمایش داده شود */}
      {hasMore && (
        <button
          onClick={loadMore}
          className={`${styles.viewMore} goUp`}
          disabled={loading}
        >
          {loading ? "در حال بارگذاری..." : "مشاهده نمونه کار های بیشتر   >"}
        </button>
      )}
    </div>
  );
}