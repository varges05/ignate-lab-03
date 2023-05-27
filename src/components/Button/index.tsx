import { ButtonHTMLAttributes, ReactNode } from 'react'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
}

export function Button({
  children,
  asChild,
  className,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        ` w-full rounded
         bg-cyan-500
          px-4 py-3 text-sm
           font-semibold
            text-black 
           ring-white
            transition-colors 
            hover:bg-cyan-300 
            focus:ring-2`,
        className,
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
