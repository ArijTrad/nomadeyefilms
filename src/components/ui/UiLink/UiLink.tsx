// UiLink.tsx
import styles from './UiLink.module.css'

type UiLinkProps = {
    href: string
    children: React.ReactNode
    variant?: 'nav' | 'footer' | 'underline'
    onClick?: () => void
    className?: string
}

export default function UiLink({ 
    href, 
    children, 
    variant = 'nav', 
    onClick,
    className 
}: UiLinkProps) {
    return (
        <a 
            href={href} 
            className={`${styles.alink} ${styles[variant]} ${className || ''}`}  
            onClick={onClick}
        >
            {children}
        </a>
    )
}