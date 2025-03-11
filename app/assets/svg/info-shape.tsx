export default function InfoShape() {
  return (
    <svg className="hidden" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <filter id="info">
          <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
          <feColorMatrix
            in="blur"
            mode="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
            result="info"
          />
          <feComposite in="SourceGraphic" in2="info" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
}
