import About from '../../../components/about/About';
import { dictionaries } from '../../../i18n';
import { createLocalizedMetadata } from '../../../i18n/metadata';

export const metadata = createLocalizedMetadata('fr', 'about', '/about');

export default function FrenchAboutPage() {
  return <About locale="fr" dictionary={dictionaries.fr} />;
}
