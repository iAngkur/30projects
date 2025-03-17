import React, { useState } from "react";
import Title from "../components/Title";
import Card from "../components/Card";
import {
  AiFillHeart,
  AiFillSmile,
  AiOutlineComment,
  AiOutlineHeart,
} from "react-icons/ai";

function LikeMyPhoto() {
  const [isLiked, setIsLiked] = useState(false);
  const [countLike, setCountLike] = useState(0);

  const handleLikeClick = () => {
    if (!isLiked) {
      setIsLiked(true);
      setCountLike((countLike) => countLike + 1);
    } else {
      setIsLiked(false);
    }
  };

  return (
    <div className="container text-center">
      <Title title="Like Photo App" />
      <Title className="subtitle" title={`Likes: ${countLike}`} />

      <Card>
        <div className="card-header d-flex align-items-center justify-center gap-sm">
          <AiFillSmile className="w-25px h-25px" />
          <Title className="subtitle" title="DogyDog" />
        </div>
        <div className="card-body cursor-pt" onClick={handleLikeClick}>
          <img
            src="https://random.dog/554ebddb-ca7b-4e45-954f-0b7e1f509538.jpg"
            alt="dog"
          />
        </div>

        <div className="card-footer d-flex justify-space-between">
          <AiOutlineComment className="w-25px h-25px" />

          <div className="cursor-pt" onClick={handleLikeClick}>
            {isLiked ? (
              <AiFillHeart className="w-25px h-25px danger" />
            ) : (
              <AiOutlineHeart className="w-25px h-25px" />
            )}
          </div>
        </div>
      </Card>
    </div>
  );
}

export default LikeMyPhoto;
