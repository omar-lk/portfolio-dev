import Gallery from '../components/gallery/Gallery'
import styles from "./gallery.module.css"
export default function GalleryPage() {
  return (
    <div className={styles.galleryContainer}>
      <Gallery />
    </div>
  )
}
