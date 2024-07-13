"use client";

import { updateProduct } from "@/app/admin/action";
import { ProductForm } from "@/components/admin/product-form";
import { TableProductProps } from "@/lib/definition";

export function EditProductForm({ product }: { product: TableProductProps }) {
  return (
    <ProductForm
      action={updateProduct}
      dialogTitle="Edit Product"
      submitButtonText="Update"
      product={product}
    />
  );
}
