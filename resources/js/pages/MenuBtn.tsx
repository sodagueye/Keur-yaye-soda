import React from "react";
import { Link } from "@inertiajs/react";
import BaseLayout from "@/layouts/base-layout";

export default function MenuBtn() {
  return (
    <BaseLayout>
      <div className="flex flex-wrap justify-center gap-4 pt-10 mt-10">
        <Link
          href="/menu/tout"
          className="px-4 py-2 bg-[#91725d] text-white rounded-full shadow-md hover:bg-[#7a5f4b] transition"
        >
          Tout
        </Link>
        <Link
          href="/menu/platsSenegalais"
          className="px-4 py-2 bg-[#91725d] text-white rounded-full shadow-md hover:bg-[#7a5f4b] transition"
        >
          Plats Sénégalais
        </Link>
        <Link
          href="/menu/burgers"
          className="px-4 py-2 bg-[#91725d] text-white rounded-full shadow-md hover:bg-[#7a5f4b] transition"
        >
          FastFood
        </Link>
        <Link
          href="/menu/cuisineAilleurs"
          className="px-4 py-2 bg-[#91725d] text-white rounded-full shadow-md hover:bg-[#7a5f4b] transition"
        >
          Cuisine D'ailleurs
        </Link>
        <Link
          href="/menu/boissons"
          className="px-4 py-2 bg-[#91725d] text-white rounded-full shadow-md hover:bg-[#7a5f4b] transition"
        >
          Boissons
        </Link>
        <Link
          href="/menu/desserts"
          className="px-4 py-2 bg-[#91725d] text-white rounded-full shadow-md hover:bg-[#7a5f4b] transition"
        >
          Desserts
        </Link>
      </div>
    </BaseLayout>
  );
}
