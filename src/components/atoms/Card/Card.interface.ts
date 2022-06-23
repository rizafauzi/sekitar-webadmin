import React from 'react'

/**
 * Interface Reference:
 * @see https://ant.design/components/card/
 */
export interface ICardProperties {
  /**
   * The className of container
   * @type string
   * @example "m-2 p-2 bg-white"
   */
  parentClassName?: string
  /**
   * The className of children
   * @type string
   * @example "m-2 p-2 bg-white"
   */
  className?: string
  /**
   * The className of container
   * @type ReactNode | string
   * @example (<span> Title Card </span>) | "Title Card"
   */
  title?: React.ReactNode | string
  /**
   * The children of element
   * @type React.ReactNode
   * @example (<div> children </div>)
   */
  children: React.ReactNode
  /**
   * The action list, shows at the bottom of the Card
   * @type Array<ReactNode>
   * @example
   * [
   * <Button> Action </Button>,
   * <Button> Action </Button>,
   * <Button> Action </Button>,
   * ]
   */
  actions?: Array<React.ReactNode>
  /**
   * Toggles rendering of the border around the card
   * @type boolean
   * @example true
   */
  bordered?: boolean
  /**
   * Card cover
   * @type ReactNode
   * @example
   * cover={
      <img
        alt="example"
        src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
      />
    }
   *
   */
  cover?: React.ReactNode
  /**
   * Lift up when hovering card
   * @type boolean
   * @example false
   */
  hoverable?: boolean
  /**
   * Shows a loading indicator while the contents of the card are being fetched
   * @type boolean
   * @example false
   */
  loading?: boolean
  /**
   * Size of card
   * @type boolean
   * @example "small"
   */
  size?: 'default' | 'small'
  /**
   * The style object of container
   * @type CSSProperties
   * @example style={{ width: 300 }}
   */
  style?: React.CSSProperties
}
