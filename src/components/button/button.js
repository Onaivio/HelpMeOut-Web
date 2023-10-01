const getVariant = variant => {
    switch (variant) {
      case "primary":
        return "bg-[#120B48] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75"
      case "secondary":
        return "bg-[#9747FF] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75"
  
      case "outline-primary":
        return "bg-white text-black border border-black hover:text-white hover:bg-[#181818]"
  
      default:
        return "bg-violet-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75"
    }
  }
  export const Button = ({
    className,
    children,
    variant,
    square,
    paddingLess,
    type = "button",
    onClick,
    imgSrc, 
    imgAlt, 
    iconPresent,
    ...props
  }) => {
    return (
      <button
        {...props}
        type={type}
        onClick={onClick}
        className={`
          ${getVariant(variant)}  transition duration-75  ${!paddingLess &&
          "px-[18px] py-[12px] "}  ${!square &&
          "rounded-[8px] sm:rounded-[6px] "} active:scale-95 ${className}  ${!iconPresent &&
            "flex justify-center items-center gap-2"} text-sm font-medium`}
      >
        {imgSrc && <img src={imgSrc} alt={imgAlt} className="" />} 
        {children}
      </button>
    )
  }
  