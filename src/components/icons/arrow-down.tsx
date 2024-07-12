const ArrowDown = ({ className }: { className?: string }) => {
  return (
    <svg
      className={className}
      width="68"
      height="68"
      viewBox="0 0 68 68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="34"
        cy="34"
        r="33.5"
        fill="url(#paint0_radial_214_330)"
        fillOpacity="0.15"
        stroke="url(#paint1_linear_214_330)"
      />
      <path d="M24 29L34 39L44 29" stroke="#E1F296" />
      <defs>
        <radialGradient
          id="paint0_radial_214_330"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(36 -3.00045e-06) rotate(91.5378) scale(74.5268)"
        >
          <stop />
          <stop offset="1" stopOpacity="0" />
        </radialGradient>
        <linearGradient
          id="paint1_linear_214_330"
          x1="39.5"
          y1="-26.5"
          x2="31.5"
          y2="63.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#E1F296" />
          <stop offset="1" stopColor="#828C57" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ArrowDown;
