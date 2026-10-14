import Gallery from '../../../components/gallery/Gallery';
import { dictionaries } from '../../../i18n';
import { createLocalizedMetadata } from '../../../i18n/metadata';
import styles from '../../../gallery/gallery.module.css';

export const metadata = createLocalizedMetadata('fr', 'gallery', '/gallery');

export default function FrenchGalleryPage() {
  return (
    <div className={styles.galleryContainer}>
      <Gallery locale="fr" dictionary={dictionaries.fr} />
    </div>
  );
}
