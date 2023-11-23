import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { routes } from './routes/routes';



const root=ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
)
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: 'es',
      hideToolbar: true,
    },
    'google_translate_element'
  );

return(
  <body>
  <script>
  <div id="google_translate_element"></div>
</script>
<script type="text/javascript" src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
</body>
)};
// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
