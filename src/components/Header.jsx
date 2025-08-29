
const Header = ({children,show}) => {
    console.log("este es el header")
  return (
    <div>
        <p>HEADER</p>
        {
            show ? children : null
        }
        {children}
      
    </div>
  )
}


