import { marked } from "marked";
import React from "react";
marked.setOptions({
  breaks: true,
});
export const Preview = ({ markdown }) => {
  return (
    <div
      id="preview"
      dangerouslySetInnerHTML={{
        __html: marked(markdown),
      }}
    ></div>
  );
};
