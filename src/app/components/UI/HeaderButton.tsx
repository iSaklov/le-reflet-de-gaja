import { classNames } from '@/utils/classNames'
import styles from '@/styles/HeaderButton.module.scss'

interface HeaderButtonProps {
  children: React.ReactNode
  onClick: () => void
  isFlipped?: boolean
}

export default function HeaderButton({
  onClick,
  isFlipped,
  children,
}: HeaderButtonProps) {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'relative block overflow-hidden rounded border border-solid border-current text-base uppercase focus:outline-none',
        styles.btn
      )}
    >
      <span>
        <span
          className={classNames(
            'before:absolute before:inset-0 before:-z-10 before:bg-gaja-gradient before:transition-opacity before:delay-500 before:duration-1000',
            isFlipped ? 'before:opacity-100' : 'before:opacity-0'
          )}
        >
          {children}
        </span>
      </span>
    </button>
  )
}
