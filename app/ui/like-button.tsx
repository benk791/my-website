"use client";

import { useState } from "react";

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <button
      onClick={handleClick}
      className="p-1 my-3 rounded-md border-2 border-themeText hover:border-themeHighlight hover:text-themeHighlight"
    >
      Like ({likes})
    </button>
  );
}
