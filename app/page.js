"use client"

import Menubar from '@/components/Header/Menubar';
import styles from './page.module.css'
import IoforDetection from '@/components/IOforDetection/IoforDetection';

export default function Home() {

  return (
    <main className={styles.main}>
      <Menubar/>
      <IoforDetection/>
      
    </main>
  )
}
