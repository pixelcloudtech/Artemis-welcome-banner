// Component.jsx
export default function WelcomeBanner({ title, backgroundColor }) {
  return React.createElement(
    'div',
    {
      style: {
        backgroundColor: backgroundColor || '#2563eb',
        color: 'white',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        fontFamily: 'sans-serif'
      }
    },
    React.createElement('h2', null, title),
    React.createElement('p', null, 'This plugin was loaded from GitHub!')
  );
}
