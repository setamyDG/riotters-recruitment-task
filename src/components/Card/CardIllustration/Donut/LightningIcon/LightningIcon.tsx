import { motion } from 'motion/react'

import { LIGHTNING_ENTRANCE, lightningTransition } from './LightningIcon.const'

export const LightningIcon = () => (
  <motion.div
    className="flex items-center justify-center"
    initial={LIGHTNING_ENTRANCE.initial}
    animate={LIGHTNING_ENTRANCE.animate}
    transition={lightningTransition}
  >
    <svg
    width="136"
    height="142"
    viewBox="0 0 136 142"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#lightning-card-shadow)">
      <rect x="28" y="18" width="80" height="80" rx="24" fill="white" />
      <g filter="url(#lightning-bolt-shadow)">
        <path
          d="M50.5995 58.7506L68.4383 36.4522C69.6193 34.9759 72 35.811 72 37.7016V52C72 53.1046 72.8954 54 74 54H83.8387C85.5158 54 86.4481 55.9399 85.4005 57.2494L67.5617 79.5478C66.3807 81.0241 64 80.189 64 78.2984V64C64 62.8954 63.1046 62 62 62H52.1612C50.4842 62 49.5519 60.0601 50.5995 58.7506Z"
          fill="#FE4308"
        />
        <path
          d="M50.5995 58.7506L68.4383 36.4522C69.6193 34.9759 72 35.811 72 37.7016V52C72 53.1046 72.8954 54 74 54H83.8387C85.5158 54 86.4481 55.9399 85.4005 57.2494L67.5617 79.5478C66.3807 81.0241 64 80.189 64 78.2984V64C64 62.8954 63.1046 62 62 62H52.1612C50.4842 62 49.5519 60.0601 50.5995 58.7506Z"
          fill="url(#lightning-bolt-gradient)"
          fillOpacity="0.6"
        />
        <path
          d="M50.5995 58.7506L68.4383 36.4522C69.6193 34.9759 72 35.811 72 37.7016V52C72 53.1046 72.8954 54 74 54H83.8387C85.5158 54 86.4481 55.9399 85.4005 57.2494L67.5617 79.5478C66.3807 81.0241 64 80.189 64 78.2984V64C64 62.8954 63.1046 62 62 62H52.1612C50.4842 62 49.5519 60.0601 50.5995 58.7506Z"
          stroke="#FE4308"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </g>
    <defs>
      <filter
        id="lightning-card-shadow"
        x="0"
        y="0"
        width="136"
        height="142"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius="7" operator="dilate" in="SourceAlpha" result="effect1_dropShadow" />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.917326 0 0 0 0 0.880055 0 0 0 0 0.926644 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius="6" operator="dilate" in="SourceAlpha" result="effect2_dropShadow" />
        <feOffset />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.905882 0 0 0 0 0.929412 0 0 0 0 0.988235 0 0 0 1 0"
        />
        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-12" dy="-10" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.8 0" />
        <feBlend mode="normal" in2="effect2_dropShadow" result="effect3_dropShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius="12" operator="erode" in="SourceAlpha" result="effect4_dropShadow" />
        <feOffset dy="16" />
        <feGaussianBlur stdDeviation="20" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.994873 0 0 0 0 0.261782 0 0 0 0 0.0302802 0 0 0 0.5 0"
        />
        <feBlend mode="normal" in2="effect3_dropShadow" result="effect4_dropShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology radius="6" operator="erode" in="SourceAlpha" result="effect5_dropShadow" />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.994873 0 0 0 0 0.261782 0 0 0 0 0.0302802 0 0 0 0.5 0"
        />
        <feBlend mode="normal" in2="effect4_dropShadow" result="effect5_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect5_dropShadow" result="shape" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="2" dy="2" />
        <feGaussianBlur stdDeviation="1" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.4 0" />
        <feBlend mode="normal" in2="shape" result="effect6_innerShadow" />
      </filter>
      <filter
        id="lightning-bolt-shadow"
        x="41.1556"
        y="29.6956"
        width="53.6887"
        height="62.6088"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="3" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.996078 0 0 0 0 0.262745 0 0 0 0 0.0313726 0 0 0 0.4 0"
        />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="0.5" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.996078 0 0 0 0 0.262745 0 0 0 0 0.0313726 0 0 0 0.2 0"
        />
        <feBlend mode="normal" in2="effect1_dropShadow" result="effect2_dropShadow" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow" result="shape" />
      </filter>
      <linearGradient
        id="lightning-bolt-gradient"
        x1="68"
        y1="32"
        x2="68"
        y2="84"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="white" stopOpacity="0" />
        <stop offset="1" stopColor="white" />
      </linearGradient>
    </defs>
  </svg>
  </motion.div>
)
