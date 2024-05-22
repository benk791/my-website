import Header from '@/app/ui/header';
import Footer from "@/app/ui/footer"
import '@/app/ui/global.css';
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
        <body>
            <Header />
            {children}
            <Footer />
        </body>
    </html>
  );
}