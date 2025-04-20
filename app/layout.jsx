import Navigation from './components/Navigation';
import './globals.css';

export const metadata = {
    title: 'Professional Rings',
    description: 'Professional Rings - Your trusted source for quality rings across Canada',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Navigation />
                {children}
            </body>
        </html>
    );
}
