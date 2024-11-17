import { useState } from "react";
import clsx from "clsx";
import ControlButton from "./ControlButton";
import { motion, useMotionValue } from "framer-motion";
import DotsIndicator from "./DotsIndicator";

const images: string[] = [
  "https://fastly.picsum.photos/id/18/2500/1667.jpg?hmac=JR0Z_jRs9rssQHZJ4b7xKF82kOj8-4Ackq75D_9Wmz8",
  "https://fastly.picsum.photos/id/16/2500/1667.jpg?hmac=uAkZwYc5phCRNFTrV_prJ_0rP0EdwJaZ4ctje2bY7aE",
  "https://fastly.picsum.photos/id/26/4209/2769.jpg?hmac=vcInmowFvPCyKGtV7Vfh7zWcA_Z0kStrPDW3ppP0iGI",
  "https://fastly.picsum.photos/id/17/2500/1667.jpg?hmac=HD-JrnNUZjFiP2UZQvWcKrgLoC_pc_ouUSWv8kHsJJY",
];

export default function SliderSection() {
  const [activeSlide, setActiveSlide] = useState<number>(0);

  const [activeSlideFramer, setActiveSlideFramer] = useState<number>(0);
  const [dragging, setDragging] = useState<boolean>(false);

  const dragX = useMotionValue(0);

  const onNextSlide = () => {
    setActiveSlide((prev) => (prev + 1 > images.length - 1 ? 0 : prev + 1));
  };

  const onPrevSlide = () => {
    setActiveSlide((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  const onDragStart = () => {
    setDragging(true);
  };

  const onDragEnd = () => {
    setDragging(false);
    const x = dragX.get();

    if (x <= -50) {
      setActiveSlideFramer((pv) => (pv + 1 > images.length - 1 ? 0 : pv + 1));
    } else if (x >= 50) {
      setActiveSlideFramer((pv) => (pv - 1 < 0 ? images.length - 1 : pv - 1));
    }
  };

  return (
    <div className="flex flex-col pl-3 space-y-4">
      <div className="space-y-2">
        <h4>1. With translate X position.</h4>
        <div className="w-[400px] bg-white shadow rounded-md flex flex-row overflow-hidden relative">
          <ControlButton position="left" onClick={onPrevSlide} />

          {images.map((image, idx) => (
            <div key={"image" + idx} className="shrink-0 w-[400px] h-full">
              <img
                className={clsx(
                  "size-full object-cover object-center transition-all duration-300 cursor-grab"
                )}
                style={{ transform: `translateX(${-activeSlide * 400}px)` }}
                alt={"image" + idx}
                src={image}
              />
            </div>
          ))}

          <ControlButton position="right" onClick={onNextSlide} />
        </div>
      </div>

      <div className="space-y-2">
        <h4>1. With Framer Motion</h4>
        <div className="w-[400px] bg-white shadow rounded-md overflow-hidden relative">
          <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            animate={{ translateX: `-${activeSlideFramer * 100}%` }}
            transition={{
              type: "spring",
              mass: 2,
              stiffness: 400,
              damping: 50,
            }}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            style={{ x: dragX }}
            className="flex flex-row cursor-grab"
          >
            {images.map((image, idx) => (
              <motion.div
                key={"image-framer" + idx}
                className="aspect-video w-[400px] shrink-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image})` }}
              />
            ))}
          </motion.div>

          <DotsIndicator
            className="absolute inset-x-0 bottom-2 z-10"
            itemLength={images.length}
            activeIndex={activeSlideFramer}
            setActiveIndex={setActiveSlideFramer}
          />
        </div>
      </div>
    </div>
  );
}
