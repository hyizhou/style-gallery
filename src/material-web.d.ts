// @material/web 组件在 React 18 JSX 中的类型声明
import type { DetailedHTMLProps, HTMLAttributes } from 'react'

type MdProps = DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>
type MdButtonProps = MdProps & { disabled?: boolean }
type MdToggleProps = MdProps & { disabled?: boolean; selected?: boolean; checked?: boolean }
type MdFieldProps = MdProps & {
  disabled?: boolean
  label?: string
  placeholder?: string
  type?: string
}
type MdSliderProps = MdProps & {
  value?: number
  min?: number
  max?: number
  step?: number
  labeled?: boolean
}
type MdProgressProps = MdProps & { value?: number; max?: number }
type MdChipProps = MdProps & { disabled?: boolean; selected?: boolean; label?: string }
type MdFabProps = MdProps & { variant?: string; size?: string; lowered?: boolean }

declare module '@material/web/*'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'md-filled-button': MdButtonProps
      'md-filled-tonal-button': MdButtonProps
      'md-outlined-button': MdButtonProps
      'md-text-button': MdButtonProps
      'md-icon-button': MdButtonProps
      'md-fab': MdFabProps
      'md-filled-text-field': MdFieldProps
      'md-outlined-text-field': MdFieldProps
      'md-checkbox': MdToggleProps
      'md-switch': MdToggleProps
      'md-slider': MdSliderProps
      'md-assist-chip': MdChipProps
      'md-filter-chip': MdChipProps
      'md-input-chip': MdChipProps
      'md-linear-progress': MdProgressProps
      'md-circular-progress': MdProgressProps
      'md-elevated-card': MdProps
      'md-divider': MdProps
    }
  }
}
