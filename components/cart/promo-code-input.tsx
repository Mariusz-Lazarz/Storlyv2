import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { useState } from "react";
import { BiError } from "react-icons/bi";
import { RiCheckboxCircleLine } from "react-icons/ri";

const PromoCodeInput = ({
  setDiscount,
  discount,
}: {
  setDiscount: (value: number) => void;
  discount: number;
}) => {
  const [promoCode, setPromoCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPromoCode(e.target.value);
  };

  const promoCodeSubmitHandler = () => {
    if (promoCode !== "SUMMER") {
      setError("Invalid code!");
    } else {
      setSuccess("Discount applied!");
      setError(null);
      setPromoCode("");
      setDiscount(25);
    }
  };
  return (
    <div className="flex flex-col gap-2">
      <span>Have a promo code? </span>
      <div className="flex flex-row gap-2">
        <Input
          placeholder="Enter promo code"
          value={promoCode}
          onChange={onChangeHandler}
          className="py-6"
        />
        <Button
          className="w-full rounded-none py-6 uppercase"
          onClick={promoCodeSubmitHandler}
          disabled={promoCode.length === 0}
        >
          Apply promo code
        </Button>
      </div>
      {error && (
        <div className="flex text-lg text-red-500 items-center gap-2">
          <BiError />
          <p>{error}</p>
        </div>
      )}
      {success && (
        <div className="flex text-lg text-green-500 items-center gap-2">
          <RiCheckboxCircleLine />
          <p>{success}</p>
        </div>
      )}
    </div>
  );
};

export default PromoCodeInput;
