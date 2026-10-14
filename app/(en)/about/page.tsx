import About from '../../components/about/About';
import { dictionaries } from '../../i18n';
import { createLocalizedMetadata } from '../../i18n/metadata';

export const metadata = createLocalizedMetadata('en', 'about', '/about');

export default function EnglishAboutPage() {
  return <About locale="en" dictionary={dictionaries.en} />;
}
