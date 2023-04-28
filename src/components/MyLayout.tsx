import Navbar from "./Navbar"
import { ReactNode } from 'react';

type LayoutProps = {
  children: ReactNode;
}

const MyLayout = ({children} : LayoutProps) => {
  return (
    <div className='container'>
      <Navbar />
      {children}
      <div className="footer">
      &copy;Mercure 2023
      </div>
    </div>
  )
}

export default MyLayout
