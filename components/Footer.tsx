import React from "react";

/**
 * This fucntion handles the footer for the page
 * @returns Footer
 */
export default function Footer() {
  return (
    <footer className="flex justify-center text-white mt-auto">
      <p className="mb-4 italic text-xs mt-5">
        This product uses the TMDb API but is not endorsed or certified by TMDb.
        Created by Reza Parvar.
      </p>
    </footer>
  );
}
