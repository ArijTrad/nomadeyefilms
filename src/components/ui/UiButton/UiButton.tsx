//UiButton.tsx


import styles from './UiButton.module.css'

type UiButtonProps = {
    variant?: 'primary' | 'ghost' 
    children: React.ReactNode
    onClick?: () => void
    className?: string
}

export default function UiButton({ 
    variant = 'primary', 
    children,
    onClick,
    className 
}: UiButtonProps) {
    return (
        <button 
            className={`${styles.button} ${styles[variant]} ${className || ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}