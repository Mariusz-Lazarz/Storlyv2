"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useFormState } from "react-dom";
import { useRef, useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { anton } from "@/lib/fonts";
import { Label } from "@/components/ui/label";
import { addProduct } from "@/app/admin/action";
import { MdErrorOutline } from "react-icons/md";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import SubmitButton from "@/components/admin/submit-button";
import GenderSelectMenu from "@/components/admin/gender-select-menu";
import BrandSelectMenu from "@/components/admin/brand-select-menu";
import CategorySelectMenu from "@/components/admin/category-select-menu";
import { IoIosAddCircleOutline } from "react-icons/io";

const initialState = {
  errors: {},
  message: "",
};

export function AddProductForm() {
  const [state, formAction] = useFormState(addProduct, initialState);
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
        <Button className="flex justify-center items-center">
          <IoIosAddCircleOutline className="w-[20px] h-[20px]" />
          <span>Add Product</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="p-0">
        <div className="flex justify-center items-center h-[600px]">
          <div className=" w-[500px] flex flex-col justify-center items-center gap-4 p-6">
            <span className={`${anton.className} text-2xl`}>
              Add New Product
            </span>
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
                <CategorySelectMenu />
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
                <BrandSelectMenu />
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
                <GenderSelectMenu />
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
                  placeholder="https://images.unsplash.com/photo-1633292587737..."
                />
              </div>
              <SubmitButton text="Add" />
            </form>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
