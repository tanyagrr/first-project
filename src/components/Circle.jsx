function getColors(color) {
  if (color === "light_blue")
    return {
      color1: "#A7E9FD",
      color2: "#39D1F9",
    };
  if (color === "yellow")
    return {
      color1: "#FFD400",
      color2: "#FFB000",
    };
  if (color === "green")
    return {
      color1: "#39BEB7",
      color2: "#00827B",
    };
  if (color === "dark_blue")
    return {
      color1: "#00AEFF",
      color2: "#008AFF",
    };
  if (color === "red")
    return {
      color1: "#FF8947",
      color2: "#F24900",
    };
  if (color === "purple")
    return {
      color1: "#BDBBFF",
      color2: "#9896FF",
    };
  else
    return {
      color1: "grey",
      color2: "grey",
    };
}

function Circle({ color }) {
  console.log(color);
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer ring */}
      <path
        d="M20 40C8.95431 40 0 31.0457 0 20C0 8.95431 8.95431 0 20 0V40Z"
        fill={getColors(color).color1}
      />
      <path
        d="M20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40V0Z"
        fill={getColors(color).color2}
      />

      {/* Inner circle */}
      <circle cx="20" cy="20" r="10" fill={getColors(color).color2} />
      <path
        d="M20 10C25.5228 10 30 14.4772 30 20C30 25.5228 25.5228 30 20 30V10Z"
        fill={getColors(color).color1}
      />
    </svg>
  );
}

export default Circle;
