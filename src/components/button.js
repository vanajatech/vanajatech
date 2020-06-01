import React from "react"

const Button = ({ ...props }) => (
  <button
    className="bg-red text-white font-mono py-3 px-6 rounded shadow-red"
    {...props}
  />
)

export default Button
