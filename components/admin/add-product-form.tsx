"use client";

import { addProduct } from "@/app/admin/action";
import { ProductForm } from "@/components/admin/product-form";

export function AddProductForm() {
  return (
    <ProductForm
      action={addProduct}
      dialogTitle="Add New Product"
      submitButtonText="Add"
    />
  );
}
