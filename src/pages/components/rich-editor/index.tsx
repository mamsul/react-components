import { useEditor, EditorContent, Editor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Image from '@tiptap/extension-image';
import Dropcursor from '@tiptap/extension-dropcursor';

import './editor.css';
import IcPlus from '../../../components/icons/ic-plus';
import { useEffect, useRef, useState } from 'react';

const RichEditor = () => {
  const editor = useEditor({
    extensions: [StarterKit, Image, Dropcursor],
    content: '',
  });

  const [showFormatOpt, setShowFormatOpt] = useState(false);
  const formatOptRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        formatOptRef.current &&
        !formatOptRef.current.contains(event.target as Node)
      ) {
        setShowFormatOpt(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSubmit = () => {
    if (editor) {
      const json = editor.getJSON();
      const html = editor.getHTML();
      console.log('Editor content in JSON format:', json);
      console.log('Editor content in HTML format:', html);
    }
  };

  if (!editor) return null;

  return (
    <div className="relative border rounded-xl space-y-4 h-80 flex flex-col">
      <div className="flex-1 overflow-auto">
        <EditorContent editor={editor} className="prose p-4" />
      </div>

      <div className="px-2 w-full flex justify-between items-center h-12">
        <div className="flex gap-x-2">
          <div ref={formatOptRef} className="relative">
            <button
              className="size-6 flex justify-center items-center hover:bg-gray-200 border rounded"
              onClick={() => setShowFormatOpt((prev) => !prev)}
            >
              <IcPlus className="size-4" />
            </button>

            {showFormatOpt && (
              <div className="absolute bottom-full mb-1 left-0">
                <CardFormatOptions
                  editor={editor}
                  onSelect={() => setShowFormatOpt(false)}
                />
              </div>
            )}
          </div>
        </div>

        <button
          className="py-1.5 px-5 border rounded-md bg-blue-950 text-white text-sm"
          onClick={handleSubmit}
        >
          Send
        </button>
      </div>
    </div>
  );
};

const CardFormatOptions = (props: { editor: Editor; onSelect: () => void }) => {
  const { editor, onSelect } = props;

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const run = (command: () => void) => {
    command();
    onSelect();
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && editor) {
      const reader = new FileReader();
      reader.onload = () => {
        const base64 = reader.result as string;
        editor.chain().focus().setImage({ src: base64 }).run();
      };
      reader.readAsDataURL(file);
    }
  };

  const formats = [
    { label: 'Bold', command: () => editor.chain().focus().toggleBold().run() },
    {
      label: 'Italic',
      command: () => editor.chain().focus().toggleItalic().run(),
    },
    {
      label: 'Ordered List',
      command: () => editor.chain().focus().toggleOrderedList().run(),
    },
    {
      label: 'Bullet List',
      command: () => editor.chain().focus().toggleBulletList().run(),
    },
    { label: 'Code', command: () => editor.chain().focus().toggleCode().run() },
    {
      label: 'Code Block',
      command: () => editor.chain().focus().toggleCodeBlock().run(),
    },
    {
      label: 'Blockquote',
      command: () => editor.chain().focus().toggleBlockquote().run(),
    },
  ];

  return (
    <div className="w-40 rounded bg-white border flex flex-col">
      {formats.map((item) => (
        <button
          key={item.label}
          onClick={() => run(item.command)}
          className="px-4 py-2 hover:bg-gray-100 text-left"
        >
          {item.label}
        </button>
      ))}

      <button
        className="px-4 py-2 hover:bg-gray-100 text-left"
        onClick={() => fileInputRef.current?.click()}
      >
        Image
      </button>

      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="hidden"
      />
    </div>
  );
};

export default RichEditor;
