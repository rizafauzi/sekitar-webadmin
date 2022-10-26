/* eslint-disable newline-per-chained-call */
/* eslint-disable react/button-has-type */
/* eslint-disable unicorn/prevent-abbreviations */
import React, { useEffect } from 'react'
import { EditorContent, useEditor } from '@tiptap/react'
import Underline from '@tiptap/extension-underline'
import StarterKit from '@tiptap/starter-kit'
import { Wrapper } from './TextEditor.style'
import MenuBar from './MenuBar'

interface TextEditorProps {
  initialValue?: string
  onChange: (val: string) => void
}

const TextEditor = (props: TextEditorProps) => {
  const { initialValue, onChange } = props
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: initialValue
  })

  useEffect(() => {
    editor?.commands.setContent(initialValue || '')
  }, [initialValue])

  useEffect(() => {
    onChange(editor?.getHTML() || '')
  }, [editor?.getHTML()])

  return (
    <Wrapper className="border rounded-lg overflow-hidden">
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </Wrapper>
  )
}

TextEditor.defaultProps = {
  initialValue: ''
}

export default TextEditor
