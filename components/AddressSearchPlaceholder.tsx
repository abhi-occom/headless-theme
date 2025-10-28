// components/AddressSearchPlaceholder.tsx
"use client";
import React from "react";

/**
 * This is a placeholder for the PHP shortcode:
 * <?php echo do_shortcode('[address_search_homepage]'); ?>
 *
 * Replace this with a real React component later (hooked to WP).
 */
export default function AddressSearchPlaceholder() {
  return (
    <div className="address-search-container">
      <div className="address-search-inner-container">
        <input placeholder="Enter your address" aria-label="Address search" />
        <button>Check</button>
      </div>
    </div>
  );
}
