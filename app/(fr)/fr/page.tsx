import Home from '../../components/Home';
import { dictionaries } from '../../i18n';

export default function FrenchHomePage() {
  return <Home locale="fr" dictionary={dictionaries.fr} />;
}
