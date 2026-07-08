'use client';

import { usePathname } from "next/navigation";
import Link from "next/link";

const getIconColor = (isActive) => (isActive ? "#3b82f6" : "#878787");

// تعریف  به عنوان کامپوننت 
const IconDashboard = ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M4 4h6v6H4zM14 4h6v6h-6zM4 14h6v6H4zM14 14h6v6h-6z" />
    </svg>
);

const IconMessage = ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
);

const IconPortfolio = ({ color }) => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
);

const NavItems = [
    { route: '/admin', svg: IconDashboard },
    { route: '/admin/message', svg: IconMessage },
    { route: '/admin/portfolio', svg: IconPortfolio },
];

const Navigation = () => {
    const pathName = usePathname();

    return (
        <div style={{ borderLeftWidth: '2px', borderColor: '#e5e7eb' }}>
            {NavItems.map((itm) => {
                const isActive = itm.route === pathName;
                const color = getIconColor(isActive);
                const IconComponent = itm.svg; // گرفتن کامپوننت از آرایه

                return (
                    <Link href={itm.route} key={itm.route} style={{display: 'flex' ,justifyContent: 'center', alignContent: 'center', padding: '4px' , marginTop: '8px'}}>
                        <IconComponent color={color} />
                    </Link>
                );
            })}
        </div>
    );
};

export default Navigation;