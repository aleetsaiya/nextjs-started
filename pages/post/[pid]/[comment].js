import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  console.log("Router", router);
  const { pid, comment } = router.query;

  return (
    <p>
      Pid: {pid} Comment: {comment}
    </p>
  );
};

export default Post;
