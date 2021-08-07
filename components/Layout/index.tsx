import Header from '../Header'
import Footer from '../Footer'

interface LayoutProps {
    currentPage: string,
    children: any
}

export default function Layout({ currentPage, children }: LayoutProps) {
  return (
    <>
      <Header currentPage={currentPage}/>
      <main>{children}</main>
      <Footer />
    </>
  )
}