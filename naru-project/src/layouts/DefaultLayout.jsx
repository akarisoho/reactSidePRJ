import GNB from '../components/GNB';

export default function DefaultLayout({ children }) {
  return (
    <div>
      <GNB />
      <main>{children}</main>
    </div>
  );
}