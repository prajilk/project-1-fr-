const EllipseGroup = () => {
  return (
    <svg
      width="42"
      height="12"
      viewBox="0 0 42 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_b_310_1087)">
        <circle
          cx="6"
          cy="6"
          r="6"
          fill="url(#paint0_radial_310_1087)"
          fillOpacity="0.75"
        />
      </g>
      <g filter="url(#filter1_b_310_1087)">
        <circle
          cx="18"
          cy="6"
          r="6"
          fill="url(#paint1_radial_310_1087)"
          fillOpacity="0.75"
        />
      </g>
      <g filter="url(#filter2_b_310_1087)">
        <circle
          cx="30"
          cy="6"
          r="6"
          fill="url(#paint2_radial_310_1087)"
          fillOpacity="0.75"
        />
      </g>
      <defs>
        <filter
          id="filter0_b_310_1087"
          x="-15.6"
          y="-15.6"
          width="43.2"
          height="43.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_310_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_310_1087"
            result="shape"
          />
        </filter>
        <filter
          id="filter1_b_310_1087"
          x="-3.6"
          y="-15.6"
          width="43.2"
          height="43.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_310_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_310_1087"
            result="shape"
          />
        </filter>
        <filter
          id="filter2_b_310_1087"
          x="8.4"
          y="-15.6"
          width="43.2"
          height="43.2"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feGaussianBlur in="BackgroundImageFix" stdDeviation="7.8" />
          <feComposite
            in2="SourceAlpha"
            operator="in"
            result="effect1_backgroundBlur_310_1087"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_backgroundBlur_310_1087"
            result="shape"
          />
        </filter>
        <radialGradient
          id="paint0_radial_310_1087"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(7.63768 -4.14) rotate(100.971) scale(14.0138 13.7623)"
        >
          <stop stopColor="#E1F296" />
          <stop offset="1" stopColor="#373737" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_310_1087"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(19.6377 -4.14) rotate(100.971) scale(14.0138 13.7623)"
        >
          <stop stopColor="#E1F296" />
          <stop offset="1" stopColor="#373737" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_310_1087"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(31.6377 -4.14) rotate(100.971) scale(14.0138 13.7623)"
        >
          <stop stopColor="#E1F296" />
          <stop offset="1" stopColor="#373737" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default EllipseGroup;
