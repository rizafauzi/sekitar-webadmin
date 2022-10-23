/* eslint-disable react/button-has-type */
/* eslint-disable sonarjs/no-duplicate-string */
/* eslint-disable unicorn/prevent-abbreviations */
import React from 'react'
import { Editor } from '@tiptap/react'
import Icons from '@assets/Icons'

interface MenuBarProps {
  editor: Editor | null
}

const MenuBar = (props: MenuBarProps) => {
  const { editor } = props

  if (!editor) {
    return null
  }
  return (
    <div className="flex flex-row gap-3 bg-grey2 px-4 py-3">
      <button
        onClick={() => editor?.chain().focus().toggleBold().run()}
        className={editor?.isActive('bold') ? 'bg-gray-300 rounded' : 'rounded'}
      >
        <Icons name="bold" />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleItalic().run()}
        className={editor?.isActive('italic') ? 'bg-gray-300 rounded' : 'rounded'}
      >
        <Icons name="italic" />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleUnderline().run()}
        className={editor?.isActive('underline') ? 'bg-gray-300 rounded' : 'rounded'}
      >
        <Icons name="underline" />
      </button>
      <button
        onClick={() => editor?.chain().focus().toggleBulletList().run()}
        className={editor?.isActive('bulletList') ? 'bg-gray-300 rounded' : 'rounded'}
      >
        <Icons name="bullets-list" />
      </button>
    </div>
  )
}

export default MenuBar
