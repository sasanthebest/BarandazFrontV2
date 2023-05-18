"use client";
import AdsBody from "../body/AdsBody";
const MyBookmarks = ({ data }) => {
  // const [bookmarkData, setBookmarkData] = useState([]);
  // const [err, setErr] = useState(false);

  // useEffect(() => {
  //   const myBookmarksData = async () => {
  //     const res = await getMyBookmarks();
  //     console.log(res);
  //     // console.log(res);
  //     // setBookmarkData(res.data);

  //     // setBookmarkData(data);
  //     // setErr(err);
  //     // await apiClient
  //     //   .get(myBookmarks)
  //     //   .then((res) => {
  //     //     setBookmarkData(res.data);
  //     //   })
  //     //   .catch((err) => {
  //     //     setErr(err);
  //     //     console.log("the error is:", err.message);
  //     //   });
  //   };
  //   myBookmarksData();
  // }, []);

  if (err) {
    return <p>سرور به گا رفته</p>;
  }

  return (
    <div>
      <AdsBody data={data} />
    </div>
  );
};

export default MyBookmarks;
