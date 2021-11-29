const Link = ({ path, children, ...props }) => {
  return (
    <a
      href={path}
      {...props}
    >
      {props}
    </a>
  )
}

export default Link
