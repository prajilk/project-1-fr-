const Ellipse = ({ className }: { className?: string }) => {
  return (
    <svg
      width="169"
      height="364"
      className={className}
      viewBox="0 0 169 364"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="-13.5"
        cy="182"
        rx="182.5"
        ry="182"
        fill="url(#paint0_radial_310_1012)"
        fillOpacity="0.26"
      />
      <path
        d="M168.5 182C168.5 282.238 87.0171 363.5 -13.5 363.5C-114.017 363.5 -195.5 282.238 -195.5 182C-195.5 81.7616 -114.017 0.5 -13.5 0.5C87.0171 0.5 168.5 81.7616 168.5 182Z"
        stroke="url(#paint1_radial_310_1012)"
        strokeOpacity="0.75"
      />
      <defs>
        <radialGradient
          id="paint0_radial_310_1012"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(47.3333 -115.98) rotate(106.711) scale(311.12 306.238)"
        >
          <stop stopColor="#E1F296" />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_310_1012"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(36.3128 -125.58) rotate(101.001) scale(425.127 418.562)"
        >
          <stop stopColor="#E1F296" />
          <stop offset="1" stopColor="#373737" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};

export default Ellipse;
