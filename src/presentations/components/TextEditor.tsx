'use client';

import 'react-quill/dist/quill.snow.css';

import dynamic from 'next/dynamic';
import { FC, useMemo } from 'react';

const TextEditor: FC<TextEditorProps> = ({ value, onChange }) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import('react-quill'), { ssr: false }),
    [],
  );
  const toolbar = [['bold', 'underline'], [{ list: 'ordered' }], ['link']];

  const modules = {
    toolbar,
  };

  return (
    <>
      <ReactQuill
        style={{ backgroundColor: 'white' }}
        value={value || ''}
        onChange={onChange}
        modules={modules}
      />
    </>
  );
};

export default TextEditor;

interface TextEditorProps {
  value: string;
  onChange: (value: string) => void;
}
