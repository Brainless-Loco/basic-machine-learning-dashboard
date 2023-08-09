"use client"

import Menubar from '@/components/Header/Menubar';
import styles from './page.module.css'
import IoforDetection from '@/components/IOforDetection/IoforDetection';

export default function Home() {

  const FlaskAPICall = ()=>{
    const flaskAPIEndpoint = `http://139.144.116.9:9999/`;
    axios.get(flaskAPIEndpoint)
    .then(response => {
      // Handle the response data
      // console.log(response.data.solution);
      setgrid(response.data.solution)
      setloading(false)
      setModalVisible(true)
    })
    .catch(error => {
      // Handle any errors that occur during the request
      console.error(error);
    });
    
  }

  return (
    <main className={styles.main}>
      <Menubar/>
      <IoforDetection/>
      
    </main>
  )
}
