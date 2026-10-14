import Gallery from '../../components/gallery/Gallery';
import { dictionaries } from '../../i18n';
import { createLocalizedMetadata } from '../../i18n/metadata';
import styles from '../../gallery/gallery.module.css';

export const metadata = createLocalizedMetadata('en', 'gallery', '/gallery');

export default function EnglishGalleryPage() {
  return (
    <div className={styles.galleryContainer}>
      <Gallery locale="en" dictionary={dictionaries.en} />
    </div>
  );
}
