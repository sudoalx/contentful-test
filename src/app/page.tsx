import Image from "next/image";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import data from "../data/site.json";

export default function Home() {
  const { title, banner, body, products } = data;

  return (
    <main className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">{title}</h1>
      <div className="flex items-center mb-8">
        <div className="w-1/2 mr-4">
          <Image
            src={`https:${banner.fields.file.url}`}
            alt={title}
            width={500}
            height={500}
          />
        </div>
        <div className="w-1/2">
          {/* welcome paragraph */}
          <div>{documentToReactComponents(body as Document)}</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.sys.id} className="border p-4 rounded">
            <h2 className="text-xl font-semibold mb-4">
              {product.fields.name}
            </h2>
            <div className="mb-4">
              <Image
                className="rounded-lg"
                src={`https:${product.fields.image.fields.file.url}`}
                alt={product.fields.name}
                width={200}
                height={200}
              />
            </div>
            <div>
              {documentToReactComponents(
                product.fields.description as Document
              )}
            </div>
            <span className="text-sm font-semibold mt-4">Tags:</span>
            <span className="text-sm text-gray-500 border px-2 py-1 rounded">
              {product.fields.tags.fields.name}
            </span>
          </div>
        ))}
      </div>
    </main>
  );
}
