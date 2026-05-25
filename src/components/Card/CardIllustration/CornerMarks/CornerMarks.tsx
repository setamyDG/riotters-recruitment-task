const CornerIcon = () => (
  <img src="/card-assets/close-icon.svg" alt="" aria-hidden="true" width={23} height={23} />
)

export const CornerMarks = () => (
  <>
    <div className="absolute top-3 right-3 left-3 z-10 flex items-center justify-between md:top-4 md:right-4 md:left-4">
      <CornerIcon />
      <CornerIcon />
    </div>
    <div className="absolute right-3 bottom-3 left-3 z-10 flex items-center justify-between md:right-4 md:bottom-4 md:left-4">
      <CornerIcon />
      <CornerIcon />
    </div>
  </>
)
