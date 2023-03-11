import ProfilePicture from "@/presentation/public/images/rsc/mocks/profile-picture.png";

interface IComment {
  id: string;
  userName: string;
  releaseDate: string;
  profilePicture: string;
  comment: string;
}

export const CommentItems: IComment[] = [
  {
    id: "01",
    userName: "John",
    releaseDate: "20/10/2022 - 12:34",
    comment:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.",
    profilePicture: ProfilePicture.src,
  },
];
