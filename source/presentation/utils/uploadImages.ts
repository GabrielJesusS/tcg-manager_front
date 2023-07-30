export function uploadImages(
  fileList: File[] | FileList,
  inserter: (url: string) => void
): void {
  Array.from(fileList).forEach((file) => {
    const reader = new FileReader();
    const [mime] = file.type.split("/");

    if (mime === "image") {
      reader.addEventListener("load", () => {
        const url = reader.result;
        inserter(url as string);
      });

      reader.readAsDataURL(file);
    }
  });
}
