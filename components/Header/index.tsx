import styles from './Header.module.css'
import Image from 'next/image'
import Link from 'next/link'

interface HeaderProps {
  currentPage: string
}

function Header({currentPage}: HeaderProps) {
    return (
      <>
        <div className={styles.wrapper}>
          <div className={styles.content}>
            <Image 
              src="/logo-fundo-azul.svg" 
              alt="Rateria" 
              width={200} 
              height={200} 
            />
            <nav>
              <Link href="/">
                  <a className={
                    currentPage==="About" ? styles.foco : ""
                  }>Sobre</a>
                </Link>
              <Link href="/contacts">
              <a className={
                currentPage==="Contacts" ? styles.foco : ""
                  }>Contatos</a>
              </Link>
            </nav>
          </div>
        </div>
        <div className={styles.placeholder}/>
      </>
    );
  }
  
export default Header