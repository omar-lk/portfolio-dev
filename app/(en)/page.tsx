import Home from '../components/Home';
import { dictionaries } from '../i18n';

export default function EnglishHomePage() {
  return <Home locale="en" dictionary={dictionaries.en} />;
}
