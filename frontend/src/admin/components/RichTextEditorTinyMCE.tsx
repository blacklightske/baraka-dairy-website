import { Editor } from "@tinymce/tinymce-react";
import { useRef } from "react";

interface RichTextEditorTinyMCEProps {
  onChange: (content: string) => void;
}

export default function RichTextEditorTinyMCE({
  onChange,
}: RichTextEditorTinyMCEProps) {
  const editorRef = useRef<Editor | null>(null);

  return (
    <div>
      <Editor
        ref={editorRef}
        apiKey="vtee3e0m52j7l41hhyr08zfyunl1xmfl6v635dhhv8a8xz2s"
        init={{
          plugins: [
            "anchor",
            "autolink",
            "charmap",
            "codesample",
            "emoticons",
            "image",
            "link",
            "lists",
            "media",
            "searchreplace",
            "table",
            "visualblocks",
            "wordcount",
          ],
          toolbar:
            "undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",
        }}
        initialValue=""
        onEditorChange={(content) => onChange(content)} // Pass updated content to the onChange prop
      />
    </div>
  );
}
