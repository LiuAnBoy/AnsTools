import 'react-quill/dist/quill.snow.css';

import { FC } from 'react';
import ReactQuill from 'react-quill';

const TextEditor: FC<TextEditorProps> = ({ value, onChange }) => {
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
