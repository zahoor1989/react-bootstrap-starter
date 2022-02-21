const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <>
      <footer className='text-center text-capitalize'>
        Washerman copyright &copy; {year}
      </footer>
    </>
  )
}

export default Footer
