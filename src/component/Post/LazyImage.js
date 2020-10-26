import React from "react";
import { useInView } from "react-intersection-observer";

const LazyImage = ({ width, height, src, alt, ...rest }) => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        rootMargin: "100px 0px"
    });

    return (
        <div
            ref={ref}
            data-inview={inView}
            className="container"
        >
            {inView ? (
                <img
                    {...rest}
                    alt={alt}
                    src={src}
                    style={{ position: "relative", width: "100%", height: "100%" }}
                />
            ) : null}
        </div>
    );
};

export default LazyImage;
