import { createRoot } from 'react-dom/client';
import App from './Index/main';
import './Setting/global.less';

createRoot(document.getElementById('app')).render(<App />);
