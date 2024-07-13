"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useFormState } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { anton } from "@/lib/fonts";
import { Label } from "@/components/ui/label";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import SubmitButton from "@/components/admin/submit-button";
import GenderSelectMenu from "@/components/admin/gender-select-menu";
import BrandSelectMenu from "@/components/admin/brand-select-menu";
import CategorySelectMenu from "@/components/admin/category-select-menu";

type Errors = {
  name?: string[];
  category?: string[];
  brand?: string[];
  gender?: string[];
  price?: string[];
  image?: string[];
  general?: string[];
};

type FormState = {
  errors: Errors;
  message: string;
};

const initialState: FormState = {
  errors: {},
  message: "",
};

interface ProductFormProps {
  action: any;
  dialogTitle: string;
  submitButtonText: string;
  product?: any;
}

export function ProductForm({
  action,
  dialogTitle,
  submitButtonText,
  product,
}: ProductFormProps) {
  const [state, formAction] = useFormState(action, initialState);
  const formRef = useRef<HTMLFormElement>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    if (!isDialogOpen) {
      formRef.current?.reset();
      state.message = "";
      state.errors = {};
    }
  }, [isDialogOpen, state]);

  return (
    <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
      <DialogTrigger asChild>
        <Button variant={product ? "outline" : "default"}>
          <span>{product ? "View" : "Add Product"}</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="flex justify-center items-center min-h-[600px]">
          <div className="w-[500px] flex flex-col justify-center items-center gap-4 p-6">
            <span className={`${anton.className} text-2xl`}>{dialogTitle}</span>
            <form
              className="flex flex-col gap-4 w-full"
              action={formAction}
              ref={formRef}
            >
              {state.message && (
                <p
                  aria-live="polite"
                  className="text-green-500 mt-2 text-center text-xl  flex items-center justify-center gap-2"
                >
                  <IoMdCheckmarkCircleOutline />
                  <span>{state.message}</span>
                </p>
              )}
              {state.errors?.general && (
                <p
                  aria-live="polite"
                  className="text-red-500 mt-2 text-center text-xl flex items-center justify-center gap-2"
                >
                  <MdErrorOutline />
                  <span>{state.errors.general}</span>
                </p>
              )}
              {product && (
                <input type="hidden" name="productId" value={product.id} />
              )}
              <div>
                <Label
                  htmlFor="name"
                  className={`${anton.className} text-lg flex justify-center`}
                >
                  Name
                </Label>
                {state.errors.name && (
                  <span className="text-red-500">{state.errors.name[0]}</span>
                )}
                <Input
                  type="text"
                  name="name"
                  id="name"
                  required
                  defaultValue={product?.name || ""}
                  placeholder="Air Force 1"
                />
              </div>
              <div>
                <Label
                  htmlFor="category"
                  className={`${anton.className} text-lg flex justify-center`}
                >
                  Category
                </Label>
                {state.errors.category && (
                  <span className="text-red-500">
                    {state.errors.category[0]}
                  </span>
                )}
                <CategorySelectMenu defaultValue={product?.category} />
              </div>
              <div>
                <Label
                  htmlFor="brand"
                  className={`${anton.className} text-lg flex justify-center`}
                >
                  Brand
                </Label>
                {state.errors.brand && (
                  <span className="text-red-500">{state.errors.brand[0]}</span>
                )}
                <BrandSelectMenu defaultValue={product?.brand} />
              </div>
              <div>
                <Label
                  htmlFor="gender"
                  className={`${anton.className} text-lg flex justify-center`}
                >
                  Gender
                </Label>
                {state.errors.gender && (
                  <span className="text-red-500">{state.errors.gender[0]}</span>
                )}
                <GenderSelectMenu defaultValue={product?.gender} />
              </div>
              <div>
                <Label
                  htmlFor="price"
                  className={`${anton.className} text-lg flex justify-center`}
                >
                  Price
                </Label>
                {state.errors.price && (
                  <span className="text-red-500">{state.errors.price[0]}</span>
                )}
                <Input
                  type="number"
                  name="price"
                  id="price"
                  min={1}
                  required
                  defaultValue={product?.price || ""}
                  placeholder="$249,99"
                />
              </div>
              <div>
                <Label
                  htmlFor="image"
                  className={`${anton.className} text-lg flex justify-center`}
                >
                  Image Url
                </Label>
                {state.errors.image && (
                  <span className="text-red-500">{state.errors.image[0]}</span>
                )}
                <Input
                  type="text"
                  name="image"
                  id="image"
                  required
                  defaultValue={product?.image || ""}
                  placeholder="https://images.unsplash.com/photo-1633292587737..."
                />
              </div>
              <SubmitButton text={submitButtonText} />
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
