"use client";

import { Button, Card } from "flowbite-react";
import { BsDot } from "react-icons/bs";
import { ProductType } from "../../types/types";
import { readableTimeFormat } from "../../utils/readable-time-format";
import { useState } from "react";
import { toast } from "react-toastify";
import API from "../../api/api";

export function AdminProductCard({ product }: { product: ProductType }) {
  const baseURL = `${window.location.protocol}//${window.location.host}`;

  const [loading, setLoading] = useState<boolean>(false);

  const handleDelete = async () => {
    setLoading(true);
    try {
      await API.delete("product", {
        params: {
          slug: product.slug,
        },
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
      toast.error("Request failed", { position: "bottom-right" });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Card
      className="max-w-md"
      renderImage={() => (
        <img src={product?.cover_image} alt="image 1" className="w-full h-56" />
      )}
    >
      <div className="flex justify-start gap-5 items-center">
        <p className="text-xs uppercase font-semibold tracking-tight">
          {product?.category}
        </p>
        <BsDot />
        <p className="text-xs">
          {readableTimeFormat(product?.createdAt ?? "")}
        </p>
      </div>

      {/* //external url */}
      <a
        href={`${baseURL}/product/${product.slug}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <h5 className="font-bold tracking-tight text-blue-600 dark:text-white uppercase hover:underline cursor-pointer">
          {product?.name}
        </h5>
      </a>
      <div className="flex justify-center gap-5">
        <Button
          onClick={() =>
            (window.location.href = `${baseURL}/product/${product.slug}`)
          }
          size="sm"
          className="bg-green-400 rounded"
        >
          View{" "}
        </Button>
        <Button size="sm" className="rounded">
          Edit{" "}
        </Button>
        <Button
          isProcessing={loading}
          onClick={handleDelete}
          size="sm"
          className="rounded"
          color="failure"
        >
          {loading ? "Deleting..." : "Delete"}
        </Button>
      </div>
    </Card>
  );
}
