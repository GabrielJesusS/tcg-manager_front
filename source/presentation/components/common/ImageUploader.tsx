import CloudIcon from "@/presentation/public/images/icons/cloud-upload.svg";
import React, { ChangeEvent } from "react";

interface IImageUploaderProps {
  label: React.ReactNode;
  onChange: (files: File[] | FileList) => void;
}

export const ImageUploader = ({
  label,
  onChange,
}: IImageUploaderProps): JSX.Element => {
  function handleChange(e: ChangeEvent<HTMLInputElement>): void {
    if (!e.target.files) return;
    onChange(e.target.files);
  }

  return (
    <div>
      <label className="transition-all duration-150 ease-in-out cursor-pointer font-bold hover:text-secondary-light focus:text-secondary-dark text-secondary block">
        <span className="flex space-x-4">
          <span>{label}</span>
          <CloudIcon className="w-6 h-6 fill-current" />
        </span>
        <input
          type="file"
          className="hidden"
          accept="image/*"
          onChange={handleChange}
          value={""}
        />
      </label>
    </div>
  );
};
